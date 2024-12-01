import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Intro from './pages/introduction/intro';
import About from './pages/about/about';
import Categories from './pages/categories/categories';
import Login from './pages/login/login';
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import Register from "./pages/register/register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Intro/>
            },
            {
                path: "/sobre",
                element: <About/>
            },
            {
                path: "/categorias",
                element: <Categories/>
            },
            {
                path: "/produto",
                element: <Product/>
            },
            {
                path: "/carrinho",
                element: <Cart/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/cadastro",
                element: <Register/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);