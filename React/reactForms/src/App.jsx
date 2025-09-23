import './App.css';
// import { Message } from './App/Message';
// import { Dummy } from './Components/Dummy';
import { Form } from './Components/Form';

function App() {
  // const user = {
  //   firstName: "Peter",
  //   lastName: "Petrov"
  // };
  return (
    <>
      <Form />
      {/* <div className="App">
        <h1>custom props validation...</h1>
        <Message msg="bhai bhai bhai....">
          <h2>World</h2>
          <h3>on Fire!</h3>
        </Message>
        <hr />
        <Message />
        <hr />
        <Message {...user} />
      </div> */}
      {/* <Dummy /> */}
    </>
  );
}

export default App;
