import { Notesfetch } from './Api/Notes.fetch';
import { SignUp } from './Pages/SignUp';
import { Sign_up_api } from './Api/Sign_up.api'


import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Pages/Navbar';

export const App = () => {

  return (
    <>
      <h1>api fetchthe data</h1>
      {/* <Notesfetch />
      <Sign_up_api /> */}
      <Navbar />
      <AllRoutes />
      {/* <SignUp /> */}
    </>
  );
}
