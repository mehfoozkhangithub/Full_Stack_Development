let Api = `https://fakestoreapi.com/products`


let cartArr = JSON.parse(localStorage.getItem('cartItem')) || [];
console.log('🚀 ~ cartArr:', cartArr);


const path = window.location.pathname;
console.log('🚀 ~ path:', path);

const cartLength = document.querySelector('span');

function cartManupulation() {
    if (path === '/Project/FakeStore/index.html' || path === '/movie_api_app/Project/FakeStore/index.html') {
        cartLength.className = cartArr.length > 0 ? 'cartLength-active' : 'cartLength-in-active';
        cartLength.innerText = cartArr.length > 0 ? cartArr.length : '';
    }
}





// console.log('🚀 ~ storage:', storage);

const datafetch = async () => {
    try {
        let res = await fetch(Api);
        let data = await res.json();
        console.log('🚀 ~ data:', data);
        storeUI(data);
        cartManupulation()
    } catch (error) {
        // console.log('🚀 ~ error:', error);
    }
}

const storeUI = (value) => {
    const dataInfo = document.querySelector("#dataInfo");

    value?.forEach((element) => {
        // console.log('🚀 ~ element:', element);
        const div = document.createElement('div');
        const pricingDiv = document.createElement('div');
        const id = document.createElement('p');
        const img = document.createElement('img');
        const price = document.createElement('p');
        const title = document.createElement('h4');
        const category = document.createElement('p');
        const description = document.createElement('p');
        const rate = document.createElement('p');
        const count = document.createElement('p');
        const button = document.createElement('button');

        img.src = element.image;
        id.innerText = element.id;
        price.innerText = element.price;
        title.innerText = element.title;
        category.innerText = element.category;
        description.innerText = element.description;
        rate.innerText = element.rating.rate;
        count.innerText = element.rating.count;


        div.classList.add('card-div');
        pricingDiv.classList.add('card-price-div');

        button.innerText = 'add'


        button.addEventListener('click', function () {

            console.log('🚀 ~ element:', element);
            console.log("🚀 ~ element.hasOwnProperty('count')", element.hasOwnProperty('count'));


            cartArr.push({ ...element, count: 1 });
            localStorage.setItem('cartItem', JSON.stringify(cartArr));


            if (cartArr.length > 0 && path === '/Project/FakeStore/index.html' || path === '/movie_api_app/Project/FakeStore/index.html') {
                cartManupulation()
            }
        })

        pricingDiv.append(price, rate, count);

        div.append(img, id, title, description, category, pricingDiv, button);

        dataInfo.append(div);


    });

}




//  =============== login invoke js =====================

const changeToLogin = () => {
    window.location = 'Login.html'
}

const backFun = () => {
    window.location = 'index.html'
}

const chageToCart = () => {
    window.location = 'Cart.html'
}

const cartDisplay = () => {
    storeUI(cartArr)
}
