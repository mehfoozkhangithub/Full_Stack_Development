import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Components/Navbar';
import { BreadCrumbs } from './Components/breadCrumbs';

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Api Calling</h1>
      <Navbar />
      <BreadCrumbs />
      <AllRoutes />
    </>
  );
}

export default App;
