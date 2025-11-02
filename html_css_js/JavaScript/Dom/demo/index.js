

const infoFunc = () => {
    let information = document.getElementsByTagName("p")[0].innerText;
    console.log('🚀 ~ information:', information);
}

const generator = async () => {
    const API = `https://official-joke-api.appspot.com/random_joke`;

    const jokeDiv = document.querySelectorAll("#joke");
    console.log('🚀 ~ jokeDiv:', jokeDiv);

    try {
        let res = await fetch(API);
        let data = await res.json();
        console.log('🚀 ~ data:', data);

        let id = document.createElement("h3");
        let punchLine = document.createElement("h4");
        let setUp = document.createElement("h5");
        let type = document.createElement("p");

        id.innerText = `jokeID: ${data.id}`
        punchLine.innerText = `Punchline: ${data.punchline}`;
        setUp.innerText = `Setup: ${data.setup}`;
        type.innerText = `Type: ${data.type}`;

        // # this is the first way....
        // jokeDiv.append(id, punchLine, setUp, type);


        // $ this is the second way...
        // Array.from(jokeDiv).map((el, i) => {
        //     el.innerHTML = `
        //     <strong>Joke ${i + 1}</strong><br>
        //      ${id.innerText}<br>
        //      ${setUp.innerText}<br>
        //      ${punchLine.innerText}<br>
        //      ${type.innerText}
        //     `;
        // });

        //& this is the third way...
        jokeDiv.forEach((div, i) => {
            div.innerHTML = "";
            div.append(`Joke ${i + 1}`, id.cloneNode(true), setUp.cloneNode(true), punchLine.cloneNode(true), type.cloneNode(true));
        });

    } catch (error) {
        console.log('🚀 ~ error:', error);

    }
}