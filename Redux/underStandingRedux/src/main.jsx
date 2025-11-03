<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
=======
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { ownStore } from './Reducer/Store.js';
console.log('🚀 ~ ownStore:', ownStore);

createRoot(document.getElementById('root')).render(<App />);
>>>>>>> 75229686c5d827b03fbeb6ce118a50d109be3cf4
