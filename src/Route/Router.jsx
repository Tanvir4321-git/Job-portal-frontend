import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Authentication/Signup';
import Login from '../Pages/Authentication/Login';
import Admin from '../Pages/Admin';
import PrivateRoute from '../Component/Layout/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'/admin',
                element:<PrivateRoute>
                    <Admin></Admin>
                </PrivateRoute>
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