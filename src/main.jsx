import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import AuthProvider from './Provider/AuthProvider';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import PrivateRoute from './Routes/Routes';
import Dell from './components/Dell';
import Iphone from './components/Iphone';
import Headphone from './components/Headphone';
import Samsung from './components/Samsung';
import Vivo from './components/Vivo';
import Rolex from './components/Rolex';
import AddToCart from './pages/AddToCart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/addtocart",
        element: <PrivateRoute><AddToCart></AddToCart></PrivateRoute>
      },
      {
        path: "/signUp",
        element: <Registration></Registration>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/dell",
        element: <Dell></Dell>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path: "/iphone",
        element: <Iphone></Iphone>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path: "/grado",
        element: <Headphone></Headphone>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path: "/vivo",
        element: <Vivo></Vivo>,
        loader: () => fetch('http://localhost:5000/post')
      },
      {
        path: "/rolex",
        element: <Rolex></Rolex>,
        loader: () => fetch('http://localhost:5000/post')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
