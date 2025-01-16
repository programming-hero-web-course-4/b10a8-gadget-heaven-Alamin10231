import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero absolute top-32 text-white px-4 sm:px-6 lg:px-8">
  <div className="hero-content text-center max-w-4xl mx-auto ">
    <div>
      
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      
      <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
     
      <button className="btn bg-white rounded-3xl ">Shop Now</button>
    </div>
  </div>
</div>


      <div class="w-3/5 2xl:w-1/2 mx-auto -mt-28 rounded-3xl border-2 border-[#FFFFFF]">
        <div>
          <img
            class="rounded-3xl w-full h-[400px] object-fill p-3 "
            src="/assets/banner.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
