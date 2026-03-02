import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Layout/Navbar';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;