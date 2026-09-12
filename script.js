const menu = [
  { cat: "Ugali combos", items: [
    { id:1, name:"Ugali & Beef", price:350, image:"images/menu/UgaliCombos/1.jpg" },
    { id:2, name:"Ugali & Matumbo", price:220, image:"images/menu/UgaliCombos/2.jpg" },
    { id:3, name:"Ugali & Liver", price:370, image:"images/menu/UgaliCombos/3.jpg" },
    { id:4, name:"Ugali & Minced meat", price:280, image:"images/menu/UgaliCombos/4.jpg" },
    { id:5, name:"Ugali & Mayai (eggs)", price:150, image:"images/menu/UgaliCombos/5.jpg" },
    { id:6, name:"Ugali & Cabbage/Sukuma", price:80, image:"images/menu/UgaliCombos/6.jpg" },
    { id:7, name:"Ugali & Kienyeji veg", price:120, image:"images/menu/UgaliCombos/7.jpg" },
    { id:8, name:"Ugali & Beans/Ndengu", price:130, image:"images/menu/UgaliCombos/8.jpg" },
    { id:9, name:"Ugali & Wet fry chicken", price:300, image:"images/menu/UgaliCombos/9.jpg" },
    { id:10, name:"Ugali & Fish", price:650, image:"images/menu/UgaliCombos/10.jpg" },
  ]},
  { cat: "Rice combos", items: [
    { id:11, name:"Rice & Beef", price:380, image:"images/menu/RiceCombos/1.jpg" },
    { id:12, name:"Rice & Matumbo", price:250, image:"images/menu/RiceCombos/2.jpg" },
    { id:13, name:"Rice & Liver", price:400, image:"images/menu/RiceCombos/2.5.jpg" },
    { id:14, name:"Rice & Minced meat", price:300, image:"images/menu/RiceCombos/3.jpg" },
    { id:15, name:"Rice & Mayai (eggs)", price:180, image:"images/menu/RiceCombos/4.jpg" },
    { id:16, name:"Rice & Cabbage/Sukuma", price:130, image:"images/menu/RiceCombos/5.jpg" },
    { id:17, name:"Rice & Beans/Ndengu", price:150, image:"images/menu/RiceCombos/6.jpg" },
    { id:18, name:"Rice & Fish", price:680, image:"images/menu/RiceCombos/7.jpg" },
    { id:19, name:"Rice & Wet fry chicken", price:330, image:"images/menu/RiceCombos/8.jpg" },
  ]},
  { cat: "Chapati combos", items: [
    { id:20, name:"Chapati & Beef", price:330, image:"images/menu/ChapatiCombos/1.jpg" },
    { id:21, name:"Chapati & Matumbo", price:200, image:"images/menu/ChapatiCombos/2.jpg" },
    { id:22, name:"Chapati & Liver", price:350, image:"images/menu/ChapatiCombos/3.jpg" },
    { id:23, name:"Chapati & Minced meat", price:260, image:"images/menu/ChapatiCombos/4.jpg" },
    { id:24, name:"Chapati & Mayai (eggs)", price:130, image:"images/menu/ChapatiCombos/5.jpg" },
    { id:25, name:"Chapati & Cabbage/Sukuma", price:80, image:"images/menu/ChapatiCombos/6.jpg" },
    { id:26, name:"Chapati & Beans/Ndengu", price:120, image:"images/menu/ChapatiCombos/7.jpg" },
    { id:27, name:"Chapati & Fish", price:630, image:"images/menu/ChapatiCombos/8.jpg" },
    { id:28, name:"Chapati & Wet fry chicken", price:280, image:"images/menu/ChapatiCombos/9.jpg" },
  ]},
  { cat: "Spaghetti combos", items: [
    { id:29, name:"Spaghetti & Beef", price:420, image:"images/menu/SpaghettiCombos/1.jpg" },
    { id:30, name:"Spaghetti & Liver", price:450, image:"images/menu/SpaghettiCombos/2.jpg" },
    { id:31, name:"Spaghetti & Minced meat", price:370, image:"images/menu/SpaghettiCombos/3.jpg" },
    { id:32, name:"Spaghetti & Mayai (eggs)", price:240, image:"images/menu/SpaghettiCombos/4.jpg" },
    { id:33, name:"Spaghetti & Cabbage/Sukuma", price:80, image:"images/menu/SpaghettiCombos/5.jpg" },
    { id:34, name:"Spaghetti & Beans/Ndengu", price:230, image:"images/menu/SpaghettiCombos/6.jpg" },
    { id:35, name:"Spaghetti & Wet fry chicken", price:400, image:"images/menu/SpaghettiCombos/7.jpg" },
  ]},
  { cat: "Mains & sides", items: [
    { id:36, name:"Ugali", price:50, image:"images/menu/Mains/1.jpg" },
    { id:37, name:"Beef", price:300, image:"images/menu/Mains/2.jpg" },
    { id:38, name:"Matumbo", price:170, image:"images/menu/Mains/3.jpg" },
    { id:39, name:"Liver", price:320, image:"images/menu/Mains/4.jpg" },
    { id:40, name:"Chicken", price:250, image:"images/menu/Mains/5.jpg" },
    { id:41, name:"Fish (tilapia)", price:600, image:"images/menu/Mains/6.jpg" },
    { id:42, name:"Bone soup", price:50, image:"images/menu/Mains/7.jpg" },
    { id:137, name:"Minji", price:150, image:"images/menu/Mains/8.jpg" },
  ]},
  { cat: "Chips & more", items: [
    { id:43, name:"Chips & chicken fry", price:400, image:"images/menu/Chips/1.jpg" },
    { id:44, name:"Chips & mayai (eggs)", price:250, image:"images/menu/Chips/2.jpg" },
    { id:45, name:"Rolex", price:100, image:"images/menu/Chips/3.jpg" },
  ]},
  { cat: "Vegetables, grains & sides", items: [
    { id:46, name:"Cabbage/Sukuma wiki", price:50, image:"images/menu/Veges/1.jpg" },
    { id:47, name:"Kienyeji vegetables", price:80, image:"images/menu/Veges/2.jpg" },
    { id:48, name:"Githeri", price:150, image:"images/menu/Veges/3.jpg" },
    { id:49, name:"Pilau", price:250, image:"images/menu/Veges/4.jpg" },
    { id:50, name:"Beans/Ndengu", price:90, image:"images/menu/Veges/5.jpg" },
    { id:51, name:"Rice", price:80, image:"images/menu/Veges/6.jpg" },
    { id:52, name:"Chapati", price:30, image:"images/menu/Veges/7.jpg" },
    { id:53, name:"Spaghetti", price:140, image:"images/menu/Veges/8.jpg" },
    { id:54, name:"Chips", price:150, image:"images/menu/Veges/9.jpg" },
    { id:55, name:"Chips masala", price:200, image:"images/menu/Veges/10.jpg" },
    { id:56, name:"Chips paprika", price:160, image:"images/menu/Veges/11.jpg" },
    { id:57, name:"Bhajia", price:170, image:"images/menu/Veges/12.jpg" },
    { id:58, name:"Bhajia masala", price:200, image:"images/menu/Veges/13.jpg" },
  ]},
  { cat: "Breakfast plates", items: [
    { id:59, name:"Mandazi, brown", price:25, image:"images/menu/Breakfast/1.jpg" },
    { id:60, name:"Mandazi, white", price:25, image:"images/menu/Breakfast/2.jpg" },
    { id:61, name:"Chapati, white", price:30, image:"images/menu/Breakfast/3.jpg" },
    { id:62, name:"Chapati, brown", price:40, image:"images/menu/Breakfast/4.jpg" },
    { id:63, name:"Boiled eggs", price:30, image:"images/menu/Breakfast/5.jpg" },
    { id:64, name:"Pancakes", price:40, image:"images/menu/Breakfast/6.jpg" },
    { id:65, name:"Sausage", price:50, image:"images/menu/Breakfast/7.jpg" },
    { id:66, name:"Smokies", price:50, image:"images/menu/Breakfast/8.jpg" },
    { id:67, name:"Plain omelette", price:70, image:"images/menu/Breakfast/9.jpg" },
    { id:68, name:"Spanish omelette", price:100, image:"images/menu/Breakfast/10.jpg" },
    { id:69, name:"Rolex", price:100, image:"images/menu/Breakfast/11.jpg" },
    { id:70, name:"Kebab", price:100, image:"images/menu/Breakfast/12.jpg" },
  ]},
  { cat: "Pastries & savouries", items: [
    { id:71, name:"Samosa", price:50, image:"images/menu/Pastries/1.jpg" },
    { id:72, name:"Mandazi bites", price:50, image:"images/menu/Pastries/2.jpg" },
    { id:73, name:"Plain croissant", price:55, image:"images/menu/Pastries/3.jpg" },
    { id:74, name:"Sweet mandazi", price:60, image:"images/menu/Pastries/4.jpg" },
    { id:75, name:"Chocolate croissant", price:70, image:"images/menu/Pastries/5.jpg" },
    { id:76, name:"Peanut shortbread", price:85, image:"images/menu/Pastries/6.jpg" },
    { id:77, name:"Sausage roll", price:95, image:"images/menu/Pastries/7.jpg" },
    { id:78, name:"Kebab", price:100, image:"images/menu/Pastries/8.jpg" },
    { id:79, name:"Beef pie", price:115, image:"images/menu/Pastries/9.jpg" },
    { id:80, name:"Chicken pie", price:110, image:"images/menu/Pastries/10.jpg" },
    { id:81, name:"Queen cakes", price:120, image:"images/menu/Pastries/11.jpg" },
  ]},
  { cat: "Sweet treats", items: [
    { id:82, name:"Vanilla cookies", price:15, image:"images/menu/Sweet/1.jpg" },
    { id:83, name:"Ginger cookies", price:30, image:"images/menu/Sweet/2.jpg" },
    { id:84, name:"Coconut cookies", price:30, image:"images/menu/Sweet/3.jpg" },
    { id:85, name:"Sunstar cookies", price:100, image:"images/menu/Sweet/4.jpg" },
    { id:86, name:"Chocolate sunstar", price:120, image:"images/menu/Sweet/5.jpg" },
    { id:87, name:"Coconut buns", price:60, image:"images/menu/Sweet/6.jpg" },
    { id:88, name:"Coffee scones", price:60, image:"images/menu/Sweet/7.jpg" },
    { id:89, name:"Raspberry buns", price:60, image:"images/menu/Sweet/8.jpg" },
    { id:90, name:"Rings", price:50, image:"images/menu/Sweet/9.jpg" },
    { id:91, name:"Chocolate doughnut", price:75, image:"images/menu/Sweet/10.jpg" },
    { id:92, name:"Cream doughnut", price:60, image:"images/menu/Sweet/11.jpg" },
  ]},
  { cat: "Tea & coffee counter", items: [
    { id:93, name:"Black tea", price:50, image:"images/menu/Tea/1.jpg" },
    { id:94, name:"Tea masala", price:100, image:"images/menu/Tea/2.jpg" },
    { id:95, name:"Lemon tea", price:60, image:"images/menu/Tea/3.jpg" },
    { id:96, name:"Ginger tea", price:50, image:"images/menu/Tea/4.jpg" },
    { id:97, name:"Milo tea, black", price:50, image:"images/menu/Tea/5.jpg" },
    { id:98, name:"Milo tea, white", price:100, image:"images/menu/Tea/6.jpg" },
  ]},
  { cat: "Breakfast beverages", items: [
    { id:99, name:"Hot water", price:20, image:"images/menu/Break bev/1.jpg" },
    { id:100, name:"Black coffee", price:50, image:"images/menu/Break bev/2.jpg" },
    { id:101, name:"African tea", price:60, image:"images/menu/Break bev/3.jpg" },
    { id:102, name:"Lemon tea", price:50, image:"images/menu/Break bev/4.jpg" },
    { id:103, name:"Black tea", price:50, image:"images/menu/Break bev/5.jpg" },
    { id:104, name:"Milo tea", price:50, image:"images/menu/Break bev/6.jpg" },
    { id:105, name:"Hot chocolate", price:50, image:"images/menu/Break bev/7.jpg" },
    { id:106, name:"White coffee", price:100, image:"images/menu/Break bev/8.jpg" },
    { id:107, name:"Tea masala", price:100, image:"images/menu/Break bev/9.jpg" },
    { id:108, name:"Dawa, regular", price:250, image:"images/menu/Break bev/10.jpg" },
    { id:109, name:"Dawa, large", price:300, image:"images/menu/Break bev/11.jpg" },
    { id:138, name:"Uchumi tea, large", price:50, image:"images/menu/Break bev/12.jpg" },
  ]},
  { cat: "Sodas & juice", items: [
    { id:110, name:"Coke, 350ml", price:50, image:"images/menu/ColdDrinks/1.jpg" },
    { id:111, name:"Fanta blackcurrant, 350ml", price:50, image:"images/menu/ColdDrinks/2.jpg" },
    { id:112, name:"Sprite, 350ml", price:50, image:"images/menu/ColdDrinks/3.jpg" },
    { id:113, name:"Fanta orange, 350ml", price:50, image:"images/menu/ColdDrinks/4.jpg" },
    { id:114, name:"Fanta blackcurrant, 500ml", price:75, image:"images/menu/ColdDrinks/5.jpg" },
    { id:115, name:"Sprite, 500ml", price:75, image:"images/menu/ColdDrinks/6.jpg" },
    { id:116, name:"Coke zero, 500ml", price:75, image:"images/menu/ColdDrinks/7.jpg" },
    { id:117, name:"Fanta orange, 500ml", price:75, image:"images/menu/ColdDrinks/4.jpg" },
    { id:118, name:"Coke original, 500ml", price:75, image:"images/menu/ColdDrinks/1.jpg" },
    { id:119, name:"Fanta passion, 500ml", price:75, image:"images/menu/ColdDrinks/8.jpg" },
    { id:120, name:"Minute Maid apple, 400ml", price:80, image:"images/menu/ColdDrinks/9.jpg" },
    { id:121, name:"Minute Maid mango, 400ml", price:80, image:"images/menu/ColdDrinks/10.jpg" },
    { id:122, name:"Minute Maid orange pulpy, 400ml", price:80, image:"images/menu/ColdDrinks/11.jpg" },
    { id:123, name:"Minute Maid tropical mix, 400ml", price:80, image:"images/menu/ColdDrinks/12.jpg" },
  ]},
  { cat: "Water & more", items: [
    { id:124, name:"Pick n Peel apple juice", price:280, image:"images/menu/Water/1.jpg" },
    { id:125, name:"Pick n Peel mango juice", price:280, image:"images/menu/Water/2.jpg" },
    { id:126, name:"Pick n Peel tropical juice", price:280, image:"images/menu/Water/3.jpg" },
    { id:127, name:"Mt Kenya water, 300ml", price:30, image:"images/menu/Water/4.jpg" },
    { id:128, name:"Uchumi water, 500ml", price:25, image:"images/menu/Water/5.jpg" },
    { id:129, name:"Quencher, 500ml", price:30, image:"images/menu/Water/8.jpg" },
    { id:130, name:"Dasani, 500ml", price:35, image:"images/menu/Water/7.jpg" },
    { id:131, name:"Aquamist, 500ml", price:55, image:"images/menu/Water/6.jpg" },
    { id:132, name:"Keringet, 500ml", price:65, image:"images/menu/Water/6.jpg" },
    { id:133, name:"Uchumi water, 1L", price:50, image:"images/menu/Water/6.jpg" },
    { id:134, name:"Quencher, 1L", price:50, image:"images/menu/Water/6.jpg" },
    { id:135, name:"Dasani, 1L", price:60, image:"images/menu/Water/6.jpg" },
    { id:136, name:"Aquamist, 1L", price:85, image:"images/menu/Water/6.jpg" },
  ]},
{ cat: "staff prices", items: [
{ id:139,name:"Chapati & Beans/Ndengu", price:110, image:"images/menu/ChapatiCombos/7.jpg" },
{ id:140, name:"Chapati & Beef", price:300, image:"images/menu/ChapatiCombos/1.jpg" },
{ id:141, name:"Rice & Beef", price:360, image:"images/menu/RiceCombos/1.jpg" },
{ id:142, name:"Ugali & Beef", price:320, image:"images/menu/UgaliCombos/1.jpg" },
{ id:143, name:"Rice & Beans/Ndengu", price:110, image:"images/menu/RiceCombos/6.jpg" },
{ id:144, name:"Coke, 350ml", price:40, image:"images/menu/ColdDrinks/1.jpg" },
{ id:145, name:"Fanta orange, 350ml", price:40, image:"images/menu/ColdDrinks/4.jpg" },
{ id:146, name:"Fanta blackcurrant, 350ml", price:40, image:"images/menu/ColdDrinks/2.jpg" },
{ id:147, name:"Fanta passion, 300ml", price:40, image:"images/menu/ColdDrinks/8.jpg" },
{ id:148, name:"Sprite, 350ml", price:40, image:"images/menu/ColdDrinks/3.jpg" },
{ id:149, name:"krest, 350ml", price:40, image:"images/menu/ColdDrinks/13.jpg" },
]
}];

