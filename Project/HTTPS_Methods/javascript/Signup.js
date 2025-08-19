
let path = window.location.pathname
console.log('🚀 ~ path:', path);

setTimeout(() => {
    let cartDisplay = document.querySelector('.cartDisplay');
    console.log('🚀 ~ cartDisplay:', cartDisplay);

    if (path == `/movie_api_app/Project/HTTPS_Methods/Signup.html`) {
        cartDisplay.style.display = 'none';
    }
}, 100)


const loginForm = async (e) => {
    e.preventDefault();

    const apiLogin = `http://localhost:3000/register`;


    const userEmail = document.querySelector('#userEmail').value;
    const userPassword = document.querySelector('#userPassword').value;


    let userData = {
        email: userEmail,
        password: userPassword
    }

    try {
        let res = await fetch(apiLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        let data = await res.json();

        if (data.accessToken) window.location = 'Login.html';

    } catch (error) {
        console.log('🚀 ~ error:', error);
    }


}