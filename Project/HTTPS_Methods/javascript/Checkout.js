const apiCheckout = `http://localhost:3000/cart`;

const token = sessionStorage.getItem('token');
console.log('🚀 ~ token:', token);

let path = window.location.pathname;
console.log('🚀 ~ path:', path);

if (!token || token == "null" || token == "undefined") {
    alert('please login first....');
    window.location = '../pages/Login.html';
}


setTimeout(() => {
    let cartDisplay = document.querySelector('.cartDisplay');

    if (path == `/movie_api_app/Project/HTTPS_Methods/Checkout.html` || path == "/Project/HTTPS_Methods/pages/Checkout.html") {
        cartDisplay.style.display = 'none';
    }
}, 100);

const showSkeleton = (count = 6) => {
    container.innerHTML = ''; // clear container

    // Create table skeleton
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody');

    for (let i = 0; i < count; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><div class="skeleton skeleton-text long"></div></td>
            <td><div class="skeleton skeleton-text short"></div></td>
            <td><div class="skeleton skeleton-text short"></div></td>
            <td><div class="skeleton skeleton-text short"></div></td>
        `;
        tbody.appendChild(row);
    }
    container.appendChild(table);
};

const checkoutFunc = async () => {
    showSkeleton(6); // Show skeletons while loading
    let apiCheckout_fetch = await fetch(apiCheckout);
    let data_checkout = await apiCheckout_fetch.json();
    // console.log('🚀 ~ data_checkout:', data_checkout);
    renderCheckout(data_checkout);
};

/* 
         <img class="image" src=${el.image} />
            <div class="info">
                <h3 class="id">id : ${el.id}</h3>
                <p class="category">title : ${el.title}</p>
                <p class="category">category : ${el.category}</p>
                <p class="price">price : ${el.price}</p>
                <p class="description">description : ${el.description}</p>
                <div class="rating">
                    <p>rate : ${el.rating.rate}</p>
                    <p>count : ${el.count}</p>
                </div>
                <div class="btn_count">
                <button onclick="deleteToCart(${el.id})" class="btns deletes">delete</button>
                <div class="paginationCount">
                <button class="btns neg" onclick="decrementCount(${el.id},${el.count})">-</button>
                <span class="count">${el.count}</span>
                <button class="btns pos" onclick="incrementCount(${el.id},${el.count})">+</button>
                </div>
                </div>
            </div>


*/

const renderCheckout = (value) => {
    const container = document.querySelector('#container')
    container.innerHTML = ''; // Remove skeletons
    // Create table
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody');

    // Add rows dynamically
    value.forEach((el) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${el.title}</td>
            <td>₹${el.price}</td>
            <td>
                <button class="btns neg" onclick="decrementCount(${el.id}, ${el.count})">-</button>
                ${el.count}
                <button class="btns pos" onclick="incrementCount(${el.id}, ${el.count})">+</button>
            </td>
            <td>₹${el.price * el.count}</td>
        `;
        tbody.appendChild(row);
    });

    const amountDiv_main = document.createElement('div');
    const amountDiv_second = document.createElement('div');

    amountDiv_main.classList.add('main_div_amount');
    amountDiv_second.classList.add('second_div_amount');

    //  here i have to crate this ui -> https://pixso.net/tips/shopping-cart-design/


    container.appendChild(table);
};

const incrementCount = async (id, counts) => {

    try {
        await fetch(`${apiCheckout}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ count: counts + 1 }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });

    } catch (error) {
        console.log('🚀 ~ error:', error);

    }
}

const decrementCount = async (id, counts) => {

    if (counts <= 1) {
        await fetch(`${apiCheckout}/${id}`, {
            method: 'DELETE',
            "Authorization": `Bearer ${token}`
        });
        alert(`your items delete id number is ${id}`)
        return
    }

    try {
        await fetch(`${apiCheckout}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ count: counts - 1 }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
    } catch (error) {
        console.log('🚀 ~ error:', error);

    }
}


const deleteToCart = async (id) => {
    try {
        await fetch(`${apiCheckout}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log('🚀 ~ error:', error);

    }
};