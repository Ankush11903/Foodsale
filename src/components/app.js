import React from "react";
import ReactDOM from "react-dom/client";

import Header  from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Error from './Error'
import About from "./About";
import Contact from './Contact';
import RestaurantMenu from './RestaurantMenu'



const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/Restaurant/:id",
        element:<RestaurantMenu />,
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
