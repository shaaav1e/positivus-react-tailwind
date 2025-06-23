import React from "react";
import Swiperr from "./Swiperr";

const Testimonials = () => {
  return (
    <div className="container">
      <div className="mt-20 flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        <div className="bg-primary w-fit font-medium text-2xl text-black px-2 rounded-md ">
          Testimonials
        </div>
        <div className="text-center lg:text-left">
          <p className="text-xs text-black ">
            Hear from Our Satisfied Clients: Read Our Testimonials{" "}
            <br className="hidden lg:block" /> to Learn More about Our Digital
            Marketing Services
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Swiperr />
      </div>
    </div>
  );
};

export default Testimonials;
