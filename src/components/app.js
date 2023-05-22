import React,{Suspense,lazy} from "react";
import ReactDOM from "react-dom/client";

import Header  from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';

const Error =lazy(()=>import('./Error'))

const About=lazy(()=>import("./About"));
const Contact=lazy(()=>import ('./Contact'))
import RestaurantMenu from './RestaurantMenu'
import { Provider } from "react-redux";
import store from "../utils/Store";
import Cart from "./Cart";


const App = () => {
  return (
    <Provider store={store} >
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
    errorElement:<Suspense><Error /></Suspense>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<Suspense><About/></Suspense>,
      },
      {
        path:"/Contact",
        element:<Suspense><Contact/></Suspense>,
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
