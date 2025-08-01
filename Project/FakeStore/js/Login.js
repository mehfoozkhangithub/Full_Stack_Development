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
        console.log('🚀 ~ data:', data);

        localStorage.setItem('token', JSON.stringify(data.token));
        if (data.token) {
            window.location = 'Cart.html';
        }
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }

}
// https://fakestoreapi.com/carts
// https://fakestoreapi.com/products

const changeToLogin = () => {
    window.location = 'Login.html';
}

const backFun = () => {
    window.location = 'index.html';
}

const chageToCart = () => {
    window.location = 'Cart.html';
}