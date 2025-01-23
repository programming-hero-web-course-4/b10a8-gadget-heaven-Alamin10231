import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import { addToCart, addToWishList } from "../About/AddToDb";

const ProductDetails = () => {
  const [isAddedToWishList, setIsAddedToWishList] = useState(false);

  const handleToast = () => {
    addToCart(id);
  };

  const addToWishlist = () => {
    addToWishList(id);
    setIsAddedToWishList(true);
  };

  const { product_id, product_id: id } = useParams();
  const data = useLoaderData();
  const productitem = data.find((p) => p.product_id === product_id);

  const { product_image, product_title, price, specification, rating } = productitem;

  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-[#9538E2] text-white w-full pb-12">
        <div className="hero-content text-center max-w-screen-lg mx-auto px-4">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold">Product Details</h1>
            <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="hero bg-transparent relative top-[-70px] px-4">
        <div className="hero-content flex flex-wrap lg:flex-nowrap items-center border-2 border-gray-100 rounded-lg bg-white shadow-lg p-6 lg:p-12">
          {/* Image Section */}
          <img
            src={product_image}
            alt={product_title}
            className="w-full md:w-1/2 lg:w-2/5 rounded-lg h-auto object-cover mb-6 lg:mb-0"
          />

          {/* Details Section */}
          <div className="w-full lg:w-3/5 lg:ml-12 space-y-4">
            <h1 className="text-2xl lg:text-3xl font-bold">{product_title}</h1>
            <p className="font-bold text-lg">Price: ${price}</p>
            <button className="btn border border-green-400 bg-green-100 rounded-3xl hover:bg-black hover:text-white px-6 py-2 text-sm lg:text-base">
              In Stock
            </button>
            <p className="text-sm lg:text-base">{specification}</p>

            {/* Rating */}
            <ReactStars
              count={5}
              size={24}
              value={rating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="text-sm lg:text-base">Rating: {rating}</p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button
                className="btn bg-[#9538E2] text-white rounded-3xl hover:bg-black hover:text-white px-6 py-2 text-sm lg:text-base flex items-center gap-2"
                onClick={() => handleToast(id)}
              >
                Add to Cart <FaCartShopping />
              </button>
              <button
                className={`btn rounded-3xl px-6 py-2 text-sm lg:text-base flex items-center gap-2 ${isAddedToWishList ? "bg-pink-200 text-white" : "bg-gray-200 hover:bg-pink-500"}`}
                onClick={() => addToWishlist(id)}
              >
                <GiSelfLove /> Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
