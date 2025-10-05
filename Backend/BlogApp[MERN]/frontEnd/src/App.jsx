

// import { useEffect } from "react";
import { Blog_Read } from "./Api/Blog_Read"
import { Login } from "./Pages/Login";

export const App = () => {

  // useEffect(() => {

  //   const fetchData = async () => {
  //     let final = await Blog_Read(`http://localhost:3000`)
  //     console.log('🚀 ~ final:', final);
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <h1>App</h1>
      <Login />
    </>
  )
}
