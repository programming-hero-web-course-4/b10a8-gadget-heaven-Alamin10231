import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;
  return (
    <>
      <div className="card  max-w-md mx-auto shadow-xl  rounded-3xl border-2 border-[#FFFFFF]">
        <figure>
          <img
            className="w-[400px] h-[350px] object-contain"
            src={product_image}
            alt="Product"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className="font-semibold text-gray-500">Price: {price}</p>
          <div className="card-actions justify-start">
            <Link to={`Product/${product_id}`}>
              <button
                className="btn border-1 border-[#9538E2] rounded-3xl text-[#9538E2] bg-white hover:bg-[#9538E2] hover:text-white px-7"
                onClick={() => {
                  const navbar = document.querySelector(".navbar");
                  if (navbar) {
                    navbar.style.paddingBottom = "15px";
                    navbar.style.background = "white";
                  }
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
