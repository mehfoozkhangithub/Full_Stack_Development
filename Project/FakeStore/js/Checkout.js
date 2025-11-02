let cartArr = JSON.parse(localStorage.getItem('cartItem'));

let tokenStorage = JSON.parse(sessionStorage.getItem('token'));

if (!tokenStorage) {
    window.location = 'Login.html'
};

const DataCheckout = () => {
    costUpdate()

    const dataCart = document.querySelector('.dataCart');

    dataCart.innerHTML = '';

    cartArr?.map((el, i) => {
        const id = document.createElement('h3');
        const finalDiv = document.createElement('div');
        const divQuanty = document.createElement('div');
        const divDetails = document.createElement('div');
        const button_1 = document.createElement('button');
        const button_2 = document.createElement('button');
        const heading = document.createElement('h3');
        const img = document.createElement('img');
        const count = document.createElement('p');
        const price = document.createElement('p');


        divDetails.classList.add('details');
        divQuanty.classList.add('quantity');
        finalDiv.classList.add('final');

        id.innerText = i + 1;

        button_1.innerText = '-';
        button_2.innerText = '+';

        heading.innerText = el.title;

        img.src = el.image;

        count.innerText = el.count;

        price.innerText = `price: ${Math.round(el.price * 83)}`;

        button_2.addEventListener('click', () => {

            let updateArr = cartArr.map((ll) => {

                if (el.id === ll.id) {
                    return {
                        ...ll,
                        count: ll.count + 1
                    }
                }
                return ll;
            })
            cartArr = updateArr;
            localStorage.setItem('cartItem', JSON.stringify(cartArr));
            DataCheckout();
            costUpdate();
        });

        button_1.addEventListener('click', () => {

            if (el.count <= 1) {
                alert('count was less... want to remove item please go to cart page...🛒');
                window.location = 'Cart.html';
                return;
            }
            let updateArr = cartArr.map((ll) => {
                if (el.id === ll.id) {
                    return {
                        ...ll,
                        count: ll.count - 1
                    }
                }
                // if (el.count <= 1) {
                //     return ll.id !== el.id;
                // }
                return ll;
            });
            cartArr = updateArr;
            localStorage.setItem('cartItem', JSON.stringify(cartArr));
            DataCheckout();
            costUpdate();
        });

        divDetails.append(img, heading, price);

        divQuanty.append(button_1, count, button_2);
        finalDiv.append(id, divDetails, divQuanty);

        dataCart.append(finalDiv);

    });

};

function costUpdate() {
    let totalPrice = document.querySelector('#totalPrice');
    let tax = document.querySelector('#tax');
    let finalGT = document.querySelector('#final_GT');

    if (!totalPrice || !tax || !finalGT) return;

    totalPrice.innerHTML = '';
    tax.innerHTML = '';
    finalGT.innerHTML = '';

    let shipping = 10;
    let total = 0

    cartArr.map((ss) => {
        total += ss.count * Math.round(ss.price * 83)
    });

    totalPrice.append(`₹ ${total}`);
    tax.append(`₹ ${shipping * 83}`);
    finalGT.append(`₹ ${total + shipping * 83}`);
}


const backFun = () => {
    window.location = 'index.html'
}