let activeCat = 0;
let cart = [];
let currentOrderId = null; 
let currentOrderNumber = null; 
let orderNumberCommitted = false; 
let searchQuery = ''; 
let pendingAutoClear = false; 


function currency(n){
  return 'KES ' + Math.round(n).toLocaleString('en-KE');
}

function renderTabs(){
  const tabsEl = document.getElementById('tabs');
  tabsEl.innerHTML = '';
  menu.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'tab' + (i === activeCat && !searchQuery ? ' active' : '');
    b.textContent = c.cat;
    b.onclick = () => {
      activeCat = i;
      searchQuery = '';
      document.getElementById('itemSearch').value = '';
      renderTabs();
      renderGrid();
    };
    tabsEl.appendChild(b);
  });
}

function onSearchInput(){
  searchQuery = document.getElementById('itemSearch').value;
  renderTabs();
  renderGrid();
}

function renderGrid(){
  const grid = document.getElementById('itemGrid');
  grid.innerHTML = '';

  let items;
  const q = searchQuery.trim().toLowerCase();

  if(q){
    items = [];
    menu.forEach(c => {
      c.items.forEach(item => {
        if(item.name.toLowerCase().includes(q)) items.push(item);
      });
    });
    document.getElementById('catName').textContent = 'Search results for "' + searchQuery.trim() + '"';
  } else {
    const c = menu[activeCat];
    items = c.items;
    document.getElementById('catName').textContent = c.cat;
  }

  if(!items.length){
    grid.innerHTML = '<p class="menu-hint">No items match your search.</p>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'item-card product-card';
    card.innerHTML = `
      <div class="product-photo">
        <img src="${item.image}" alt="${escapeHtml(item.name)}"
             loading="lazy"
             onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');">
        <span class="photo-fallback">🍽</span>
      </div>
      <div class="product-info">
        <div class="product-name">${escapeHtml(item.name)}</div>
        <div class="product-bottom">
          <span class="product-price">${currency(item.price)}</span>
          <button class="add product-add" type="button" aria-label="Add ${escapeHtml(item.name)}">
            <span>+</span> ADD
          </button>
        </div>
      </div>
    `;

    card.querySelector('.product-add').onclick = (event) => {
      event.stopPropagation();
      addItem(item.name, item.price);
    };

    card.onclick = () => addItem(item.name, item.price);
    grid.appendChild(card);
  });
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
  }[char]));
}

