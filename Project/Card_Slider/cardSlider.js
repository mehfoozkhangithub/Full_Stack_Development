
const slider = document.getElementById("slider");
console.warn('-> ~ slider.children.length:', slider.children.length);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

next.addEventListener("click", () => {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prev.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const width = slider.children[0].offsetWidth;
    console.warn('-> ~ updateSlider ~ width:', width);
    console.warn('-> ~ updateSlider ~ width:', width * currentIndex);
    slider.style.transform = `translateX(-${currentIndex * width}px)`;
}
