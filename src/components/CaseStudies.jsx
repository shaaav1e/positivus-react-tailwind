import React from "react";
import CaseStudies2 from "./CaseStudies2";
const CaseStudies = () => {
  return (
    <div className="container mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        <div className="bg-primary w-fit font-medium text-2xl text-black px-2 rounded-md ">
          Case Studies
        </div>
        <div className="text-center lg:text-left">
          <p className="text-xs text-black">
            Explore Real-Life Examples of Our Proven Digital Marketing{" "}
            <br className="hidden lg:block"></br> Success through Our Case
            Studies
          </p>
        </div>
      </div>
      <CaseStudies2 />
    </div>
  );
};

export default CaseStudies;
