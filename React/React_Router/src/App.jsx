import './App.css'

import { BreadCrumbs } from "./Pages/breadCrumbs"
import { Navbar } from "./Pages/Navbar"
import { AllRoutes } from "./Routes/AllRoutes"


function App() {

  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <AllRoutes />
    </>
  )
}

export default App
