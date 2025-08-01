
let cartArr = JSON.parse(localStorage.getItem('cartItem'));

let tokenStorage = JSON.parse(localStorage.getItem('token'));

if (!tokenStorage) {
    window.location = 'Login.html'
}
// console.log('🚀 ~ cartArr:', cartArr[0].hasOwnProperty('count'));

/* let obj = [
    {
        category: "men's clothing",
        count: 1,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    {
        category: "men's clothing",
        count: 1,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    {
        category: "men's clothing",
        count: 1,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    },
    {

        category: "men's clothing",
        count: 1,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        id: 2,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        price: 22.3,
        rating: { rate: 4.1, count: 259 },
        title: "Mens Casual Premium Slim Fit T-Shirts ",
    }
] */

/* const result = cartArr.filter((item, index, self) => {
    console.log('🚀 ~ index:', index);
    console.log('🚀 ~ self:', self);
    console.log('🚀 ~ item:', item);
    return index === self.findIndex(t => t.id === item.id);
}
);
console.log('🚀 ~ result:', result); */

const result = cartArr.reduce((acc, item) => {
    const existing = acc.find((el) => el.id === item.id);
    if (existing) {
        existing.count += 1; // increment count
    } else {
        acc.push({ ...item }); // clone item
    }
    return acc;
}, []);

cartArr = result;

localStorage.setItem('cartItem', JSON.stringify(cartArr));



const storeUI = (value) => {
    const dataInfo = document.querySelector("#dataInfo");
    dataInfo.innerHTML = ''

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
        const count1 = document.createElement('p');
        const checkout_btn = document.createElement('button');

        img.src = element.image;
        id.innerText = element.id;
        price.innerText = element.price;
        title.innerText = element.title;
        category.innerText = element.category;
        description.innerText = element.description;
        rate.innerText = element.rating.rate;
        count.innerText = element.rating.count;
        count1.innerText = element.count;

        div.classList.add('card-div');
        pricingDiv.classList.add('card-price-div');


        button.innerText = 'remove';
        checkout_btn.innerText = 'checkout';
        checkout_btn.classList.add('checkout-btn');


        button.addEventListener('click', function () {
            // cartArr.push(element);

            let deleteData = cartArr.filter((dl) => {
                return dl.id !== element.id
            })
            cartArr = deleteData;

            localStorage.setItem('cartItem', JSON.stringify(cartArr));
            storeUI(cartArr)
        })

        checkout_btn.addEventListener('click', () => {
            window.location = 'Checkout.html'
        })


        pricingDiv.append(price, rate, count, count1);

        div.append(img, id, title, description, category, pricingDiv, button, checkout_btn);

        dataInfo.append(div);


    });

}


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




