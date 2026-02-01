import './App.css';
import { Counter } from './Components/Counter';
import { ApiCallWithThunk } from './Components/ApiCallWithThunk';

function App() {
  return (
    <>
      <ApiCallWithThunk />
      <Counter />
    </>
  );
}

export default App;
