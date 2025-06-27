const Api_Key = `live_bxAXdnQu3q8aDrjTeIG2rLwQEc4t7cpCb94MhUZ2JlZjObLB2WOJnhdgTbUZD7Nf`;

const api = `https://api.thecatapi.com/v1/images/search?limit=22&breed_ids=beng&api_key=${Api_Key}`;

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendData(res))
    .catch((err) => console.log(err));
};

const appendData = (datas) => {
  //  [{},{},{}]

  const mainDiv = document.getElementById('info');

  datas.forEach((el) => {
    let breeds = el.breeds[0];
    // card
    const CardDiv = document.createElement('div');
    const img = document.createElement('img');
    const id = document.createElement('p');

    // detailDiv
    const detailDiv = document.createElement('div');
    const height = document.createElement('p');
    const width = document.createElement('p');

    // className
    CardDiv.className = 'card_div';
    detailDiv.className = 'detail_div';

    // data setting

    img.src = el.url;
    id.innerText = ` id : ${el.id}`;
    height.innerText = `height : ${el.height}`;
    width.innerText = `width : ${el.width}`;

    // breeds section

    const name = document.createElement('h3');
    const description = document.createElement('p');
    const origin = document.createElement('p');
    const life_span = document.createElement('p');

    const detailDiv_1 = document.createElement('div');

    detailDiv_1.className = 'detail_div_1';

    name.innerText = `name : ${breeds.name}`;

    description.innerText = `description : ${breeds.description}`;

    origin.innerText = `origin : ${breeds.origin}`;

    life_span.innerText = `life_span : ${breeds.life_span}`;

    detailDiv.append(width, height, origin, life_span);

    detailDiv_1.append(id, name, detailDiv, description);

    CardDiv.append(img, detailDiv_1);

    mainDiv.append(CardDiv);
  });
};

/* 

description

name

origin

life_span

*/
