import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
  return (
    
<div className="border-2 border-gray-100 my-4 rounded-2xl max-w-[1540px]  mx-auto text-gray-200">
<div className="navbar  pb-[400px] bg-[#9538E2]  text-white max-w-[1500px] m-4 rounded-2xl ">
      <div className="navbar-start ">
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
            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Boi Poka</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex  gap-4">
          <li>
          <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/"> Statistics</NavLink>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4  ">
        <button className="btn rounded-3xl "><FaCartShopping /></button>
        <button className="btn rounded-3xl"><GiSelfLove /></button>
      </div>
    </div>
</div>

   
  );
};

export default Navbar;
