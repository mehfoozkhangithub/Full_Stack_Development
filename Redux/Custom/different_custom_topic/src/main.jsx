import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { myStores } from './App/Store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={myStores}>
    <App />
  </Provider>
);
