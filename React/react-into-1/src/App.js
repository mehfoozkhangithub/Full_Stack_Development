import './App.css';



function App() {

  let count = null;

  const handleIncre = () => {
    count += 1
    console.log(count);
  }
  const handleDecre = () => {
    count -= 1
    console.log(count);
  }


  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={handleIncre}>+</button>
      <button onClick={handleDecre}>-</button>
    </>
  );
}

export default App;
