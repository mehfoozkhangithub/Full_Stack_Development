"use strict"
// http://localhost:3000/products?_page=1&_limit=5
const API_URL = `http://localhost:3000/products`;
// const API_URL1 = `http://localhost:3000/products?_page=1&_limit=5`;


let allProducts = [];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#info')
    const cardTemplate = document.getElementById('card-template')

    for (let i = 0; i < 10; i++) {
        grid.append(cardTemplate.content.cloneNode(true))
    }

    fetchAndRenderProducts();
    populateFilterOptions();
});

const fetchAndRenderProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const categoryCount = data.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
        }, {});

        sessionStorage.setItem('category', JSON.stringify(categoryCount));
        renderProducts(data);
    } catch (err) {
        console.error('Error fetching products:', err);
    }
};

const populateFilterOptions = () => {
    const storage = JSON.parse(sessionStorage.getItem('category'));
    const filterSelect = document.querySelector('#filter');

    if (!storage || !filterSelect) return;

    filterSelect.innerHTML = `<option value="">Select Category</option>`; // default

    for (const key in storage) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        filterSelect.appendChild(option);
    }
};

const renderProducts = (products) => {
    const container = document.getElementById('info');
    container.innerHTML = '';

    allProducts = products;

    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'card_div';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>id : ${product.id}</h3>
            <h4 class="title_div">${product.title}</h4>
            <h3>price : ${product.price}</h3>
            <h3>category : ${product.category}</h3>
            <h6 class="text_div">${product.description}</h6>
            <div class="reating_1">
                <h3>Rate : ${product.rating.rate}</h3>
                <h3>Quantity : ${product.rating.count}</h3>
            </div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
};

const addToCart = (id) => {
    const product = allProducts.find(p => p.id === id);
    // console.log('hello', product);
}

const searchFunc = async () => {
    const query = document.querySelector('#search').value.trim().toLowerCase();
    if (!query) return;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const filtered = data.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
        );


        renderProducts(filtered);
        document.querySelector('#search').value = ''
    } catch (err) {
        console.error('Search failed:', err);
    }
};

document.querySelector('#searchBtn').addEventListener('click', searchFunc);
document.querySelector('#filter').addEventListener('change', async (e) => {
    const category = e.target.value;
    const res = await fetch(API_URL);
    const data = await res.json();
    const filtered = category
        ? data.filter((el) => el.category === category)
        : data;
    renderProducts(filtered);
});

module.exports = {
    fetchAndRenderProducts,
    renderProducts,
};