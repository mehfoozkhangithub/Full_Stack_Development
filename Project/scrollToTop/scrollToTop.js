
// ! this is smoth
/* const scrollBtn = document.getElementById("scrollBtn");

// Show/hide button on scroll
window.onscroll = function () {
    if (window.scrollY > 100) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" })
} */


// #  this is extra smoth

const scrollBtn = document.getElementById("scrollBtn");

// Show/hide button with fade animation
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" })
    console.warn('-> ~ scrollUp ~ window:', window);
}
