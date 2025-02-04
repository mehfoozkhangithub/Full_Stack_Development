
import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from '../Components/HomePage'
import { About } from '../Components/About'
import { Contact } from '../Components/Contact'
import { Login } from '../Components/Login'
import { SinglePage } from '../Pages/singlePage'


export const AllRoutes = () => {
    return <>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='contact/:id' element={<SinglePage />}></Route>
        </Routes>
    </>
}