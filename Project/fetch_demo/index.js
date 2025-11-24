const API = `https://fakestoreapi.com/products`;

// https://api.tvmaze.com/search/shows?q=girl

async function apiCall() {
  let res = await fetch(API); // json
  //   let data = res.json(); // [{}]
  let data = await res.json();
  appendData(data);
}

const appendData = (value) => {
  console.log('🚀 ~ value:', value);
  const content = document.getElementById('container');

  value.map((el, i, arr) => {
    let cardDiv = document.createElement('div');
    let id_created = document.createElement('h3');
    let title_created = document.createElement('h2');
    let price_created = document.createElement('p');
    let discription_created = document.createElement('h3');
    let img_created = document.createElement('img');

    cardDiv.className = `div_${i + 1}`;

    id_created.innerText = el.id;
    title_created.innerText = el.title;
    price_created.innerText = el.price;
    discription_created.innerText = el.description;
    img_created.src = el.image;
    img_created.alt = 'logo';

    cardDiv.append(
      id_created,
      img_created,
      title_created,
      price_created,
      discription_created
    );
    content.append(cardDiv);
  });
};
