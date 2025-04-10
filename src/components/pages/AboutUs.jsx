import React from "react";
import UseTitle from "../UseTitle";
import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
  UseTitle("About ");
  const allTeam = useLoaderData();

  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-[200px] bg-[#9538E2]">
        <div className="hero-content text-center text-white flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold pt-8">Meet Our Beautiful Teams</h2>
          <p className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto text-sm md:text-base font-light mt-4 pb-10">
            At Gadget Heaven, we believe in the power of innovation. Our mission is to provide cutting-edge gadgets that enhance everyday life. We hire passionate individuals and equip them with the tools and support they need to excel. Together, we strive to deliver exceptional products and an unparalleled shopping experience for our customers.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-0 md:max-w-[1000px] lg:max-w-[1200px] mx-auto mt-20">
        {allTeam.map((team, index) => (
          <div key={index} className="w-full flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-xl">
              <figure className="px-6 pt-6">
                <img
                  className="rounded-lg w-full h-[250px] object-cover"
                  src={team.picture}
                  alt={`${team.name}'s image`}
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title">Name: {team.name}</h2>
                <p>Profession: {team.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="bg-white rounded-md max-w-3xl mx-auto p-6 mt-20 mb-10 text-center shadow">
        <h3 className="text-base md:text-lg font-bold">
          "We've been blown away by the support from Untitled. We suggested an
          improvement to our account manager, and they implemented it in just a
          few days!"
        </h3>
        <div className="mt-6 flex flex-col items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Amélie Laurent"
              />
            </div>
          </div>
          <div className="mt-2">
            <h4 className="font-medium">Amélie Laurent</h4>
            <p className="text-sm">CTO, Beyond Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
