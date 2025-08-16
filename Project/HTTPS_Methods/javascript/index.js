const container = document.querySelector('#container');

let token = JSON.parse(sessionStorage.getItem("token"));

let allProducts;

// if (!token) window.location = 'Login.html'


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

const myfunc = async () => {
    showSkeleton(6); // Show skeletons while loading

    try {
        let res = await fetch(`http://localhost:3000/product`);
        let data = await res.json();
        renderTheUI(data);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

const renderTheUI = (value) => {
    allProducts = value
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
                <p class="description">description : ${el.description}</p>
                <div class="rating">
                    <p>rate : ${el.rating.rate}</p>
                    <p>count : ${el.rating.count}</p>
                    </div>
                    <button onclick="addToCart(${el.id})" class="btn">add</button>
            </div>
        `;
        container.appendChild(card);
    });
};

const addToCart = async (id) => {

    let apiCart = `http://localhost:3000/cart`;

    let idElements = allProducts.find((el) => el.id === id)

    try {
        let res = await fetch(apiCart, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(idElements),
        });
        alert(`add to cart ✔`)

    } catch (error) {
        console.log('🚀 ~ error:', error);
    }

}