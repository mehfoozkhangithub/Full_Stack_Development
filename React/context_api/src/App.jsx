import { useContext } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import { CounterContext } from "./Context/CounterContext";
import { Item } from "./Components/Item";

function App() {
  const counterState = useContext(CounterContext);
  console.log(counterState);

  return (
    <>
      <div>
        {/* this is context for understanding demo of counter app */}
        {/* <h2>count is {counterState.count}</h2>
        <Counter />
        <Counter />
        <Counter />
        <Counter /> */}

        {/* here we have the cart example for flow of context api */}

        <Item name="macbook" price={150000} />
        <Item name="earphone" price={5000} />
        <Item name="mobile" price={50000} />
      </div>
    </>
  );
}

export default App;
