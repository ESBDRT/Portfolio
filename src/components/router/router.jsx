import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from '../../pages/home/home.jsx';
import Error from "../../pages/error/error.jsx";

const router = createHashRouter([
  {
    path: '/portfolio',
    element: <Home/>
  },
  {
    path: '*',
    element: <Error/>
  }
]);

function HashRouter() {
  return (
    <RouterProvider router={router} />
  );
}

export default HashRouter;