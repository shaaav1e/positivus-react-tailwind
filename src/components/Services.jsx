import React from "react";

const Services = () => {
  return (
    <div className="container mt-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
      <div className="bg-primary w-fit font-medium text-2xl text-black px-2 rounded-md ">
        Services
      </div>
      <div className="text-center">
        <p className="text-xs text-black">
          At our digital marketing agency, we offer a range of services to{" "}
          <br className="hidden lg:block" /> help businesses grow and succeed{" "}
          online. These services include:
        </p>
      </div>
    </div>
  );
};

export default Services;
