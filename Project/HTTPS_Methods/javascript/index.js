const apiProducts = `http://localhost:3000/product`;
const apiCart = `http://localhost:3000/cart`;

const token = sessionStorage.getItem('token');
let path = window.location.pathname.split("/").pop();

console.log('🚀 ~ path:', path);

const container = document.querySelector('#container');

let allProducts;
let cartLengths;

setTimeout(() => {
    let cartDisplay = document.querySelector('.cartDisplay');

    if (path == `index.html` || path == `index.html`) {
        cartDisplay.style.display = 'block';
        cartDisplay.style.opacity = 1;
    }
}, 100)

// Show skeleton placeholders
const showSkeleton = (count = 6) => {
    container.innerHTML = ''; // clear container
    for (let i = 0; i < count; i++) {
        const skeletonCard = document.createElement('div');
        skeletonCard.classList.add('card_div');
        skeletonCard.innerHTML = `
            <div class="skeleton skeleton-image"></div>
            <div class="info">
                <div class="skeleton skeleton-text short"></div>
                <div class="skeleton skeleton-text short"></div>
                <div class="skeleton skeleton-text long"></div>
                <div class="skeleton skeleton-text short"></div>
                <div class="skeleton skeleton-text short"></div>
                <div class="skeleton skeleton-text long"></div>
            </div>
        `;
        container.appendChild(skeletonCard);
    }
};

const renderTheUI = (value) => {
    container.innerHTML = ''; // Remove skeletons
    value.forEach((el) => {
        const card = document.createElement('div');
        card.classList.add('card_div');
        card.innerHTML = `
            <img class="image" src=${el.image} />
            <div class="info">
                <h3 class="id">id : ${el.id}</h3>
                <p class="category">category : ${el.category}</p>
                <p class="price">price : ${el.price}</p>
                <div class="rating">
                    <p>rate : ${el.rating.rate}</p>
                    </div>
                    <button onclick="addToCart(${el.id})" class="btns">add</button>
            </div>
        `;
        container.appendChild(card);
    });
};

const addToCart = async (id) => {

    let product = allProducts.find((el) => el.id === id);

    try {
        // check if product already exists in cart
        let res = await fetch(`${apiCart}?id=${id}`);
        let data = await res.json();

        if (data.length > 0) {
            // already in cart → increment count
            let existing = data[0];
            await fetch(`${apiCart}/${existing.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ count: existing.count + 1 }),
            });
            alert("Quantity updated ✔");
        } else {

            // not in cart → add new with count = 1
            await fetch(apiCart, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ ...product, count: 1 }),
            });

            alert("Added to cart ✔");
        }
    } catch (error) {
        console.log("🚀 ~ error:", error);
    }
};

const searchFunc = async () => {
    const query = document.querySelector('#search').value.trim().toLowerCase();
    if (!query) return;

    try {
        let [searchFetch] = await Promise.all([fetch(apiProducts)]);

        const [data1] = await Promise.all([searchFetch.json()]);

        const filtered = await data1.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
        );
        renderTheUI(filtered);
        document.querySelector('#search').value = ''
    } catch (err) {
        console.error('Search failed:', err);
    }
};

let pages = 1;
let pageLimits = 10;

const pagiDiv = document.querySelector("#pagination");

pagiDiv.innerHTML = `
<button class="btns" id="decrementBtn">-</button>
<span id="countPage">${pages}</span>
<button class="btns" id="incrementBtn">+</button>
`


const paginationFetch = async (limit, page) => {
    let paginationApi = `http://localhost:3000/product?_limit=${limit}&_page=${page}`;

    showSkeleton(6); // Show skeletons while loading
    let cartDisplay = document.querySelector(".cartDisplay");

    try {
        const [res1, res2] = await Promise.all([
            fetch(paginationApi),
            fetch(apiCart)
        ]);
        // we have to apply loader into this....
        console.log('🚀 ~ res1:', res1.ok);
        const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
        let data = await data1;
        cartLengths = data2.length;
        if (cartLengths) {
            cartDisplay.style.display = 'block';
            cartDisplay.textContent = cartLengths;
        }
        else {
            cartDisplay.style.display = 'none';
            cartDisplay.style.opacity = 0;
        }

        allProducts = data;
        renderTheUI(allProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

const countPages = document.querySelector("#countPage");
document.querySelector('#incrementBtn').addEventListener("click", () => {
    pages++;
    countPages.innerText = pages;
    paginationFetch(pageLimits, pages)
})
document.querySelector('#decrementBtn').addEventListener("click", () => {
    pages--
    countPages.innerText = pages;
    paginationFetch(pageLimits, pages)
})



