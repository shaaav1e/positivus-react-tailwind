import React from "react";
import proposal from "/proposal.png"; // Assuming you have a proposal image
const Proposal = () => {
  return (
    <div className="container mt-16">
      <div className="bg-third rounded-3xl px-3 py-4 lg:px-16 lg:py-8  flex gap-16 relative">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-secondary font-semibold text-lg">
              Let's make things happen
            </h1>
          </div>
          <div>
            <p className="text-secondary text-xs">
              Contact us today to learn more about how our digital <br />{" "}
              marketing services can help your business grow and <br /> succeed
              online.
            </p>
          </div>
          <div>
            <button className="px-6 py-4 text-white bg-secondary text-xs rounded-xl">
              Get your free proposal
            </button>
          </div>
        </div>
        <div className="hidden lg:block absolute right-4 lg:right-16 bottom-2 lg:top-0">
          <img src={proposal} alt="Rounded lines" className="w-72" />
        </div>
      </div>
    </div>
  );
};

export default Proposal;
