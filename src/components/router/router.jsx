import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from '../../pages/home/home.jsx'
import Error from "../../pages/error/error.jsx";

const router = createBrowserRouter([
    {
      path: '/portfolio',
      element: <Home/>
    },
    {
      path: '*',
      element: <Error/>
    }
  ]
);

  function BrowserRouter() {
    return (
      <RouterProvider router={router}/>
    );
  }

  export default BrowserRouter;