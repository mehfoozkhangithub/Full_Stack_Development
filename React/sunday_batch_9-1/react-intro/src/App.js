import './App.css';
import { Name } from "./Components/Name.jsx"

export function App() {


  const arr = ["mehfooz", 'vivek', 'niranjan', 'govind']


  // js
  let name = 'vivek mishra - 1 ';

  //  <--! html comments -->

  /* css comments */
  return (
    <>
      {/* html */}
      {/* jsx comment's */}
      <h1 className='vivek'>hello  {name}</h1>
      <h1 style={{ color: 'purple' }}>hello</h1>
      <Name />

      {
        arr.map((el) => (
          <div>
            <li>{el}</li>
          </div>
        ))
      }
    </>
  );
}
