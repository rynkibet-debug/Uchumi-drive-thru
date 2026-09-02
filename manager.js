/* =========================================================
   MANAGER.JS — Uchumi Langata Road POS
   Depends on common.js (loaded first) for storage/stat helpers.
   ========================================================= */

let searchedOrder = null; // last order found via "Search order by ID"

/* ---------- Password gate ---------- */
function checkPassword(){
  const input = document.getElementById('gatePassword').value;
  const stored = localStorage.getItem('managerPassword') || 'uchumi2025';
  if(input === stored){
    document.getElementById('gate').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    initDashboard();
  } else {
    document.getElementById('gateError').textContent = 'Incorrect password.';
  }
}

document.getElementById('gatePassword').addEventListener('keydown', e => {
  if(e.key === 'Enter') checkPassword();
});

/* ---------- Init ---------- */
function initDashboard(){
  const today = dateStr(new Date());
  document.getElementById('dailyDate').value = today;
  document.getElementById('monthlyMonth').value = today.slice(0, 7);
  document.getElementById('sheetsUrlInput').value = localStorage.getItem('sheetsWebAppUrl') || '';

  autoCloseCheck();
  renderDailyReport();
  renderMonthlyReport();
  renderClosedDays();
  renderCancelled();
  renderPending();
  renderSystemStatus();

  setInterval(autoCloseCheck, 60000);
  setInterval(() => { renderPending(); renderSystemStatus(); }, 5000);
  window.addEventListener('online', () => { renderPending(); renderSystemStatus(); });
  window.addEventListener('offline', () => { renderPending(); renderSystemStatus(); });
}

/* ---------- Daily report ---------- */
function statCard(label, value, small){
  return `<div class="stat-card"><span class="label">${label}</span><span class="value${small ? ' small' : ''}">${value}</span></div>`;
}

function renderDailyReport(){
  const d = document.getElementById('dailyDate').value || dateStr(new Date());
  const s = computeDailyStats(d);
  document.getElementById('dailyStats').innerHTML =
    statCard('Successful orders', s.count) +
    statCard('Total revenue', currency(s.revenue)) +
    statCard('Average order value', currency(s.avg)) +
    statCard('Highest order', s.highest ? currency(s.highest.total) + ' · ' + s.highest.time : '—', true) +
    statCard('Lowest order', s.lowest ? currency(s.lowest.total) : '—') +
    statCard('Cancelled orders', s.cancelledCount) +
    statCard('Cancelled amount', currency(s.cancelledAmount));
}

function printDailyReport(){
  const d = document.getElementById('dailyDate').value || dateStr(new Date());
  const s = computeDailyStats(d);
  document.getElementById('reportTitle').textContent = 'Daily report';
  document.getElementById('reportPeriod').textContent = BRANCH_NAME + ' — ' + d;
  const rows = [
    ['Successful orders', s.count],
    ['Average order value', currency(s.avg)],
    ['Highest order', s.highest ? currency(s.highest.total) + ' (' + s.highest.time + ')' : '—'],
    ['Lowest order', s.lowest ? currency(s.lowest.total) : '—'],
    ['Cancelled orders', s.cancelledCount],
    ['Cancelled amount', currency(s.cancelledAmount)]
  ];
  document.getElementById('reportRows').innerHTML =
    rows.map(r => `<div class="totals-row"><span>${r[0]}</span><span>${r[1]}</span></div>`).join('') +
    `<div class="totals-row grand"><span>Total revenue</span><span>${currency(s.revenue)}</span></div>`;
  document.getElementById('reportFooter').textContent = 'Generated ' + new Date().toLocaleString('en-KE');
  window.print();
}

/* ---------- Monthly report ---------- */
function renderMonthlyReport(){
  const m = document.getElementById('monthlyMonth').value || dateStr(new Date()).slice(0, 7);
  const s = computeMonthlyStats(m);
  document.getElementById('monthlyStats').innerHTML =
    statCard('Successful orders', s.count) +
    statCard('Total revenue', currency(s.revenue)) +
    statCard('Average order value', currency(s.avg)) +
    statCard('Daily average revenue', currency(s.dailyAvgRevenue)) +
    statCard('Highest order', s.highest ? currency(s.highest.total) + ' · ' + s.highest.time : '—', true) +
    statCard('Lowest order', s.lowest ? currency(s.lowest.total) : '—') +
    statCard('Cancelled orders', s.cancelledCount) +
    statCard('Cancelled amount', currency(s.cancelledAmount));
}

