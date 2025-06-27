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
