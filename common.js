/* =========================================================
   COMMON.JS — Uchumi Langata Road POS (single branch, offline-first)
   Shared by index.html (cashier) and manager.html (manager).

   localStorage keys:
     restaurantOrders   — array of every order ever taken on this device
     pendingSync        — orders that failed to reach Google Sheets
     closedDays         — array of {date, totalRevenue, orderCount, closedAt}
     lastClosedDate     — YYYY-MM-DD of the last day auto-closed
     sheetsWebAppUrl    — Google Apps Script Web App URL
     managerPassword    — manager dashboard password (default uchumi2025)
     cancelPin          — PIN required to cancel an order (default 1234)
     lastSyncTime       — ISO timestamp of the last successful sync
   ========================================================= */

const BRANCH_NAME = 'Uchumi Langata Road';
const BRANCH_CODE = 'LANG';

function pad(n, len){ return String(n).padStart(len, '0'); }

function dateStr(d){
  return d.getFullYear() + '-' + pad(d.getMonth() + 1, 2) + '-' + pad(d.getDate(), 2);
}

function timeStr(d){
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function currency(n){
  return 'KES ' + Math.round(n || 0).toLocaleString('en-KE');
}

/* ---------- Orders ---------- */
function loadOrders(){
  try { return JSON.parse(localStorage.getItem('restaurantOrders')) || []; }
  catch(e){ return []; }
}

function saveOrders(orders){
  localStorage.setItem('restaurantOrders', JSON.stringify(orders));
}

function generateOrderId(){
  const now = new Date();
  const key = dateStr(now).replace(/-/g, '');
  const todayCount = loadOrders().filter(o => o.orderId && o.orderId.startsWith(BRANCH_CODE + '-' + key)).length;
  return BRANCH_CODE + '-' + key + '-' + pad(todayCount + 1, 3);
}

function buildItemsString(cartArr){
  return cartArr.map(it => it.name + (it.qty > 1 ? ' x' + it.qty : '')).join(', ');
}

/* ---------- Pending sync queue ---------- */
function loadQueue(){
  try { return JSON.parse(localStorage.getItem('pendingSync')) || []; }
  catch(e){ return []; }
}

function saveQueue(queue){
  localStorage.setItem('pendingSync', JSON.stringify(queue));
}

function queuePendingSync(order){
  const queue = loadQueue();
  if(!queue.some(o => o.orderId === order.orderId)){
    queue.push(order);
    saveQueue(queue);
  }
}

function removeFromQueue(orderId){
  saveQueue(loadQueue().filter(o => o.orderId !== orderId));
}

/* Sends one order to the Google Sheets Web App. Apps Script web apps
   don't send back CORS headers to a plain fetch, so this uses
   mode:'no-cors' with a text/plain body (avoids a CORS preflight).
   That means the response can't be read — a resolved fetch is taken
   as "reached the server"; a rejected one (offline, DNS failure,
   blocked request) queues the order for automatic retry.
   Returns a Promise so callers (e.g. "Force sync now") can await it. */
function attemptSync(order){
  const url = (localStorage.getItem('sheetsWebAppUrl') || '').trim();
  if(!url) return Promise.resolve(false); // no backend configured yet — stays local only

  if(!navigator.onLine){
    queuePendingSync(order);
    return Promise.resolve(false);
  }

  return fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(order)
  }).then(() => {
    localStorage.setItem('lastSyncTime', new Date().toISOString());
    removeFromQueue(order.orderId);
    return true;
  }).catch(() => {
    queuePendingSync(order);
    return false;
  });
}

function processPendingSyncQueue(){
  if(!navigator.onLine) return;
  const url = (localStorage.getItem('sheetsWebAppUrl') || '').trim();
  if(!url) return;
  loadQueue().forEach(order => attemptSync(order));
}

setInterval(processPendingSyncQueue, 30000);
window.addEventListener('online', processPendingSyncQueue);
processPendingSyncQueue();

/* ---------- Closed days (auto-close log) ---------- */
function loadClosedDays(){
  try { return JSON.parse(localStorage.getItem('closedDays')) || []; }
  catch(e){ return []; }
}

function saveClosedDays(days){
  localStorage.setItem('closedDays', JSON.stringify(days));
}

function nextDateStr(s){
  const [y, m, d] = s.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + 1);
  return dateStr(dt);
}

/* ---------- Daily / monthly stats (shared by manager reports) ---------- */
function computeDailyStats(dStr){
  const dayOrders = loadOrders().filter(o => o.date === dStr);
  const success = dayOrders.filter(o => o.status === 'SUCCESS');
  const cancelled = dayOrders.filter(o => o.status === 'CANCELLED');
  const revenue = success.reduce((s, o) => s + o.total, 0);
  let highest = null, lowest = null;
  success.forEach(o => {
    if(!highest || o.total > highest.total) highest = o;
    if(!lowest || o.total < lowest.total) lowest = o;
  });
  return {
    date: dStr,
    count: success.length,
    revenue,
    avg: success.length ? revenue / success.length : 0,
    highest, lowest,
    cancelledCount: cancelled.length,
    cancelledAmount: cancelled.reduce((s, o) => s + o.total, 0)
  };
}

function computeMonthlyStats(monthStr){
  const monthOrders = loadOrders().filter(o => o.date && o.date.startsWith(monthStr));
  const success = monthOrders.filter(o => o.status === 'SUCCESS');
  const cancelled = monthOrders.filter(o => o.status === 'CANCELLED');
  const revenue = success.reduce((s, o) => s + o.total, 0);
  let highest = null, lowest = null;
  success.forEach(o => {
    if(!highest || o.total > highest.total) highest = o;
    if(!lowest || o.total < lowest.total) lowest = o;
  });
  const daysWithSales = new Set(success.map(o => o.date)).size;
  return {
    month: monthStr,
    count: success.length,
    revenue,
    avg: success.length ? revenue / success.length : 0,
    highest, lowest,
    cancelledCount: cancelled.length,
    cancelledAmount: cancelled.reduce((s, o) => s + o.total, 0),
    daysWithSales,
    dailyAvgRevenue: daysWithSales ? revenue / daysWithSales : 0
  };
}
