import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// import { store } from './Redux/Store.js'
import { Provider } from 'react-redux';
import { myStore } from './Redux/Store.js';

// console.log("i am at main.js", store.getState());

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={myStore}>
      <App />
    </Provider>
  </>
);
