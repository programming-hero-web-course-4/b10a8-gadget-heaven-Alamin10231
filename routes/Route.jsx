import React from 'react';
import ErrorPage from '../src/components/ErrorPage/ErrorPage';
import MainLayout from '../layout/MainLayout';
import Home from '../src/components/pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../src/components/pages/Dashboard';
import Statistics from '../src/components/pages/Statistics';
import AboutUs from '../src/components/pages/AboutUs';



const router = createBrowserRouter([
    {
        path: "/",  
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch("/GadgetData.json") ,
                    
            },
            {
                path:'/Dashboard',
                element:<Dashboard></Dashboard>,
                loader:() => fetch("/GadgetData.json")
                
            },{
                path:"/statistics",
                element:<Statistics></Statistics>,
                loader:()=>fetch("GadgetData.json")
                

            },
            {
                path:"/Aboutus",
                element: <AboutUs></AboutUs>,
                loader:()=>fetch("/teams.json")
                

            }


        ]
    },
]);

export default router;  // Export the router itself
