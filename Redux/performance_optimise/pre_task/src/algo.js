const memo = (func) => {
  const cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

const fibbo = memo((n) => {
  if (n <= 1) return n;
  return fibbo(n - 1) + fibbo(n - 2);
});

console.time('T1');
console.log(fibbo(45));
console.timeEnd('T1');

/* 

task 

rehamat->[Create a Login Flow Using Thunks, Create a Product Cart with Delayed Actions ]
arnav-> [ Build a Pagination System,Build an Upload Progress Tracker  ]

*/
