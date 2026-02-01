const API = `https://jsonplaceholder.typicode.com/todos/`;

const Api_2 = `https://fakestoreapi.com/products`;

/* function ApiCall() {
  // sync way handle promis

  console.log('zero');

  let res = fetch(API)
    .then((res) => res.json())
    .then((res) => console.log('first', res))
    .catch((err) => err);
  console.log('second', res);
}
ApiCall();
 */

const ApiCall = async () => {
  /* let res = await fetch(API);
  let data = await res.json();
  console.log('🚀 ~ data:', data);
  console.log('🚀 ~ res:', res); */

  try {
    let res = await fetch(API);
    let data = await res.json();
    console.log('🚀 ~ data:', data);
    console.log('🚀 ~ res:', res);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

ApiCall();
