
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([
    { id: 1, text: "hello1", isPin: false },
    { id: 2, text: "hello2", isPin: false },
    { id: 3, text: "hello3", isPin: false },
    { id: 4, text: "hello4", isPin: false },
    { id: 5, text: "hello5", isPin: false },
    { id: 6, text: "hello6", isPin: false },
    { id: 7, text: "hello7", isPin: false },
  ]);

  const [pined, setPined] = useState([]);

  console.clear()

  const handelPind = (id) => {
    let unpindData = data.filter((el) => {
      return el.id != id;
    });
    let pindData = data.filter((el) => {
      return el.id == id;
    });

    setData(unpindData);
    setPined(prev => [...prev, ...pindData])
  }
  console.log('🚀 ~ data:', data);
  console.log('🚀 ~ pined:', pined);


  // const handleUnpined = (id) => {
  //   let unpindData = pined.filter((el) => {
  //     if (el.id !== id) {
  //       return el
  //     }
  //   })
  //   setPined(unpindData);
  // }


  return (
    <>
      <h1>pin item to top </h1>
      {
        pined.map((el) =>
          <div key={el.id} className="main_div">
            <input type="checkbox" />
            <p>{el.text}</p>
          </div>)
      }

      <h1>unpind</h1>
      {
        data?.map((el) => (
          <div key={el.id} className="main_div">
            <input type="checkbox" onClick={() => handelPind(el.id)} />
            <p>{el.text}</p>
          </div>
        ))
      }
    </>
  )
}

export default App


