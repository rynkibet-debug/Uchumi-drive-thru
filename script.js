const menu = [
  { cat: "Ugali combos", items: [
    { id:1, name:"Ugali & Beef", price:350, image:"images/menu/ugali-and-beef.jpg" },
    { id:2, name:"Ugali & Matumbo", price:220, image:"images/menu/ugali-and-matumbo.jpg" },
    { id:3, name:"Ugali & Liver", price:370, image:"images/menu/ugali-and-liver.jpg" },
    { id:4, name:"Ugali & Minced meat", price:280, image:"images/menu/ugali-and-minced-meat.jpg" },
    { id:5, name:"Ugali & Mayai (eggs)", price:150, image:"images/menu/ugali-and-mayai-eggs.jpg" },
    { id:6, name:"Ugali & Cabbage/Sukuma", price:80, image:"images/menu/ugali-and-cabbage-sukuma.jpg" },
    { id:7, name:"Ugali & Kienyeji veg", price:120, image:"images/menu/ugali-and-kienyeji-veg.jpg" },
    { id:8, name:"Ugali & Beans/Ndengu", price:130, image:"images/menu/ugali-and-beans-ndengu.jpg" },
    { id:9, name:"Ugali & Wet fry chicken", price:300, image:"images/menu/ugali-and-wet-fry-chicken.jpg" },
    { id:10, name:"Ugali & Fish", price:650, image:"images/menu/ugali-and-fish.jpg" },
  ]},
  { cat: "Rice combos", items: [
    { id:11, name:"Rice & Beef", price:380, image:"images/menu/rice-and-beef.jpg" },
    { id:12, name:"Rice & Matumbo", price:250, image:"images/menu/rice-and-matumbo.jpg" },
    { id:13, name:"Rice & Liver", price:400, image:"images/menu/rice-and-liver.jpg" },
    { id:14, name:"Rice & Minced meat", price:300, image:"images/menu/rice-and-minced-meat.jpg" },
    { id:15, name:"Rice & Mayai (eggs)", price:180, image:"images/menu/rice-and-mayai-eggs.jpg" },
    { id:16, name:"Rice & Cabbage/Sukuma", price:130, image:"images/menu/rice-and-cabbage-sukuma.jpg" },
    { id:17, name:"Rice & Beans/Ndengu", price:150, image:"images/menu/rice-and-beans-ndengu.jpg" },
    { id:18, name:"Rice & Fish", price:680, image:"images/menu/rice-and-fish.jpg" },
    { id:19, name:"Rice & Wet fry chicken", price:330, image:"images/menu/rice-and-wet-fry-chicken.jpg" },
  ]},
  { cat: "Chapati combos", items: [
    { id:20, name:"Chapati & Beef", price:330, image:"images/menu/chapati-and-beef.jpg" },
    { id:21, name:"Chapati & Matumbo", price:200, image:"images/menu/chapati-and-matumbo.jpg" },
    { id:22, name:"Chapati & Liver", price:350, image:"images/menu/chapati-and-liver.jpg" },
    { id:23, name:"Chapati & Minced meat", price:260, image:"images/menu/chapati-and-minced-meat.jpg" },
    { id:24, name:"Chapati & Mayai (eggs)", price:130, image:"images/menu/chapati-and-mayai-eggs.jpg" },
    { id:25, name:"Chapati & Cabbage/Sukuma", price:80, image:"images/menu/chapati-and-cabbage-sukuma.jpg" },
    { id:26, name:"Chapati & Beans/Ndengu", price:120, image:"images/menu/chapati-and-beans-ndengu.jpg" },
    { id:27, name:"Chapati & Fish", price:630, image:"images/menu/chapati-and-fish.jpg" },
    { id:28, name:"Chapati & Wet fry chicken", price:280, image:"images/menu/chapati-and-wet-fry-chicken.jpg" },
  ]},
  { cat: "Spaghetti combos", items: [
    { id:29, name:"Spaghetti & Beef", price:420, image:"images/menu/spaghetti-and-beef.jpg" },
    { id:30, name:"Spaghetti & Liver", price:450, image:"images/menu/spaghetti-and-liver.jpg" },
    { id:31, name:"Spaghetti & Minced meat", price:370, image:"images/menu/spaghetti-and-minced-meat.jpg" },
    { id:32, name:"Spaghetti & Mayai (eggs)", price:240, image:"images/menu/spaghetti-and-mayai-eggs.jpg" },
    { id:33, name:"Spaghetti & Cabbage/Sukuma", price:80, image:"images/menu/spaghetti-and-cabbage-sukuma.jpg" },
    { id:34, name:"Spaghetti & Beans/Ndengu", price:230, image:"images/menu/spaghetti-and-beans-ndengu.jpg" },
    { id:35, name:"Spaghetti & Wet fry chicken", price:400, image:"images/menu/spaghetti-and-wet-fry-chicken.jpg" },
  ]},
  { cat: "Mains & sides", items: [
    { id:36, name:"Ugali", price:50, image:"images/menu/ugali.jpg" },
    { id:37, name:"Beef", price:300, image:"images/menu/beef.jpg" },
    { id:38, name:"Matumbo", price:170, image:"images/menu/matumbo.jpg" },
    { id:39, name:"Liver", price:320, image:"images/menu/liver.jpg" },
    { id:40, name:"Chicken", price:250, image:"images/menu/chicken.jpg" },
    { id:41, name:"Fish (tilapia)", price:600, image:"images/menu/fish-tilapia.jpg" },
    { id:42, name:"Bone soup", price:50, image:"images/menu/bone-soup.jpg" },
  ]},
  { cat: "Chips & more", items: [
    { id:43, name:"Chips & chicken fry", price:400, image:"images/menu/chips-and-chicken-fry.jpg" },
    { id:44, name:"Chips & mayai (eggs)", price:250, image:"images/menu/chips-and-mayai-eggs.jpg" },
    { id:45, name:"Rolex", price:100, image:"images/menu/rolex.jpg" },
  ]},
  { cat: "Vegetables, grains & sides", items: [
    { id:46, name:"Cabbage/Sukuma wiki", price:50, image:"images/menu/cabbage-sukuma-wiki.jpg" },
    { id:47, name:"Kienyeji vegetables", price:80, image:"images/menu/kienyeji-vegetables.jpg" },
    { id:48, name:"Githeri", price:150, image:"images/menu/githeri.jpg" },
    { id:49, name:"Pilau", price:270, image:"images/menu/pilau.jpg" },
    { id:50, name:"Beans/Ndengu", price:90, image:"images/menu/beans-ndengu.jpg" },
    { id:51, name:"Rice", price:80, image:"images/menu/rice.jpg" },
    { id:52, name:"Chapati", price:30, image:"images/menu/chapati.jpg" },
    { id:53, name:"Spaghetti", price:140, image:"images/menu/spaghetti.jpg" },
    { id:54, name:"Chips", price:150, image:"images/menu/chips.jpg" },
    { id:55, name:"Chips masala", price:200, image:"images/menu/chips-masala.jpg" },
    { id:56, name:"Chips paprika", price:160, image:"images/menu/chips-paprika.jpg" },
    { id:57, name:"Bhajia", price:170, image:"images/menu/bhajia.jpg" },
    { id:58, name:"Bhajia masala", price:200, image:"images/menu/bhajia-masala.jpg" },
  ]},
  { cat: "Breakfast plates", items: [
    { id:59, name:"Mandazi, brown", price:25, image:"images/menu/mandazi-brown.jpg" },
    { id:60, name:"Mandazi, white", price:25, image:"images/menu/mandazi-white.jpg" },
    { id:61, name:"Chapati, white", price:30, image:"images/menu/chapati-white.jpg" },
    { id:62, name:"Chapati, brown", price:40, image:"images/menu/chapati-brown.jpg" },
    { id:63, name:"Boiled eggs", price:30, image:"images/menu/boiled-eggs.jpg" },
    { id:64, name:"Pancakes", price:40, image:"images/menu/pancakes.jpg" },
    { id:65, name:"Sausage", price:50, image:"images/menu/sausage.jpg" },
    { id:66, name:"Smokies", price:50, image:"images/menu/smokies.jpg" },
    { id:67, name:"Plain omelette", price:70, image:"images/menu/plain-omelette.jpg" },
    { id:68, name:"Spanish omelette", price:100, image:"images/menu/spanish-omelette.jpg" },
    { id:69, name:"Rolex", price:100, image:"images/menu/rolex.jpg" },
    { id:70, name:"Kebab", price:100, image:"images/menu/kebab.jpg" },
  ]},
  { cat: "Pastries & savouries", items: [
    { id:71, name:"Samosa", price:50, image:"images/menu/samosa.jpg" },
    { id:72, name:"Mandazi bites", price:50, image:"images/menu/mandazi-bites.jpg" },
    { id:73, name:"Plain croissant", price:55, image:"images/menu/plain-croissant.jpg" },
    { id:74, name:"Sweet mandazi", price:60, image:"images/menu/sweet-mandazi.jpg" },
    { id:75, name:"Chocolate croissant", price:70, image:"images/menu/chocolate-croissant.jpg" },
    { id:76, name:"Peanut shortbread", price:85, image:"images/menu/peanut-shortbread.jpg" },
    { id:77, name:"Sausage roll", price:95, image:"images/menu/sausage-roll.jpg" },
    { id:78, name:"Kebab", price:100, image:"images/menu/kebab.jpg" },
    { id:79, name:"Beef pie", price:115, image:"images/menu/beef-pie.jpg" },
    { id:80, name:"Chicken pie", price:110, image:"images/menu/chicken-pie.jpg" },
    { id:81, name:"Queen cakes", price:120, image:"images/menu/queen-cakes.jpg" },
  ]},
  { cat: "Sweet treats", items: [
    { id:82, name:"Vanilla cookies", price:15, image:"images/menu/vanilla-cookies.jpg" },
    { id:83, name:"Ginger cookies", price:30, image:"images/menu/ginger-cookies.jpg" },
    { id:84, name:"Coconut cookies", price:30, image:"images/menu/coconut-cookies.jpg" },
    { id:85, name:"Sunstar cookies", price:100, image:"images/menu/sunstar-cookies.jpg" },
    { id:86, name:"Chocolate sunstar", price:120, image:"images/menu/chocolate-sunstar.jpg" },
    { id:87, name:"Coconut buns", price:60, image:"images/menu/coconut-buns.jpg" },
    { id:88, name:"Coffee scones", price:60, image:"images/menu/coffee-scones.jpg" },
    { id:89, name:"Raspberry buns", price:60, image:"images/menu/raspberry-buns.jpg" },
    { id:90, name:"Rings", price:50, image:"images/menu/rings.jpg" },
    { id:91, name:"Chocolate doughnut", price:75, image:"images/menu/chocolate-doughnut.jpg" },
    { id:92, name:"Cream doughnut", price:60, image:"images/menu/cream-doughnut.jpg" },
  ]},
  { cat: "Tea & coffee counter", items: [
    { id:93, name:"Black tea", price:50, image:"images/menu/black-tea.jpg" },
    { id:94, name:"Tea masala", price:100, image:"images/menu/tea-masala.jpg" },
    { id:95, name:"Lemon tea", price:60, image:"images/menu/lemon-tea.jpg" },
    { id:96, name:"Ginger tea", price:50, image:"images/menu/ginger-tea.jpg" },
    { id:97, name:"Milo tea, black", price:50, image:"images/menu/milo-tea-black.jpg" },
    { id:98, name:"Milo tea, white", price:100, image:"images/menu/milo-tea-white.jpg" },
  ]},
  { cat: "Breakfast beverages", items: [
    { id:99, name:"Hot water", price:20, image:"images/menu/hot-water.jpg" },
    { id:100, name:"Black coffee", price:50, image:"images/menu/black-coffee.jpg" },
    { id:101, name:"African tea", price:60, image:"images/menu/african-tea.jpg" },
    { id:102, name:"Lemon tea", price:50, image:"images/menu/lemon-tea.jpg" },
    { id:103, name:"Black tea", price:50, image:"images/menu/black-tea.jpg" },
    { id:104, name:"Milo tea", price:50, image:"images/menu/milo-tea.jpg" },
    { id:105, name:"Hot chocolate", price:50, image:"images/menu/hot-chocolate.jpg" },
    { id:106, name:"White coffee", price:100, image:"images/menu/white-coffee.jpg" },
    { id:107, name:"Tea masala", price:100, image:"images/menu/tea-masala.jpg" },
    { id:108, name:"Dawa, regular", price:250, image:"images/menu/dawa-regular.jpg" },
    { id:109, name:"Dawa, large", price:300, image:"images/menu/dawa-large.jpg" },
  ]},
  { cat: "Sodas & juice", items: [
    { id:110, name:"Coke, 350ml", price:50, image:"images/menu/coke-350ml.jpg" },
    { id:111, name:"Fanta blackcurrant, 350ml", price:50, image:"images/menu/fanta-blackcurrant-350ml.jpg" },
    { id:112, name:"Sprite, 350ml", price:50, image:"images/menu/sprite-350ml.jpg" },
    { id:113, name:"Fanta orange, 350ml", price:50, image:"images/menu/fanta-orange-350ml.jpg" },
    { id:114, name:"Fanta blackcurrant, 500ml", price:75, image:"images/menu/fanta-blackcurrant-500ml.jpg" },
    { id:115, name:"Sprite, 500ml", price:75, image:"images/menu/sprite-500ml.jpg" },
    { id:116, name:"Coke zero, 500ml", price:75, image:"images/menu/coke-zero-500ml.jpg" },
    { id:117, name:"Fanta orange, 500ml", price:75, image:"images/menu/fanta-orange-500ml.jpg" },
    { id:118, name:"Coke original, 500ml", price:75, image:"images/menu/coke-original-500ml.jpg" },
    { id:119, name:"Fanta passion, 500ml", price:75, image:"images/menu/fanta-passion-500ml.jpg" },
    { id:120, name:"Minute Maid apple, 400ml", price:80, image:"images/menu/minute-maid-apple-400ml.jpg" },
    { id:121, name:"Minute Maid mango, 400ml", price:80, image:"images/menu/minute-maid-mango-400ml.jpg" },
    { id:122, name:"Minute Maid orange pulpy, 400ml", price:80, image:"images/menu/minute-maid-orange-pulpy-400ml.jpg" },
    { id:123, name:"Minute Maid tropical mix, 400ml", price:80, image:"images/menu/minute-maid-tropical-mix-400ml.jpg" },
  ]},
  { cat: "Water & more", items: [
    { id:124, name:"Pick n Peel apple juice", price:280, image:"images/menu/pick-n-peel-apple-juice.jpg" },
    { id:125, name:"Pick n Peel mango juice", price:280, image:"images/menu/pick-n-peel-mango-juice.jpg" },
    { id:126, name:"Pick n Peel tropical juice", price:280, image:"images/menu/pick-n-peel-tropical-juice.jpg" },
    { id:127, name:"Mt Kenya water, 300ml", price:30, image:"images/menu/mt-kenya-water-300ml.jpg" },
    { id:128, name:"Uchumi water, 500ml", price:25, image:"images/menu/uchumi-water-500ml.jpg" },
    { id:129, name:"Quencher, 500ml", price:30, image:"images/menu/quencher-500ml.jpg" },
    { id:130, name:"Dasani, 500ml", price:35, image:"images/menu/dasani-500ml.jpg" },
    { id:131, name:"Aquamist, 500ml", price:55, image:"images/menu/aquamist-500ml.jpg" },
    { id:132, name:"Keringet, 500ml", price:65, image:"images/menu/keringet-500ml.jpg" },
    { id:133, name:"Uchumi water, 1L", price:50, image:"images/menu/uchumi-water-1l.jpg" },
    { id:134, name:"Quencher, 1L", price:50, image:"images/menu/quencher-1l.jpg" },
    { id:135, name:"Dasani, 1L", price:60, image:"images/menu/dasani-1l.jpg" },
    { id:136, name:"Aquamist, 1L", price:85, image:"images/menu/aquamist-1l.jpg" },
  ]},
];

