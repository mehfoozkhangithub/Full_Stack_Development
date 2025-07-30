
let cartArr = JSON.parse(localStorage.getItem('cartItem')) || [];
console.log('🚀 ~ cartArr:', cartArr[0].hasOwnProperty('count'));
console.log('🚀 ~ cartArr:', cartArr);




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

        button.innerText = 'remove'


        button.addEventListener('click', function () {
            // cartArr.push(element);

            let deleteData = cartArr.filter((dl) => {
                return dl.id !== element.id
            })
            cartArr = deleteData;

            localStorage.setItem('cartItem', JSON.stringify(cartArr));
            storeUI(cartArr)
        })

        pricingDiv.append(price, rate, count);

        div.append(img, id, title, description, category, pricingDiv, button);

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




