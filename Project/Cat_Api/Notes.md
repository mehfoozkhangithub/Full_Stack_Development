```js
const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key':
    'live_bxAXdnQu3q8aDrjTeIG2rLwQEc4t7cpCb94MhUZ2JlZjObLB2WOJnhdgTbUZD7Nf',
});
console.log('-> headers:', headers);

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow',
};

fetch('https://api.thecatapi.com/v1/images/', requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log('-> result:', result);
  })
  .catch((error) => console.log('error', error));
```

support.type.property-name.css
meta.property-name.css
meta.property-list.css
source.css
meta.embedded.block.html
text.html.derivative
foreground support.type.property-name

#9CDCFE
#D4D4D4 <- This is css name,id,element class name on json color.

## Skeleton loading

```css
.skeleton {
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-text {
  width: 100%;
  height: 0.5rem;
  margin-bottom: 0.25rem;
}

.skeleton-text:last-child {
  margin-bottom: 0;
  width: 80%;
}

@keyfram skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
```

- this is for cat api data
  https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
- this is for dog api data
  https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
