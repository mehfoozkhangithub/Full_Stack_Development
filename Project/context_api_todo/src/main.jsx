
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { ContexProviders } from "./context/Context_Provider.jsx"
import { Reducer_Todo } from './components/Reducer_Todo.jsx'

createRoot(document.getElementById('root')).render(
  <ContexProviders>
    {/* <App /> */}
    <Reducer_Todo />
  </ContexProviders>,
)
