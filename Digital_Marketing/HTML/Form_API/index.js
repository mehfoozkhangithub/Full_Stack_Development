let form = document.getElementById("signupForm");

form.onsubmit = (e) => {
    e.preventDefault(); // prevent page reload

    let formData = new FormData(form);
    let name = formData.get("username");
    let email = formData.get("email");

    document.getElementById("result").innerText =
        `Thanks ${name}! We'll contact you at ${email}.`;
};
