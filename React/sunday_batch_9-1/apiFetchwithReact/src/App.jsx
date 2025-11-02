import './App.css';
import axios from 'axios';

function App() {
  const api = `https://jsonplaceholder.typicode.com/users`;

  /*   const apiCall = () => {
    axios
      .get(api)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }; */

  const apiCall = async () => {
    try {
      let res = await axios.get(api);
      let data = await res.data;
      console.log('-> res:', data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1> api Call </h1>
      <button onClick={apiCall}>click</button>
    </>
  );
}

export default App;
