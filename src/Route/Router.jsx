import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Authentication/Signup';
import Login from '../Pages/Authentication/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {
                index:true,
                Component: Home
            }
        ]
    },
    {
           path:'/signup',
           Component: SignUp
    },
    {
           path:'/login',
           Component: Login
    }

])