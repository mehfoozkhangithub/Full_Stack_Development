import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { ownStore } from './Reducer/Store.js';
console.log('🚀 ~ ownStore:', ownStore);

createRoot(document.getElementById('root')).render(<App />);