function addItem(name, price){
  const existing = cart.find(it => it.name === name && it.price === price);
  if(existing){
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty:1, image: findProductImage(name, price) });
  }
  renderCart();
}

function findProductImage(name, price){
  for(const category of menu){
    const found = category.items.find(item => item.name === name && item.price === price);
    if(found) return found.image;
  }
  return '';
}

function addCustomItem(){
  const nameEl = document.getElementById('customName');
  const priceEl = document.getElementById('customPrice');
  const name = nameEl.value.trim();
  const price = parseFloat(priceEl.value);
  if(!name || isNaN(price) || price < 0) return;
  addItem(name, price);
  nameEl.value = '';
  priceEl.value = '';
}

function changeQty(idx, delta){
  cart[idx].qty += delta;
  if(cart[idx].qty <= 0) cart.splice(idx, 1);
  renderCart();
}

function removeItem(idx){
  cart.splice(idx, 1);
  renderCart();
}

function renderCart(){
  const listEl = document.getElementById('cartList');
  const printBtn = document.getElementById('printBtn');
  const printHeaderBtn = document.getElementById('printHeaderBtn');
  const mpesaBtn = document.getElementById('mpesaBtn');

  if(cart.length === 0){
    listEl.innerHTML = '<p class="cart-empty">No items yet — tap items from the menu to add them.</p>';
    printBtn.disabled = true;
    if(mpesaBtn) mpesaBtn.disabled = true;
  } else {
    listEl.innerHTML = '';
    cart.forEach((it, idx) => {
      const row = document.createElement('div');
      row.className = 'cart-row';
      row.innerHTML = `
        <span class="cname">${it.name}</span>
        <span class="qty-ctrl">
          <button onclick="changeQty(${idx},-1)">-</button>
          <span>${it.qty}</span>
          <button onclick="changeQty(${idx},1)">+</button>
        </span>
        <span class="lprice">${currency(it.price * it.qty)}</span>
        <button class="rm" onclick="removeItem(${idx})">&times;</button>
      `;
      listEl.appendChild(row);
    });
    printBtn.disabled = false;
    if(mpesaBtn) mpesaBtn.disabled = false;
  }

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const discountRate = parseFloat(document.getElementById('discountRate').value) || 0;
  const discountAmt = subtotal * (discountRate / 100);
  const total = subtotal - discountAmt;

  document.getElementById('subtotalOut').textContent = currency(subtotal);
  document.getElementById('totalOut').textContent = currency(total);
}


