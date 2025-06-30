const apiKey = `3d15e923`;

const dataLoad = async () => {
  let data = [{ name: 'ironman' }, { name: 'superman' }];

  const api = `http://www.omdbapi.com/?s=demon&apikey=${apiKey}`;

  try {
    const respons = await fetch(api);
    const data = await respons.json();
    appendsFunc(data);
  } catch (error) {
    console.log('-> error:', error);
  }
};

const apiCall = async (event) => {
  if (event.key === 'Enter') {
    const searchApi = document.querySelector('#searchInput');
    console.log('-> searchApi:', searchApi.value.length);

    if (searchApi.value.length === 0) return;

    const api = `https://www.omdbapi.com/?s=${searchApi.value}&apikey=${apiKey}`;

    try {
      const respons = await fetch(api);
      const data = await respons.json();
      console.log('-> data:', data);
      appendsFunc(data);
      searchApi.value = '';
    } catch (error) {
      console.log('-> error:', error);
    }
  }
  return;
};

const appendsFunc = (data) => {
  let mainDiv = document.getElementById('info');
  mainDiv.innerHTML = '';

  data.Search.forEach((hello) => {
    const cardDiv = document.createElement('div');
    const img = document.createElement('img');

    const nameDiv = document.createElement('div');
    const title = document.createElement('h3');

    const gridDiv = document.createElement('div');
    const year = document.createElement('p');
    const imdb = document.createElement('p');
    const type = document.createElement('p');

    cardDiv.className = 'card_div';
    nameDiv.className = 'name_div';
    gridDiv.className = 'grid_div';

    img.src = hello.Poster;
    title.innerText = `Title: ${hello.Title}`;
    year.innerText = `Year: ${hello.Year}`;
    imdb.innerText = `Imdb ID: ${hello.imdbID}`;
    type.innerText = `Type: ${hello.Type}`;

    gridDiv.append(year, imdb, type);
    nameDiv.append(title, gridDiv);
    cardDiv.append(img, nameDiv);
    mainDiv.append(cardDiv);
  });
};
