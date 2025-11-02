
let token = sessionStorage.getItem('token');

let path = window.location.pathname.split("/").pop();

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


setTimeout(() => {
    let cartDisplay = document.querySelector('.cartDisplay');
    // console.log('    🚀 ~ cartDisplay:', cartDisplay);

    if (path == `Login.html` || path == 'Login.html') {
        cartDisplay.style.display = 'none';
        cartDisplay.style.opacity = 0;
    }
}, 100);

const loginForm = async (e) => {
    e.preventDefault();

    const apiLogin = `http://localhost:3000/login`;


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
                'Content-Type': 'application/json', "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });
        let data = await res.json();

        if (token) {
            alert('you have token please go to home page...')
            return;
        }
        else if (data.accessToken) {
            sessionStorage.setItem("token", JSON.stringify(data.accessToken));
            window.location.pathname = `${basePath}/index.html`;
        }
        else if (data === 'Cannot find user') { alert("data coudn't found"); window.location = 'Signup.html' }

    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
}