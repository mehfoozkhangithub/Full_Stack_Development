import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { LogIn } from '../Pages/LogIn';
import { SignUp } from '../Pages/SignUp';
import { Product } from '../Pages/Product';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<LogIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/product' element={<Product />}></Route>
        </Routes>
    )
}
