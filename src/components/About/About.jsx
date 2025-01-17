import React from "react";

const About = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 max-w-[1200px] mx-auto">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="../../assets/beard-busy-bearded-business-background.jpg"
            alt="np pic"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">John Doe</h2>
          <p className=" text-xl">Frontend Developer</p>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="../../assets/man-work.jpg" alt="np pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Jane Smith</h2>
          <p className=" text-xl">UI/UX Designer</p>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="../../assets/person-working-animation-porject.jpg"
            alt="np pic"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Michael Brown</h2>
          <p className=" text-xl">Backend Developer</p>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="../../assets/male-graphic-designer-smiling-while-working.jpg"
            alt="np pic"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Emily Davis</h2>
          <p className=" text-xl">Full Stack Developer</p>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="../../assets/caucasian-young-man-sitting-front-laptop-looking-camera.jpg"
            alt="np pic"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">William Johnson</h2>
          <p className=" text-xl">Web Designer</p>
        </div>
      </div>

      
    </div>
    <div className="text-center container mx-auto shadow-lg py-10">
    <h1 className="font-bold text-lg">
      We've been blown away by the support from Untitled. We suggested an
      improvement to our account manager and they implemented it a few days!
    </h1>
    <img
      className="w-10 h-10 my-4   rounded-full flex mx-auto"
      src="../../assets/man-work.jpg"
      alt=""
    />
    <p>Amélie Laurent</p>
    <p>CTO, Beyond Systems</p>
  </div>
  </>
  );
};

export default About;
