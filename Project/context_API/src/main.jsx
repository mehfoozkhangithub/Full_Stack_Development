import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Context_Provider } from "./Context/Context_Provider.jsx"

createRoot(document.getElementById('root')).render(
  <Context_Provider>
    <App />
  </Context_Provider>,
)
