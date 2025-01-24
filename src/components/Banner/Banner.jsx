import React from "react";
import { NavLink } from "react-router-dom";
import bannerpic from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className="pt-1">
      <div className="w-[98%] max-w-[82%] mx-auto -mt-20 border-2 border-[#f1edf5] p-2 rounded-[32px]">
        <div className="hero bg-[#9538E2] rounded-[32px] pt-28 pb-36">
          <div className="hero-content text-center">
            <div className="w-4/5">
              <h1 className="text-4xl font-bold text-white">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="py-6 text-white">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <NavLink to={"/Dashboard"}>
                <button className="btn bg-white text-[#9538E2] rounded-3xl">
                  Shop Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] mx-auto -mt-36 rounded-2xl border-2 border-[#FFFFFF]">
        <div>
        {
                        <img className='rounded-3xl w-full h-[400px] object-fill p-3 ' src={bannerpic} alt="" />
                    }
        </div>
      </div>
    </div>
  );
};

export default Banner;
