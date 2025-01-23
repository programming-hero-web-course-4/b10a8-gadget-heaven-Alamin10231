import React from 'react';
import UseTitle from '../UseTitle';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    UseTitle("Dashboard |")
    return (
        <div>
           
            <div className="text-center bg-[#9538E2] text-white min-h-[280px] px-4 sm:px-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl py-4">Dashboard</h1>
                <p className="pt-4 pb-8 text-sm sm:text-base md:text-lg">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-5">
                   
                    <NavLink
                        to={"/Dashboard/Cart"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-white text-[#9538E2] hover:bg-gray-100 px-6 py-2 sm:px-7 sm:py-3 rounded-3xl font-bold text-sm sm:text-lg"
                                : "bg-[#9538E2] text-white hover:bg-black px-6 py-2 sm:px-7 sm:py-3 rounded-3xl font-bold text-sm sm:text-lg btn-outline border border-white"
                        }
                    >
                        <button>Cart</button>
                    </NavLink>

                
                    <NavLink
                        to={"/Dashboard/WishList"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-white text-[#9538E2] hover:bg-gray-100 px-6 py-2 sm:px-7 sm:py-3 rounded-3xl font-bold text-sm sm:text-lg"
                                : "bg-[#9538E2] text-white hover:bg-black px-6 py-2 sm:px-7 sm:py-3 rounded-3xl font-bold text-sm sm:text-lg btn-outline border border-white"
                        }
                    >
                        <button>WishList</button>
                    </NavLink>
                </div>
            </div>

          
            <Outlet />
        </div>
    );
};

export default Dashboard;
