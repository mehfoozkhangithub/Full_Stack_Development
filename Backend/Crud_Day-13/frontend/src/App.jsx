import { Notesfetch } from './Api/Notes.fetch';
import { SignUp } from './Pages/SignUp';
import { Sign_up_api } from './Api/Sign_up.api'


import './App.css';

export const App = () => {

  return (
    <>
      <h1>api fetchthe data</h1>
      {/* <Notesfetch />
      <Sign_up_api /> */}
      <SignUp />
    </>
  );
}
