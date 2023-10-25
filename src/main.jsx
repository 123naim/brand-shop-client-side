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
import BrandedProducts from './components/BrandedProducts';
import AddToCart from './pages/AddToCart';
import ProductDetails from './components/ProductDetails';
import ProductUpdate from './components/ProductUpdate';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
        path: "/brandProduct/:id",
        element: <BrandedProducts></BrandedProducts>,
        loader: () => fetch("https://brand-shop-server-side-2uhrds1nf-nayems-projects-c6ef106d.vercel.app/data")
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-side-2uhrds1nf-nayems-projects-c6ef106d.vercel.app/post/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)