let activeCat = 0;
let cart = [];

function currency(n){
  return 'KES ' + Math.round(n).toLocaleString('en-KE');
}

function renderTabs(){
  const tabsEl = document.getElementById('tabs');
  tabsEl.innerHTML = '';
  menu.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'tab' + (i === activeCat ? ' active' : '');
    b.textContent = c.cat;
    b.onclick = () => { activeCat = i; renderTabs(); renderGrid(); };
    tabsEl.appendChild(b);
  });
}

function renderGrid(){
  const c = menu[activeCat];
  document.getElementById('catName').textContent = c.cat;

  const grid = document.getElementById('itemGrid');
  grid.innerHTML = '';

  c.items.forEach(item => {
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

function newBill(){
  if(cart.length && !confirm('Start a new bill? This clears the current items.')) return;
  cart = [];
  document.getElementById('discountRate').value = 0;
  document.getElementById('orderNo').value = '';
  document.getElementById('servedBy').value = '';
  document.getElementById('custName').value = '';
  renderCart();
}

function printBill(){
  if(cart.length === 0) return;

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

  window.print();
}

renderTabs();
renderGrid();
renderCart();

function getBillTotal(){const subtotal=cart.reduce((s,it)=>s+it.price*it.qty,0);const rate=parseFloat(document.getElementById('discountRate').value)||0;return subtotal-(subtotal*rate/100);}
function openMpesaModal(){if(!cart.length)return;document.getElementById('mpesaAmount').textContent=currency(getBillTotal());document.getElementById('mpesaModal').classList.add('open');}
function closeMpesaModal(){document.getElementById('mpesaModal').classList.remove('open');}
function markMpesaPaid(){closeMpesaModal();const t=document.getElementById('paymentToast');t.textContent='M-Pesa marked as paid';t.classList.add('show');clearTimeout(window.mpesaToastTimer);window.mpesaToastTimer=setTimeout(()=>t.classList.remove('show'),2500);}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMpesaModal();});
