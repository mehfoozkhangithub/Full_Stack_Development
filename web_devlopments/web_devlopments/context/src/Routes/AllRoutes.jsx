import { Routes, Route } from 'react-router-dom';
import { Auth } from '../Components/Auth';
import { Show_Login } from '../Pages/show_Login';
import { Page_404 } from '../Pages/Page_404';
import { ApiCall } from '../Components/Api_Call';
import { PrivateRoute } from '../Auth/privateRoute';
import { SingleUserPage } from '../Pages/SingleUserPage';
import { ApiCall_different } from '../Components/ApiCall_different';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <ApiCall />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/show_login" element={<Show_Login />}></Route>
      <Route
        path="/user_2"
        element={
          <PrivateRoute>
            <ApiCall_different />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/user/:productID"
        element={
          <PrivateRoute>
            <SingleUserPage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<Page_404 />}></Route>
    </Routes>
  );
};
