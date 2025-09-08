const container = document.querySelector('#container');

let cartLengths;

let cartApi;

let token = sessionStorage.getItem('token');

let path = window.location.pathname.split("/").pop();

if (!token || token == "null" || token == "undefined") {
    alert('please login first....');
    window.location = '../pages/Login.html';
}

setTimeout(() => {
    let cartDisplay = document.querySelector('.cartDisplay');

    if (path == `Cart.html`) {
        cartDisplay.style.display = 'block';
        cartDisplay.style.opacity = 1;
    }
}, 100)

const cardFetch = async () => {
    showSkeleton(cartLengths);
    let cartDisplay = document.querySelector(".cartDisplay");

    cartApi = `http://localhost:3000/cart`;
    try {
        let res = await fetch(cartApi);
        let data = await res.json();
        cartLengths = data.length;
        if (cartLengths) {
            cartDisplay.textContent = cartLengths;
        }
        cardRenderUI(data)
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
}

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

const cardRenderUI = (value) => {

    container.innerHTML = ''; // Remove skeletons
    value.forEach((el) => {
        const card = document.createElement('div');
        card.classList.add('card_div');
        card.innerHTML = `
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
                <button onclick="goToCheckout()" class="btns checkout">checkout</button>
               </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function getBasePath(path) {
    // remove "index.html" if it exists anywhere
    path = path.replace("index.html", "");

    // find where "/pages/" starts
    let index = path.indexOf("/pages/");

    if (index !== -1) {
        // keep everything before "/pages/"
        path = path.substring(0, index);
    }

    // ✅ normalize multiple slashes to a single slash
    path = path.replace(/\/{2,}/g, "/");

    // ✅ always ensure trailing slash
    if (!path.endsWith("/")) {
        path += "/";
    }

    return path;
}

let fullPath = window.location.pathname;

let basePath = getBasePath(fullPath);


const goToCheckout = () => {
    window.location.pathname = `${basePath}pages/Checkout.html`
}

