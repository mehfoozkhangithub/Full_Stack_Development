const container = document.querySelector('#container');

let cartLengths;

let cartApi;

let token = sessionStorage.getItem('token');

if (!token || token == "null" || token == "undefined") {
    alert('please login first....');
    window.location = 'Login.html';
}


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
    console.log('🚀 ~ value:', value);
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
                <button onclick="deleteToCart(${el.id})" class="btns deletes">checkout</button>
                <div class="paginationCount">
                <button class="btns neg">-</button>
                <span class="count">1</span>
                <button class="btns pos">+</button>
                </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

const deleteToCart = async (id) => {
    try {
        let res = await fetch(`${cartApi}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (error) {
        console.log('🚀 ~ error:', error);

    }
}