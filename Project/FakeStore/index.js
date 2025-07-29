let Api = `https://fakestoreapi.com/products`

let storage = JSON.parse(localStorage.getItem('token'));

let cartArr = JSON.parse(localStorage.getItem('cartItem')) || [];
console.log('🚀 ~ cartArr:', cartArr.length);

const path = window.location.pathname;
console.log('🚀 ~ path:', path);

const cartLength = document.querySelector('span');
if (path === '/Project/FakeStore/index.html') {
    cartLength.style.display = cartArr.length < 0 ? 'none' : 'block';
    cartLength.className = cartArr.length > 0 ? 'cartLength-active' : 'none';
    cartLength.innerText = cartArr.length > 0 ? cartArr.length : '';
}



// console.log('🚀 ~ storage:', storage);

const datafetch = async () => {
    try {
        let res = await fetch(Api);
        let data = await res.json();
        storeUI(data);
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
            cartArr.push(element);
            localStorage.setItem('cartItem', JSON.stringify(cartArr));
            if (cartArr.length && path === '/Project/FakeStore/index.html') {
                cartLength.style.display = 'block'
                cartLength.className = 'cartLength-active';
                cartLength.innerText = cartArr.length
            }
        })



        pricingDiv.append(price, rate, count);

        div.append(img, id, title, description, category, pricingDiv, button);

        dataInfo.append(div);


    });

}


//  =============== from js =====================



const formSubmitData = async (e) => {
    e.preventDefault();

    const loginApi = `https://fakestoreapi.com/auth/login`;


    const email = document.querySelector("#username").value;
    // console.log('🚀 ~ email:', typeof email);
    const pass = document.querySelector("#password").value;
    // console.log('🚀 ~ pass:', typeof pass);

    /* 
    johnd -> username
    m38rmF$ -> pass    
    */

    let loginData = {
        username: email,
        password: pass
    }

    try {
        let res = await fetch(loginApi, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await res.json();
        // console.log('🚀 ~ data:', data);

        localStorage.setItem('token', JSON.stringify(data.token));
        if (storage) {
            window.location = 'index.html';
            localStorage.removeItem('token');
        }
    } catch (error) {
        // console.log('🚀 ~ error:', error);
    }

}
// https://fakestoreapi.com/carts
// https://fakestoreapi.com/products

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