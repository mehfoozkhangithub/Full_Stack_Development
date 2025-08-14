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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        let data = await res.json();
        console.log('🚀 ~ data:', data);
        alert(`data`)
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));

        if (data.accessToken) window.location = 'index.html';

    } catch (error) {
        console.log('🚀 ~ error:', error);
    }


}