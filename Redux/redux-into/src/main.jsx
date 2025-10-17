import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// import { store } from './Redux/Store.js'

// console.log("i am at main.js", store.getState());

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
);
