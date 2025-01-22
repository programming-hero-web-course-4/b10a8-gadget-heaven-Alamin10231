import React from "react";
import UseTitle from "../UseTitle";
import { useLoaderData } from "react-router-dom";

const AboutUs = () => {
  UseTitle("About ");
  const allTeam = useLoaderData();

  return (
    <div>
      <div className="hero max-h-[200px] bg-[#9538E2]">
        <div className="hero-content text-center text-white">
        <div className=' mb-10'>
                <h2 className='text-2xl font-bold text-white pt-8 text-center'>Meet Our Beautiful Teams</h2>
                <p className='w-11/12 md:w-1/2 mx-auto text-sm font-light text-white mt-2 text-center pb-10'>
                    At Gadget Heaven, we believe in the power of innovation. Our mission is to provide cutting-edge gadgets that enhance everyday life. We hire passionate individuals and equip them with the tools and support they need to excel. Together, we strive to deliver exceptional products and an unparalleled shopping experience for our customers.
                </p>
            </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:max-w-[1000px] lg:max-w-[1200px] mx-auto mt-20 items-center justify-center">
        {allTeam.map((team) => (
          <div key={team.index} className="">
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img className="rounded-lg" src={team.picture} alt={team.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Title: {team.name}</h2>
                <p>Profession: {team.profession}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Testimonial Section */}
      <div className="mt-15 bg-white rounded-md w-[96] mx-auto p-6 -mb-10">
        <h3 className="text-lg font-bold text-center mt-2">
          We've been blown away by the support from Untitled. We suggested an
          improvement to our account manager, and they implemented it in just a
          few days!
        </h3>
        <div className="mt-6">
          <div className="avatar flex justify-center">
            <div className="w-12 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Amélie Laurent"
              />
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <h4 className="font-medium text-center">Amélie Laurent</h4>
            <p className="text-sm text-center">CTO, Beyond Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
