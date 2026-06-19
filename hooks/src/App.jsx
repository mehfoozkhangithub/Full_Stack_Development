import { useFetch } from './Components/FetchHook';

export const App = () => {
  const value = useFetch('https://jsonplaceholder.typicode.com/todos');
  // const value_1 = useFetch('https://jsonplaceholder.typicode.com/comments');
  console.log(`🚀 ~ value:`, value);
  // console.log(`🚀 ~ value_1:`, value_1);
  return (
    <>
      <h1>hello</h1>
    </>
  );
};
