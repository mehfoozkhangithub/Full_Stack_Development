const api = `https://jsonplaceholder.typicode.com/albums`;

/* const ApiCall = () => {
  fetch(api).then((res) => res.json()).then((res) => console.log(res)).catch((err) => console.log(err));
}; */

// typeError -> json is not a functions =>  [] {} " "

const ApiCall = async () => {
  try {
    let respons = await fetch(api);
    let data = await respons.json();
    appendsFunc(data)
  } catch (error) {
    console.warn('-> ~ ApiCall ~ error:', error);
  }
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById('info');

  data.forEach((element) => {
    // console.warn('-> ~ data.forEach ~ element:', element);
    let cardDiv = document.createElement('div');
    let img = document.createElement('img');
    let id = document.createElement('h3');
    let title = document.createElement('h1');

    cardDiv.className = 'card_div';

    img.src = element.thumbnailUrl;

    id.innerText = element.id;

    title.innerText = element.title;

    cardDiv.append(img, id, title);

    dataShow.append(cardDiv);
  });
};

// task

// https://fakestoreapi.com/products
