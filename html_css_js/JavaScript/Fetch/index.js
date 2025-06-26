const api = `https://jsonplaceholder.typicode.com/photos`;

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById('info');

  data.forEach((element) => {
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
