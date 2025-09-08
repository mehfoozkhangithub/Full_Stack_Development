## Paginations

```js
const itemsPerPage = 4;
const totalItems = 20;
const data = Array.from({ length: totalItems }, (_, i) => `Card ${i + 1}`);

console.warn('-> ~ data:', data);
const cardContainer = document.getElementById('card-container');
const pagination = document.getElementById('pagination');

function renderCards(page = 1) {
  cardContainer.innerHTML = '';
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToShow = data.slice(start, end);

  itemsToShow.forEach((item) => {
    const card = document.createElement('div');
    card.style.cssText = 'border: 1px solid #ccc; padding: 10px; width: 120px;';
    card.textContent = item;
    cardContainer.appendChild(card);
  });

  renderPagination(page);
}

function renderPagination(currentPage) {
  pagination.innerHTML = '';
  const totalPages = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.style.cssText = `margin: 2px; padding: 6px 10px; ${
      i === currentPage ? 'font-weight: bold;' : ''
    }`;
    btn.addEventListener('click', () => renderCards(i));
    pagination.appendChild(btn);
  }
}

renderCards(); // Initial render
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>card paginations</title>
  </head>

  <body>
    <div
      id="card-container"
      style="display: flex; flex-wrap: wrap; gap: 10px;"
    ></div>
    <div id="pagination" style="margin-top: 20px;"></div>
  </body>
  <script src="./cardSlider.js"></script>
</html>
```
