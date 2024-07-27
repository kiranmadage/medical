

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './view/Home/Home';
import Mstore from './view/MedicalShope/Mstore.js';
import Sign from './view/sign/sign.js';
import Login from './view/login/login.js';
import Add from './view/Create Invoice/Create_Invoice.js';
import Profile from './view/profile/profile.js';
import User from './view/user/user.js';
import Userdata from './view/userdata/userdata.js';
import About from './view/about/about.js';






const routes = createBrowserRouter(

  [

    // {
    //   path: '/home',
    //   element: <Home />
    // },

    {
      path: '/mstore',
      element: <Mstore />
    },

    {
      path: '/sign',
      element: <Sign />
    },
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/add',
      element: <Add />
    },
    
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path: '/user',
      element: <User />
    },
    {
      path: '/userdata',
      element: <Userdata />
    },
    {
      path: '/about',
      element: <About />
    },
  ]

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={routes} />

  </>
);

