const loginApi = `http://localhost:3000/login`;



async function loginForm(e) {
    e.preventDefault()

    const email = document.querySelector("#userEmail").value.trim();
    const password = document.querySelector("#userPassword").value.trim();

    let formObject = {
        email,
        password
    }

    try {
        let response = await fetch(loginApi, {
            method: 'POST',
            body: JSON.stringify(formObject),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data = await response.json();
        console.log('🚀 ~ data:', data);
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));

        if (data.accessToken) {
            window.location = 'Home.html'
        }

    } catch (error) {
        console.log('🚀 ~ error:', error);
    }

}