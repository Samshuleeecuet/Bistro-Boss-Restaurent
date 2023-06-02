import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path :'/contact',
          element: <Contact/>
        },
        {
          path: '/ourmenu',
          element: <OurMenu/>
        },
        {
          path: '/ourshop',
          element: <OurShop/>,
        }
      ]
    },
  ]);


  export default router;