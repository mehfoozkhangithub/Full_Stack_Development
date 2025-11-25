const apiKey = `3d15e923`;

const apiCall = async (value) => {
  const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${value}`;
  let res = await fetch(apiURL);
  let data = await res.json();
  UI(data.Search);
};

const inputValue = () => {
  let inputVal = document.querySelector('#input').value;
  apiCall(inputVal);
};

const UI = (data) => {
  console.log('🚀 ~ data:', data);

  const mainDiv = document.querySelector('#container');

  mainDiv.innerHTML = '';
  /* 
    Poster
    imdbID
    Title
    Type
    Year
    */

  data.map((el, i) => {
    let cardDiv = document.createElement('div');
    let img = document.createElement('img');
    let imdbID = document.createElement('p');
    let title = document.createElement('h1');
    let type = document.createElement('h2');
    let year = document.createElement('h3');

    cardDiv.className = `div-${i + 1}`;

    img.src = el.Poster;
    imdbID.innerText = `id ${el.imdbID}`;
    title.innerText = `title ${el.Title}`;
    type.innerText = `type ${el.Type}`;
    year.innerText = `year ${el.Year}`;

    cardDiv.append(img, imdbID, title, type, year);
    mainDiv.append(cardDiv);
  });
};
