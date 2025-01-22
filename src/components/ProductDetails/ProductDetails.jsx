import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import { addToCart, addToWishList } from "../About/AddToDb";


const ProductDetails = () => {

const [isAddedToWishList,setisAddedToWishList]= useState(false)

const handletoast=()=>{
 addToCart(id);
 
}
const addToWishlist=()=>{
addToWishList(id)
setisAddedToWishList(true)
}


  const { product_id ,product_id:id } = useParams();

  const data = useLoaderData();
  const productitem = data.find((p) => p.product_id === product_id);
  console.log(productitem, data, product_id);

  const { product_image, product_title, price, specification, rating } =
    productitem;
  return (
    <div className="">
      <div className="hero  bg-[#9538E2] text-white w-full pb-[100px] ">
        <div className="hero-content text-center ">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold">Product Details</h1>
            <p className=" text-warp py-4 sm:py-6 text-sm sm:text-base lg:text-md">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-transparent  relative top-[-70px] ">
        <div className="hero-content  flex-col lg:flex-row border-2 border-gray-100 rounded-lg 
        min-w-[1200px] min-h-[700px] bg-white justify-between">
          <img
            src={product_image}
            className="md:max-w-[50%] rounded-lg md:h-[400px] object-fill ml-20 "
          />
          <div className="md:max-w-[500%] object-fill mr-40">
            <h1 className="text-3xl font-bold">{product_title}</h1>
            <p className="py-4 font-bold text-lg">Price:${price}</p>
            <button className="btn border-1 border-green-400 bg-green-100  rounded-3xl hover:bg-black hover:text-white px-6 text-[16px]">
              In Stock{" "}
            </button>
            <p className="py-4">{specification}</p>
            <ReactStars
  count={5}
  size={24}
  value={rating}
  edit={false} 
  activeColor="#ffd700"
/>
            ,<p className="py-4">{rating}</p>
            <button className="btn  bg-[#9538E2] text-white rounded-3xl hover:bg-black hover:text-white px-6 text-[16px] items-center "
            onClick={()=>handletoast(id)}
            
            >

              Add to card{" "}
              <span>
                <FaCartShopping />
              </span>
            </button>
            <button className="btn rounded-3xl ml-4"
            onClick={()=>addToWishlist(id)}
            >
              <GiSelfLove />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
