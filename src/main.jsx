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
// import Dell from './components/Dell';
// import Iphone from './components/Iphone';
// import Headphone from './components/Headphone';
// import Samsung from './components/Samsung';
// import Vivo from './components/Vivo';
import Rolex from './components/Rolex';
import AddToCart from './pages/AddToCart';
import RolexDetails from './components/RolexDetails';
import Update from './components/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/data")
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
      // {
      //   path: "/brandProduct/:id",
      //   element: <Dell></Dell>,
      //   loader: () => fetch('https://brand-shop-server-side-cnpkiy6o9-nayems-projects-c6ef106d.vercel.app/post')
      // },
      // {
      //   path: "/iphone",
      //   element: <Iphone></Iphone>,
      //   loader: () => fetch('https://brand-shop-server-side-cnpkiy6o9-nayems-projects-c6ef106d.vercel.app/post')
      // },
      // {
      //   path: "/grado",
      //   element: <Headphone></Headphone>,
      //   loader: () => fetch('https://brand-shop-server-side-cnpkiy6o9-nayems-projects-c6ef106d.vercel.app/post')
      // },
      // {
      //   path: "/samsung",
      //   element: <Samsung></Samsung>,
      //   loader: () => fetch('https://brand-shop-server-side-bqfs4za7q-nayems-projects-c6ef106d.vercel.app/post')
      // },
      // {
      //   path: "/vivo",
      //   element: <Vivo></Vivo>,
      //   loader: () => fetch('https://brand-shop-server-side-bqfs4za7q-nayems-projects-c6ef106d.vercel.app/post')
      // },
      {
        path: "/brandProduct/:id",
        element: <Rolex></Rolex>,
        loader: () => fetch("http://localhost:5000/data")
      },
      {
        path: "/details/:id",
        element: <RolexDetails></RolexDetails>,
        // loader: ({params}) => fetch(`http://localhost:5000/post/${params.id}`)
        // loader: () => fetch('https://brand-shop-server-side-bqfs4za7q-nayems-projects-c6ef106d.vercel.app/post')
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/post/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
