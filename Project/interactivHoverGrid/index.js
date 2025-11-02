const main = document.querySelector('#container');
const generated = () => {
    let input = +document.querySelector('#input').value;

    // if (typeof input === "string" && typeof input === "boolean") {
    //     return
    // }

    main.innerHTML = "";
    for (let i = 1; i <= input; i++) {
        let div = document.createElement("div");
        div.className = "small-div";
        main.appendChild(div);
    }
}