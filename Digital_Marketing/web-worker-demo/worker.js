self.onmessage = function(e) {
  let n = e.data;
  function fib(num) {
    if (num <= 1) return 1;
    return fib(num-1) + fib(num-2);
  }
  postMessage(fib(n));
};
