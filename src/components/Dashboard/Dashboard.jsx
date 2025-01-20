import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useTitle from "../Title/Title";

const Dashboard = () => {
  useTitle("Dashboard");

  const [activeTab, setActiveTab] = useState("cart");

  return (
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
            <div className="flex gap-4 items-center justify-center">
              <Link to="Dashboard/Cart">
                <button
                  style={{
                    background: activeTab === "cart" ? "#ffff" : "#9538E2",
                    color: activeTab === "cart" ? "#9538E2" : "#ffff",
                    border: activeTab === "cart" ? "none" : "1px solid white",
                  }}
                  onClick={() => setActiveTab("cart")}
                  className="btn btn-primary rounded-3xl"
                >
                  Cart
                </button>
              </Link>
              <Link to="wishlist">
                <button
                  style={{
                    background: activeTab === "wishlist" ? "#ffff" : "#9538E2",
                    color: activeTab === "wishlist" ? "#9538E2" : "#ffff",
                    border: activeTab === "wishlist" ? "none" : "1px solid white",
                  }}
                  onClick={() => setActiveTab("wishlist")}
                  className="btn btn-primary rounded-3xl"
                >
                  Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
