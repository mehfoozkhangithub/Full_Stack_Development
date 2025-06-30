function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    console.log('-> args:', args);
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Usage:
window.addEventListener(
  'scroll',
  throttle(function () {
    console.log('Scroll event at', new Date());
  }, 200)
);

// without throtling

// window.addEventListener('scroll', function () {
//   console.log("Scroll event at", new Date());
// });
