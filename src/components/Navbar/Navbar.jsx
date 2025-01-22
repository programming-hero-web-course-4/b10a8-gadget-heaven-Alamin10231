import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const Navbar = () => {
  const location = useLocation();
  const gotohome =
    location.pathname === "/" || location.pathname.startsWith("/home");
  return (
    <div className="navbar bg-base-100 max-w-[80%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9538E2]"
                    : gotohome
                    ? "text-black"
                    : "text-black"
                }
              >
                Home
              </NavLink>
            
            
              <NavLink
                to={"/Dashboard"}
                className={({ isActive }) =>
                    isActive
                ? "text-[#9538E2]"
                : gotohome
                ? "text-black"
                : "text-black"
            }
              >
                Dashboard
              </NavLink>
            
            
          
              <NavLink
                to={"/Statistics"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9538E2]"
                    : gotohome
                    ? "text-black"
                    : "text-black"
                }
              >
                Statistics
              </NavLink>
            
             
              <NavLink
                to={"/AboutUs"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9538E2]"
                    : gotohome
                    ? "text-black"
                    : "text-black"
                }
              >
                About Us
              </NavLink>
            
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 text-[16px]">
               
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline underline-offset-1"
                    : gotohome
                    ? "text-black"
                    : "text-black"
                }
              >
                Home
              </NavLink>
            
            
              <NavLink
                to={"/Dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9538E2] underline underline-offset-1"
                    : gotohome
                    ? "text-white"
                    : "text-black"
                }
              >
                Dashboard
              </NavLink>
            
            
          
              <NavLink
                to={"/Statistics"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9538E2] underline underline-offset-1"
                    : gotohome
                    ? "text-white"
                    : "text-black"
                }
              >
                Statistics
              </NavLink>
           
              <NavLink
                to={"/AboutUs"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9538E2] underline underline-offset-1"
                    : gotohome
                    ? "text-white"
                    : "text-black"
                }
              >
                About Us
              </NavLink>
           


          </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1]">
          <IoCartOutline className="text-lg" />
        </div>
        <div className="flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1]">
          <CiHeart className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
