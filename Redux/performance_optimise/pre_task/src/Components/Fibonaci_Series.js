const memo = (func) => {
  const cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

const Fibbo = memo((n) => {
  if (n <= 1) {
    return;
  }

  return Fibbo(n - 1) + Fibbo(n - 2);
});

console.time('T1');
console.log(Fibbo(45));
console.timeEnd('T1');