function previewOrderNumber(){
  currentOrderNumber = peekDailyOrderNumber();
  orderNumberCommitted = false;
  document.getElementById('orderNo').value = currentOrderNumber;
}


function commitOrderNumber(){
  if(orderNumberCommitted) return currentOrderNumber;
  currentOrderNumber = nextDailyOrderNumber();
  orderNumberCommitted = true;
  document.getElementById('orderNo').value = currentOrderNumber;
  return currentOrderNumber;
}


function startNextBill(){
  cart = [];
  currentOrderId = null;
  document.getElementById('discountRate').value = 0;
  document.getElementById('servedBy').value = '';
  document.getElementById('custName').value = '';
  previewOrderNumber();
  renderCart();
}

function newBill(){
  if(cart.length && !confirm('Start a new bill? This clears the current items.')) return;
  startNextBill();
}


/* Shared by openOrderFlow and cancelOrderFlow: single branch, so the
   last 3 digits of an Order ID (e.g. "007") are enough on their own.
   Tries today's ticket first (the common case), then falls back to
   the most recent order on any date ending in those digits. */
function resolveOrderByDigits(digitsInput){
  const digits = digitsInput.trim().replace(/\D/g, '').padStart(3, '0');
  if(!digits) return { digits: null, order: null };

  const orders = loadOrders();
  const todayKey = dateStr(new Date()).replace(/-/g, '');
  const todaysId = BRANCH_CODE + '-' + todayKey + '-' + digits;

  let order = orders.find(o => o.orderId === todaysId);
  if(!order){
    const suffix = '-' + digits;
    const matches = orders
      .filter(o => o.orderId && o.orderId.endsWith(suffix))
      .sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
    order = matches[0];
  }

  return { digits, order };
}

