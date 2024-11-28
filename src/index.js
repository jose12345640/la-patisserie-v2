import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Intro from './pages/introduction/intro';
import About from './pages/about/about';
import Categories from './pages/categories/categories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
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
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);