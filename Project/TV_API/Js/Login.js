let arrLocalStorage = JSON.parse(localStorage.getItem("formData")) || [];

const homePage = () => {
    window.location = '/Project/TV_API/index.html'
};


const handleForm = (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    console.log('🚀 ~ email:', email);
    const pass = document.querySelector("#pass").value;
    console.log('🚀 ~ pass:', pass);

    let objData = {
        id: Date.now(),
        email: email,
        pass: pass
    }

    arrLocalStorage.push(objData);

    localStorage.setItem("formData", JSON.stringify(arrLocalStorage));
    // window.location.reload();

    document.querySelector("#email").value = "";
    document.querySelector("#pass").value = "";

}

let path = window.location.pathname;
console.log('🚀 ~ path:', path);