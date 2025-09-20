const BASE_URL = `https://official-joke-api.appspot.com/random_joke`;
// const BASE_URL = `https://jsonplaceholder.typicode.com/posts`;

`https://jsonplaceholder.typicode.com/comments`

const apiCalling = async () => {

    try {
        let data = await fetch(BASE_URL);
        let res = await data.json();
        console.log('🚀 ~ res:', res);
        alert(
            `id ${res.id}
        type ${res.type}
        setup ${res.setup}
        punchline ${res.punchline}
        `
        )
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }

    // sync way handle promise
    /*  fetch(BASE_URL).then((res) => res.json()).then((res) => console.log(res)).catch((error) => console.log(error)).finally(() => console.log("data has been fetch")); */

}