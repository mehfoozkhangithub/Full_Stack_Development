import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { myStore } from './Store/Store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
  </Provider>
);
