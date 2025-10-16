import './App.css';
import { Bread_Crumb } from './Components/Bread_Crumb';
import { Navbar } from './Components/Navbar';
import { Single_Page } from './Pages/Single_Page';
import { Allroutes } from './Routes/Allroutes';

function App() {
  return (
    <>
      <Navbar />
      <Bread_Crumb />
      <Allroutes />
    </>
  );
}

export default App;
