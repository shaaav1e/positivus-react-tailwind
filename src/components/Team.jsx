import React from "react";

const Team = () => {
  return (
    <div className="container mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        <div className="bg-primary w-fit font-medium text-2xl text-black px-2 rounded-md ">
          Team
        </div>
        <div className="text-center lg:text-left">
          <p className="text-xs text-black">
            Meet the skilled and experienced team behind our{" "}
            <br className="hidden lg:block" /> successful digital marketing
            strategies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
