import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { myOwnStore } from './App/Store.js';

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={myOwnStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
