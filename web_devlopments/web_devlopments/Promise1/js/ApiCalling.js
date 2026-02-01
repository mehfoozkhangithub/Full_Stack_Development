const BASE_URL = `https://jsonplaceholder.typicode.com/users`;

/* window.onload = function () {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((res) => console.log('this is the data : res', res))
    .catch((err) => console.log('err', err))
    .finally(() => console.log('yes done fetching '));
}; */

window.onload = async function () {
  try {
    const data = await fetch(BASE_URL);
    const res = await data.json();
    console.log('🚀 ~ res:', res);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};
