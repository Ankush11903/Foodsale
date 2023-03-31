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
import { Provider } from "react-redux";
import store from "../utils/Store";
import Cart from "./Cart";


const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
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
      },
      {
        path:"/cart",
        element:<Cart />,
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
