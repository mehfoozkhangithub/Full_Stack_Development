/* const input = document.getElementById('search');

input.addEventListener('input', function (e) {
  console.log('Searching for:', e.target.value);
});
 */
// this is working the elements

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
    // console.log('-> timer:', timer);
  };
}

const input = document.getElementById('search');

input.addEventListener(
  'input',
  debounce(function (e) {
    console.log('Searching for:', e.target.value);
  }, 500)
);
