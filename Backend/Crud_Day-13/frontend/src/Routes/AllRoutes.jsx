import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { LogIn } from '../Pages/LogIn';
import { SignUp } from '../Pages/SignUp';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<LogIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
    )
}
