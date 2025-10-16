import { Route, Routes } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Contact } from '../Pages/Contact';
import { Page_404 } from '../Pages/Page_404';
import { Single_Page } from '../Pages/Single_Page';
import { Info_Page } from '../Pages/Info_Page';

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/single_page" element={<Single_Page />} />
      <Route path="/single_page/:userID" element={<Info_Page />} />
      <Route path="/*" element={<Page_404 />} />
    </Routes>
  );
};