function printMonthlyReport(){
  const m = document.getElementById('monthlyMonth').value || dateStr(new Date()).slice(0, 7);
  const s = computeMonthlyStats(m);
  document.getElementById('reportTitle').textContent = 'Monthly report';
  document.getElementById('reportPeriod').textContent = BRANCH_NAME + ' — ' + m;
  const rows = [
    ['Successful orders', s.count],
    ['Average order value', currency(s.avg)],
    ['Daily average revenue', currency(s.dailyAvgRevenue) + ' (' + s.daysWithSales + ' days)'],
    ['Highest order', s.highest ? currency(s.highest.total) + ' (' + s.highest.time + ')' : '—'],
    ['Lowest order', s.lowest ? currency(s.lowest.total) : '—'],
    ['Cancelled orders', s.cancelledCount],
    ['Cancelled amount', currency(s.cancelledAmount)]
  ];
  document.getElementById('reportRows').innerHTML =
    rows.map(r => `<div class="totals-row"><span>${r[0]}</span><span>${r[1]}</span></div>`).join('') +
    `<div class="totals-row grand"><span>Total revenue</span><span>${currency(s.revenue)}</span></div>`;
  document.getElementById('reportFooter').textContent = 'Generated ' + new Date().toLocaleString('en-KE');
  window.print();
}

/* ---------- Auto-close log ---------- */
function autoCloseCheck(){
  const today = dateStr(new Date());
  const last = localStorage.getItem('lastClosedDate');

  if(!last){
    localStorage.setItem('lastClosedDate', today);
    renderClosedDays();
    return;
  }
  if(last === today) return;

  const closedDays = loadClosedDays();
  let cursor = last;
  while(cursor < today){
    if(!closedDays.some(day => day.date === cursor)){
      const s = computeDailyStats(cursor);
      closedDays.push({ date: cursor, totalRevenue: s.revenue, orderCount: s.count, closedAt: new Date().toISOString() });
    }
    cursor = nextDateStr(cursor);
  }
  saveClosedDays(closedDays);
  localStorage.setItem('lastClosedDate', today);
  renderClosedDays();
}

function renderClosedDays(){
  const days = loadClosedDays().slice().sort((a, b) => b.date.localeCompare(a.date));
  const body = document.getElementById('closedDaysBody');

  if(!days.length){
    body.innerHTML = '<tr class="empty-row"><td colspan="5">No days closed yet.</td></tr>';
  } else {
    body.innerHTML = days.map(d => `
      <tr>
        <td>${d.date}</td>
        <td>${d.orderCount}</td>
        <td>${currency(d.totalRevenue)}</td>
        <td>${new Date(d.closedAt).toLocaleString('en-KE')}</td>
        <td><button class="btn" onclick="printClosedDayRow('${d.date}')">Print</button></td>
      </tr>
    `).join('');
  }

  const pill = document.getElementById('lastClosedPill');
  if(days.length){
    const latest = days[0];
    pill.textContent = 'Last closed: ' + latest.date;
    pill.className = 'status-pill success';
  } else {
    pill.textContent = 'No closed days yet';
    pill.className = 'status-pill offline';
  }
}

function printClosedDayRow(dateVal){
  const day = loadClosedDays().find(d => d.date === dateVal);
  if(!day) return;
  document.getElementById('reportTitle').textContent = 'Daily report (closed)';
  document.getElementById('reportPeriod').textContent = BRANCH_NAME + ' — ' + day.date;
  document.getElementById('reportRows').innerHTML =
    `<div class="totals-row"><span>Successful orders</span><span>${day.orderCount}</span></div>` +
    `<div class="totals-row grand"><span>Total revenue</span><span>${currency(day.totalRevenue)}</span></div>`;
  document.getElementById('reportFooter').textContent = 'Auto-closed at 12:00 AM · ' + new Date(day.closedAt).toLocaleString('en-KE');
  window.print();
}

/* ---------- Manager tools ---------- */
function renderCancelled(){
  const today = dateStr(new Date());
  const rows = loadOrders().filter(o => o.date === today && o.status === 'CANCELLED');
  const body = document.getElementById('cancelledBody');
  if(!rows.length){
    body.innerHTML = '<tr class="empty-row"><td colspan="4">None today.</td></tr>';
    return;
  }
  body.innerHTML = rows.map(o => `
    <tr>
      <td>${o.orderId}</td>
      <td>${o.items}</td>
      <td>${currency(o.total)}</td>
      <td>${o.cancelledAt ? new Date(o.cancelledAt).toLocaleTimeString('en-KE') : '—'}</td>
    </tr>
  `).join('');
}

function renderPending(){
  const queue = loadQueue();
  const body = document.getElementById('pendingBody');
  if(!queue.length){
    body.innerHTML = '<tr class="empty-row"><td colspan="3">Nothing pending.</td></tr>';
  } else {
    body.innerHTML = queue.map(o => `
      <tr>
        <td>${o.orderId}</td>
        <td>${currency(o.total)}</td>
        <td><span class="status-pill offline"><span class="dot"></span>Waiting</span></td>
      </tr>
    `).join('');
  }

  const onlinePill = document.getElementById('onlinePill');
  if(navigator.onLine){
    onlinePill.textContent = 'Online';
    onlinePill.className = 'status-pill online';
  } else {
    onlinePill.textContent = 'Offline';
    onlinePill.className = 'status-pill offline';
  }
}

function forceSyncNow(){
  const queue = loadQueue();
  if(!queue.length){ renderPending(); return; }
  Promise.allSettled(queue.map(o => attemptSync(o))).then(() => {
    renderPending();
    renderSystemStatus();
  });
}

