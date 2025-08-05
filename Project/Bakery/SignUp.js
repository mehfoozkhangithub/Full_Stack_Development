
const registerApi = `http://localhost:3000/register`;


async function formData(e) {
    e.preventDefault()

    const email = document.querySelector("#userEmail").value.trim();
    const password = document.querySelector("#userPassword").value.trim();

    let formObject = {
        email,
        password
    }


    try {
        let response = await fetch(registerApi, {
            method: 'POST',
            body: JSON.stringify(formObject),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json()

        if (data.accessToken) {
            window.location = 'Login.html'
        }
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
}