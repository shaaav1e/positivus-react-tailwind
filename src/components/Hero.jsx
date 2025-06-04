import React from "react";
import hero from "/hero-img.png";

const Hero = () => {
  return (
    <div className="container mt-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-64">
      {/* Left Content - */}
      <div className="lg:w-1/2 flex flex-col gap-2">
        <h1 className=" text-5xl font-semibold leading-normal text-black mb-6">
          Navigating the <br /> digital landscape <br /> for success
        </h1>

        {/* Right Image - Hidden on desktop*/}
        <div className="lg:hidden">
          <img
            src={hero}
            alt="Digital marketing illustration"
            className="w-96 lg:w-120"
          />
        </div>

        {/* Text and button */}
        <div className="">
          <p className="text-black mb-8 leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg w-full lg:w-fit">
            Book a consultation
          </button>
        </div>
      </div>

      {/* Right Image - Natural order on desktop */}
      <div className="hidden lg:block lg:w-1/2 ">
        <img
          src={hero}
          alt="Digital marketing illustration"
          className="w-96 lg:w-120"
        />
      </div>
    </div>
  );
};

export default Hero;