function openOrderFlow(){
  if(cart.length && !confirm('Loading another order replaces the items currently in the bill. Continue?')) return;

  const digitsInput = prompt('Enter the last 3 digits of the Order ID (e.g. 007):');
  if(!digitsInput) return;

  const { digits, order } = resolveOrderByDigits(digitsInput);
  if(!digits){
    alert('Enter the digits from the Order ID, e.g. 007.');
    return;
  }

  if(!order){
    alert('No order found ending in ' + digits + '.');
    return;
  }
  if(order.status === 'CANCELLED'){
    alert('That order was cancelled and cannot be reopened.');
    return;
  }
  if(!order.cartItems){
    alert('This order was saved before item-level detail was recorded and cannot be reopened for editing.');
    return;
  }

  cart = order.cartItems.map(it => ({ ...it }));
  currentOrderId = order.orderId;
  currentOrderNumber = order.orderNumber || null;
  orderNumberCommitted = true; 
  document.getElementById('orderNo').value = order.orderNumber || '';
  document.getElementById('servedBy').value = order.servedBy || '';
  document.getElementById('custName').value = order.custName || '';
  document.getElementById('discountRate').value = order.discountRate || 0;
  renderCart();
  showToast('Order ' + order.orderId + ' loaded — add items, then Save & print to update it');
}

