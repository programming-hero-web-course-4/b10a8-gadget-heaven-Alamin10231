import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getToWishList, removeToWishList } from "../About/AddToDb";
import { TiDeleteOutline } from 'react-icons/ti';
const WishList = () => {
  const [wishlist, setwishlist] = useState([]);
  const allwishlist = useLoaderData();

  useEffect(() => {
    const storedmywishlist = getToWishList();
    const filteredmywishlist = allwishlist.filter(w =>
      (storedmywishlist.includes (w.product_id)
    ));
    setwishlist(filteredmywishlist);
  }, [wishlist]);
const handleRemovewishlist = (product_id)=>{
   removeToWishList(product_id)
   setwishlist= allwishlist.filter(wishlistproduct=>wishlistproduct.product_id !== product_id)
setwishlist(setwishlist);
}
  return (
    <div>
      {
        wishlist.map((wlist)=>(
            <div
        key={wlist.product_id}
        className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white rounded-2xl"
      >
        <div className="md:w-1/5">
          <img
            className="w-48"
            src={`/images/${wlist.product_image.split("/").pop()}`}
            alt={`${wlist.product_image.split("/").pop()} image`}
          />
        </div>
        <div className="md:w-4/5 space-y-2 p-4 md:p-0">
          <div className="flex justify-between text-xl font-bold">
            {wlist.product_title}
            <TiDeleteOutline
              onClick={() => handleRemovewishlist(wlist.product_id)}
              className="text-red-400 text-3xl mr-16 cursor-pointer"
            />
          </div>
          <p className="text-sm text-[#09080F99]">{wlist.description}</p>
          <h4 className="font-bold">{`Price: $${wlist.price}`}</h4>
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default WishList;
