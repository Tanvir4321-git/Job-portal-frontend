import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Layout/Navbar';
import Footer from '../Component/Layout/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

                <Footer></Footer>
            
            </footer>
        </div>
    );
};

export default MainLayout;