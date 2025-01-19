import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
  
  const [isTransparent, setIsTransparent] = useState(false);

  const handleHomeClick = () => {
    setIsTransparent(false);
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.style.paddingBottom = "400px";
      navbar.style.background = "#9538E2";
    }
   
   
  };

  const handleStatisticsClick = () => {
    setIsTransparent(true);
    
  };

  const handleDashboardClick = () => {
    setIsTransparent(true);
   
  };

  return (
    <>
    <div className="border-2 border-gray-100  rounded-2xl max-w-[1540px] mx-auto font-semibold">
      <div
        className="navbar text-black max-w-[1500px] m-4 rounded-2xl pb-[400px]"
        style={{
          background: isTransparent ? "Transparent" : "#9538E2",
          paddingBottom: isTransparent ? "15px" : "400px",
          transition: "0.3s",
        }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              className={`menu menu-sm dropdown-content bg-[#9538E2] mt-3 w-52 p-2`}
            >
              <li>
                <NavLink to="/" >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Statistics" onClick={handleStatisticsClick}>
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard" onClick={handleDashboardClick}>
                  Dashboard
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/About" >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  flex gap-4 text-lg">
            <li>
              <NavLink to="/" onClick={handleHomeClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Statistics" onClick={handleStatisticsClick}>
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to="/Dashboard" onClick={handleDashboardClick}>
                Dashboard
              </NavLink>

            
            </li>
            <li>
              <NavLink to="/About">About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn rounded-3xl">
            <FaCartShopping />
          </button>
          <button className="btn rounded-3xl">
            <GiSelfLove />
          </button>
        </div>
      </div>
    </div>
   
  </>
  
  );


  
};




export default Navbar;