function printBill(){
  if(cart.length === 0) return;

  const subtotalForSave = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const discountRateForSave = parseFloat(document.getElementById('discountRate').value) || 0;
  const totalForSave = subtotalForSave - (subtotalForSave * discountRateForSave / 100);
  const orderId = saveOrRefreshOrder(totalForSave);
  document.getElementById('pReceiptNo').textContent = 'Receipt: ' + orderId;

  const now = new Date();
  document.getElementById('pDate').textContent = now.toLocaleDateString('en-KE', {day:'2-digit', month:'short', year:'numeric'});
  document.getElementById('pTime').textContent = now.toLocaleTimeString('en-KE', {hour:'2-digit', minute:'2-digit'});
  document.getElementById('pOrder').textContent = 'Order: ' + (document.getElementById('orderNo').value || '-');
  document.getElementById('pServer').textContent = 'Served by: ' + (document.getElementById('servedBy').value || '-');

  const custName = document.getElementById('custName').value.trim();
  const custRow = document.getElementById('pCustRow');
  if(custName){
    document.getElementById('pCust').textContent = 'Customer: ' + custName;
    custRow.style.display = 'flex';
  } else {
    custRow.style.display = 'none';
  }

  const pItems = document.getElementById('pItems');
  pItems.innerHTML = '';
  cart.forEach(it => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${it.name}</td><td class="r">${it.qty}</td><td class="r">${currency(it.price * it.qty)}</td>`;
    pItems.appendChild(tr);
  });

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  const discountRate = parseFloat(document.getElementById('discountRate').value) || 0;
  const discountAmt = subtotal * (discountRate / 100);
  const total = subtotal - discountAmt;

  document.getElementById('pSubtotal').textContent = currency(subtotal);
  const discountRow = document.getElementById('pDiscountRow');
  if(discountRate > 0){
    document.getElementById('pDiscountLabel').textContent = 'Discount (' + discountRate + '%)';
    document.getElementById('pDiscountAmt').textContent = '-' + currency(discountAmt);
    discountRow.style.display = 'flex';
  } else {
    discountRow.style.display = 'none';
  }
  document.getElementById('pTotal').textContent = currency(total);

  pendingAutoClear = true;
  window.print();
  showToast('Order ' + orderId + ' saved');
  setTimeout(finishAutoClear, 1200);
}


function finishAutoClear(){
  if(!pendingAutoClear) return;
  pendingAutoClear = false;
  startNextBill();
}

window.addEventListener('afterprint', finishAutoClear);

renderTabs();
renderGrid();
renderCart();
previewOrderNumber();

function getBillTotal(){const subtotal=cart.reduce((s,it)=>s+it.price*it.qty,0);const rate=parseFloat(document.getElementById('discountRate').value)||0;return subtotal-(subtotal*rate/100);}
function openMpesaModal(){if(!cart.length)return;document.getElementById('mpesaAmount').textContent=currency(getBillTotal());document.getElementById('mpesaModal').classList.add('open');}
function closeMpesaModal(){document.getElementById('mpesaModal').classList.remove('open');}
function markMpesaPaid(){closeMpesaModal();showToast('M-Pesa marked as paid');}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMpesaModal();});

function showToast(msg){
  const t = document.getElementById('paymentToast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.mpesaToastTimer);
  window.mpesaToastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}


function saveOrRefreshOrder(total){
  const discountRate = parseFloat(document.getElementById('discountRate').value) || 0;
  const servedBy = document.getElementById('servedBy').value.trim();
  const custName = document.getElementById('custName').value.trim();
  const cartSnapshot = cart.map(it => ({ name: it.name, price: it.price, qty: it.qty, image: it.image }));

  const orders = loadOrders();

  if(currentOrderId){
    const existing = orders.find(o => o.orderId === currentOrderId);
    if(existing){
      existing.items = buildItemsString(cart);
      existing.cartItems = cartSnapshot;
      existing.total = Math.round(total);
      existing.discountRate = discountRate;
      existing.servedBy = servedBy;
      existing.custName = custName;
      existing.updatedAt = new Date().toISOString();
      saveOrders(orders);
      attemptSync(existing);
      return existing.orderId;
    }
  }

  commitOrderNumber(); 

  const now = new Date();
  const order = {
    orderId: generateOrderId(),
    orderNumber: currentOrderNumber,
    branch: BRANCH_NAME,
    date: dateStr(now),
    time: timeStr(now),
    timestamp: now.toISOString(),
    items: buildItemsString(cart),
    cartItems: cartSnapshot,
    total: Math.round(total),
    discountRate,
    servedBy,
    custName,
    status: 'SUCCESS',
    cancelledAt: null
  };

  orders.push(order);
  saveOrders(orders);
  currentOrderId = order.orderId;

  attemptSync(order);
  return order.orderId;
}


function cancelOrderFlow(){
  const digitsInput = prompt('Enter the last 3 digits of the Order ID to cancel (e.g. 007):');
  if(!digitsInput) return;

  const { digits, order } = resolveOrderByDigits(digitsInput);
  if(!digits){
    alert('Enter the digits from the Order ID, e.g. 007.');
    return;
  }

  const pin = prompt('Enter Manager PIN:');
  if(pin === null) return;

  const storedPin = localStorage.getItem('cancelPin') || '1234';
  if(pin !== storedPin){
    alert('Incorrect PIN.');
    return;
  }

  if(!order){
    alert('No order found ending in ' + digits + '.');
    return;
  }
  if(order.status === 'CANCELLED'){
    alert('That order is already cancelled.');
    return;
  }

  order.status = 'CANCELLED';
  order.cancelledAt = new Date().toISOString();
  saveOrders(loadOrders().map(o => o.orderId === order.orderId ? order : o));
  attemptSync(order);
  showToast('Order ' + order.orderId + ' cancelled');
}