function searchOrder(){
  const id = document.getElementById('searchOrderId').value.trim();
  const result = document.getElementById('searchResult');
  if(!id){ result.textContent = 'Enter an Order ID above.'; return; }

  const order = loadOrders().find(o => o.orderId === id);
  if(!order){
    result.innerHTML = `No order found with ID <strong>${id}</strong>.`;
    return;
  }

  const statusClass = order.status === 'CANCELLED' ? 'cancelled' : 'success';
  result.innerHTML = `
    <div><strong>${order.orderId}</strong> &nbsp; <span class="status-pill ${statusClass}">${order.status}</span></div>
    <div>${order.date} · ${order.time}</div>
    <div>${order.items}</div>
    <div>Total: ${currency(order.total)}</div>
    ${order.cancelledAt ? '<div>Cancelled: ' + new Date(order.cancelledAt).toLocaleString('en-KE') + '</div>' : ''}
  `;
}

function renderSystemStatus(){
  const online = navigator.onLine;
  const lastSync = localStorage.getItem('lastSyncTime');
  const sheetsUrl = (localStorage.getItem('sheetsWebAppUrl') || '').trim();

  let storageBytes = 0;
  for(const key in localStorage){
    if(Object.prototype.hasOwnProperty.call(localStorage, key)){
      storageBytes += (localStorage.getItem(key) || '').length + key.length;
    }
  }
  const storageKb = (storageBytes / 1024).toFixed(1);

  document.getElementById('systemStatus').innerHTML =
    statCard('Connection', online
      ? '<span class="status-pill online"><span class="dot"></span>Online</span>'
      : '<span class="status-pill offline"><span class="dot"></span>Offline</span>', true) +
    statCard('Last sync', lastSync ? new Date(lastSync).toLocaleString('en-KE') : 'Never', true) +
    statCard('Storage used', storageKb + ' KB', true) +
    statCard('Sheets URL', sheetsUrl ? 'Configured' : 'Not set', true);
}

/* ---------- Settings ---------- */
function saveManagerPassword(){
  const val = document.getElementById('newManagerPassword').value;
  if(!val){ alert('Enter a new password first.'); return; }
  localStorage.setItem('managerPassword', val);
  document.getElementById('newManagerPassword').value = '';
  alert('Manager password updated.');
}

function saveCancelPin(){
  const val = document.getElementById('newCancelPin').value;
  if(!val){ alert('Enter a new PIN first.'); return; }
  localStorage.setItem('cancelPin', val);
  document.getElementById('newCancelPin').value = '';
  alert('Cancel PIN updated.');
}

function saveSheetsUrl(){
  const val = document.getElementById('sheetsUrlInput').value.trim();
  localStorage.setItem('sheetsWebAppUrl', val);
  alert('Google Sheets Web App URL saved.');
  renderSystemStatus();
}

/* ---------- CSV export ---------- */
function downloadCSV(filename, rows){
  const header = ['Branch', 'Date', 'Time', 'Items', 'Total', 'Status', 'OrderID', 'Timestamp', 'CancelledAt'];
  const csvRows = [header.join(',')];
  rows.forEach(o => {
    const line = [o.branch, o.date, o.time, '"' + o.items.replace(/"/g, '""') + '"', o.total, o.status, o.orderId, o.timestamp, o.cancelledAt || ''];
    csvRows.push(line.join(','));
  });
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportCSV(type){
  if(type === 'daily'){
    const d = document.getElementById('dailyDate').value || dateStr(new Date());
    const rows = loadOrders().filter(o => o.date === d);
    if(!rows.length){ alert('No orders for that date.'); return; }
    downloadCSV('uchumi-langata-daily-' + d + '.csv', rows);
  } else {
    const m = document.getElementById('monthlyMonth').value || dateStr(new Date()).slice(0, 7);
    const rows = loadOrders().filter(o => o.date && o.date.startsWith(m));
    if(!rows.length){ alert('No orders for that month.'); return; }
    downloadCSV('uchumi-langata-monthly-' + m + '.csv', rows);
  }
}

/* ---------- Danger zone ---------- */
function clearTodayData(){
  const stored = localStorage.getItem('managerPassword') || 'uchumi2025';
  const p1 = prompt('This will permanently remove today\'s orders from this device. Enter the manager password to continue:');
  if(p1 === null) return;
  if(p1 !== stored){ alert('Incorrect password.'); return; }
  const p2 = prompt('Enter the manager password again to confirm:');
  if(p2 === null) return;
  if(p2 !== stored){ alert('Incorrect password.'); return; }

  const today = dateStr(new Date());
  const remaining = loadOrders().filter(o => o.date !== today);
  saveOrders(remaining);
  saveQueue(loadQueue().filter(o => o.date !== today));

  renderDailyReport();
  renderMonthlyReport();
  renderCancelled();
  renderPending();
  alert('Today\'s data has been cleared from this device.');
}
