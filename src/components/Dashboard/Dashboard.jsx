import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../Title/Title";

const Dashboard = () => {

  useTitle("Dashboard")


  const [colorbtn, setcolorbtn] = useState(false);

  const handleCart = () => {
    setcolorbtn(true); 
  };

  const handleWishlist = () => {
    setcolorbtn(false); 
  };

  return (
    <Link to={"/Dashboard"}>
      <div>
        <div className="hero bg-[#9538E2] text-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">Dashboard</h1>
              <p className="py-6">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we have it
                all!
              </p>
              <div
                className="flex gap-4 items-center justify-center"
                
              >
                <button
                style={{
                    background: colorbtn ? "#ffff" : "#9538E2",
                    color:colorbtn ? "#9538E2" : "#ffff",
                    border:colorbtn? "none":"1px solid white"
                    
                  }}
                  onClick={handleCart}
                  className="btn btn-primary rounded-3xl bg-slate-100"

                >
                  Cart
                </button>
                <button
                style={{
                    background: colorbtn ? "#9538E2" : "#ffff",
                     color:colorbtn ? "#ffff" : "#9538E2",
                    border:colorbtn? "1px solid white":"none"
                    
                  }}
                  onClick={handleWishlist}
                  className="btn btn-primary rounded-3xl bg-slate-100"
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Dashboard;
