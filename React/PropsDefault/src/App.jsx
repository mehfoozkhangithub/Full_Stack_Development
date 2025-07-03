import './App.css';
import { Card } from './Components/Card';

export const App = () => {
  return (
    <>
      <h1>hello</h1>
      <Card name={'mehfooz'} age={25} email={'mehfoozkhan22@gmail.com'} />
      <Card name={'niranjan'} email={'niranjan33@gmail.com'} />
      <Card />
    </>
  );
};
