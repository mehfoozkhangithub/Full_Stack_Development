import './App.css';
import { Card } from './Components/Card';

export const App = () => {

  const [data,setData]=useState("")

  return (
    <>
      <h1>hello</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Card name={'mehfooz'} age={25} email={'mehfoozkhan22@gmail.com'} />
        <Card name={'niranjan'} email={'niranjan33@gmail.com'} />
        <Card />
      </div>
    </>
  );
};
