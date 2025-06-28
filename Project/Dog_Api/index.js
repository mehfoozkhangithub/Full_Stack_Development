const Api_Key_Dog = `live_bxAXdnQu3q8aDrjTeIG2rLwQEc4t7cpCb94MhUZ2JlZjObLB2WOJnhdgTbUZD7Nf`;

const api = `https://api.thedogapi.com/v1/images/search?limit=20&api_key=${Api_Key_Dog}`;

const api1 = `https://dog.ceo/api/breeds/list/all`;

const myFunctions = async () => {
  try {
    let response = await fetch(api);
    let data = await response.json();
    appendData(data);
  } catch (err) {
    console.log('-> err:', err);
  }
};

const appendData = (value) => {
  const mainDiv = document.querySelector('#main-div');
  value?.map((element) => {
    console.log(element);

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card_div';
    const id = document.createElement('h1');
    const img = document.createElement('img');
    const height = document.createElement('p');
    const width = document.createElement('p');

    id.textContent = `id : ${element.id}`;
    img.src = element.url;
    height.textContent = `height : ${element.height}`;
    width.textContent = `width : ${element.width}`;
    cardDiv.append(id, img, height, width);
    mainDiv.append(cardDiv);
    /* 
    id
    url
    height
    width
    */
  });
};
