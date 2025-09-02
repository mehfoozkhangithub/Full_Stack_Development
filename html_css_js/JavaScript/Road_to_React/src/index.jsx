import axios from 'axios';

const api = 'https://fakestoreapi.com/products';

axios
  .get(api)
  .then((res) => {
    console.log(' res:', res);
  })
  .catch((err) => {
    console.log(err);
  });