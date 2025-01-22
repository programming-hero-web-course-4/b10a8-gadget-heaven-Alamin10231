import React from 'react';
import Dashboard from '../src/components/pages/Dashboard';
import Navbar from '../src/components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../src/components/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
           
            <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default MainLayout;