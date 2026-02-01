let token = sessionStorage.getItem('token');

const storeData = JSON.parse(localStorage.getItem('userData'));

let getCart = JSON.parse(localStorage.getItem('cartData')) || [];
const GST_Rate = 0.18;

if (window.location.pathname === '/ls/pages/cartPage.html') {
  if (storeData === null || storeData === undefined) {
    window.location.pathname = '/ls/pages/signUp.html';
  } else if (!token) {
    console.log('please login first and get the toke...');
    window.location.pathname = 'ls/pages/login.html';
  } else {
    UI_Cart();
  }
}

function UI_Cart() {
  const tbody = document.querySelector('#cartData');
  tbody.innerHTML = '';

  let subTotal = 0;
  getCart.forEach((el, index) => {
    if (!el.qty) el.qty = 1;
    const price = Number(el.price);
    const itemTotal = el.price * el.qty;
    subTotal += itemTotal;

    const tr = document.createElement('tr');

    tr.innerHTML = `
                <td>${el.id}</td>
                <td><img src="${el.image}" width="60"/></td>
                <td>${el.title}</td>
                <td>${el.category}</td>
                <td>
                    <button onclick="changeQty(${index}, 1)"><i class="bi bi-plus-lg"></i></button>
                    <strong>${el.qty}</strong>
                    <button onclick="changeQty(${index}, -1)"><i class="bi bi-dash-lg"></i></button>
                </td>
                <td>₹ ${itemTotal.toFixed(2)}</td>
            `;

    tbody.appendChild(tr);
  });

  const gstAmount = subTotal * GST_Rate;
  const grandTotal = subTotal + gstAmount;

  document.getElementById('subTotal').innerText = `₹ ${subTotal.toFixed(2)}`;
  document.getElementById('gstAmount').innerText = `₹ ${gstAmount.toFixed(2)}`;
  document.getElementById('grandTotal').innerText = `₹ ${grandTotal.toFixed(
    2
  )}`;

  localStorage.setItem('cartData', JSON.stringify(getCart));
}

function changeQty(index, value) {
  getCart[index].qty = Number(getCart[index].qty) + value;
  if (getCart[index].qty <= 0) {
    getCart.splice(index, 1);
  }
  UI_Cart();
}
