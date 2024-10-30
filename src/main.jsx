import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, TodoApp} from './App.jsx'



import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ProductsPage from "./pages/products.jsx";
import "./styles/global.css"
import UserPage from "./pages/User.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index:true,
                element: <TodoApp/>

            },
            {
                path: "/users",
                element: <UserPage/>
            },
            {
                path: "/products",
                element: <ProductsPage/>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router} />
  </React.StrictMode>
)
