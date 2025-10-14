import { Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Page_404 } from "../Pages/Page_404";
import { Dummy } from "../Pages/Dummy";

export const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact/dummy' element={<Dummy />} />
            <Route path='/*' element={<Page_404 />} />
        </Routes>
    )
}
