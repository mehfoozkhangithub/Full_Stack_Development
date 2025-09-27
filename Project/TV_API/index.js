const API_BASE_URL = `https://api.tvmaze.com/search/shows?q=girls`;


const api_fetch = async () => {
    try {
        let res = await fetch(API_BASE_URL);
        let data = await res.json();
        Render_UI(data)
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
}


const Render_UI = (infoData) => {
    infoData.forEach((element) => {
        console.log('🚀 ~ element:', element.show);
    });
}