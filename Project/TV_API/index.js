const apiFunc = (param) => {
    return API_BASE_URL = `https :://api.tvmaze.com/search/shows?q=${param}`;
}


const api_fetch = async () => {

    const dataSearch = document.querySelector("#search-input").value;
    // console.log('🚀 ~ dataSearch:', dataSearch);
    let value = apiFunc(dataSearch);
    // console.log('🚀 ~ value:', value);
    try {
        let res = await fetch(value);
        let data = await res.json();
        Render_UI(data);
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
}

/* 

image
id
name
language
genres
runtime
rating
summary

*/

const Render_UI = (infoData) => {
    const mainDiv = document.querySelector("#mainContainer");
    infoData.forEach((element) => {
        element = element.show;
        const card_div = document.createElement("div");
        const id = document.createElement("h4");
        const img = document.createElement("img");
        const name = document.createElement("h4");
        const language = document.createElement("h3");
        const genres = document.createElement("h3");
        const runTime = document.createElement("h3");
        const rating = document.createElement("h5");
        const summary = document.createElement("p");

        id.innerText = `id : ${element.id}`;
        img.src = element.image.original;
        name.innerText = `name : ${element.name}`;
        language.innerText = `language : ${element.language}`;
        genres.innerText = `genres : ${element.genres}`;
        runTime.innerText = `runtime : ${element.runtime}`;
        rating.innerText = `rating : ${element.rating.average}`;
        summary.innerHTML = `summary : ${element.summary}`;

        // class name

        card_div.className = "card_Div"

        card_div.append(img, id, name, language, genres, runTime, rating, summary)

        mainDiv.append(card_div);
    });

}