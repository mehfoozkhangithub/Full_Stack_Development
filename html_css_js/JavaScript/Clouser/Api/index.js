function mainFunction() {
  const query = document.querySelector('#query').value;
  fetchFunc(query);
}

async function fetchFunc(query) {
  let res = await fetch(`https://www.omdbapi.com/?apikey=f4300b1a&s=${query}`);
  let data = await res.json();
  appendData(data.Search);
}

function appendData(value) {
  console.log('🚀 ~ value:', value);
  const mainDiv = document.querySelector('#data_movies');

  value.forEach((items) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = items.Poster;

    div.append(img);

    mainDiv.append(div);
  });
}
