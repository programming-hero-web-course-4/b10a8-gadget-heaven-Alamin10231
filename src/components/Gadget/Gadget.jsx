import React from "react";
import { NavLink } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_title, price, product_image } = gadget;

  return (
    <div
      className="border shadow-md p-4 rounded-2xl mx-auto w-full 
                 max-w-xs sm:max-w-sm md:max-w-md 
                 transition-transform duration-300 hover:scale-105 bg-white"
    >
      {/* Image */}
      <div className="w-full h-60 sm:h-72 overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={`/images/${product_image.split("/").pop()}`}
          alt={product_title}
        />
      </div>

      {/* Content */}
      <div className="mt-4 px-1 text-center sm:text-left">
        <h1 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[56px]">
          {product_title}
        </h1>

        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-base font-semibold text-gray-700">${price}</p>

          <NavLink
            to={`/product/${product_id}`}
            className="btn btn-outline border-[#9538E2] text-[#9538E2] 
                       hover:bg-[#9538E2] hover:text-white 
                       hover:border-transparent rounded-full px-6 py-2 w-full sm:w-auto"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
