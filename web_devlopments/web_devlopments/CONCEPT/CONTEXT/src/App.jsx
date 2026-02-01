import './App.css';
import { Counter } from './components/Counter';
import { Dummy } from './components/Dummy';

function App() {
  return (
    <>
      <h1>Parent</h1>
      <Counter />
      <Dummy />
    </>
  );
}

export default App;
