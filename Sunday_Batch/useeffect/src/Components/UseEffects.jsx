import React from 'react';

export const UseEffects = () => {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  /* 

dependency_list

1 ->  without
2 -> with
3 -> empty

*/

  React.useEffect(() => {
    console.log(count, 'without-dependency');
  });
  React.useEffect(() => {
    console.log(count, 'with-dependency');
  }, [count]);
  React.useEffect(() => {
    console.log(count, 'empty-dependency');
  }, []);

  return (
    <div>
      <h1>effect understanding</h1>
      <span>count {count}</span> <span>count2 {count1}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <button onClick={() => setCount1((prev) => prev + 1)}>click 1</button>
    </div>
  );
};
