import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const CaseStudies2 = () => {
  const caseStudies = [
    {
      text: "For a local restaurant, we \n implemented a targeted PPC \n campaign that resulted in a 50% \n increase in website traffic and a \n 25% increase in sales.",
    },
    {
      text: "For a B2B software company, we \n developed an SEO strategy that \n resulted in a first page ranking \n for key keywords and a 200% \n increase in organic traffic.",
    },
    {
      text: "For a national retail chain, we \n created a social media \n marketing campaign that \n increased followers by 25% and \n generated a 20% increase in \n online sales.",
    },
  ];
  return (
    <div className="mt-16 rounded-3xl bg-secondary text-white px-3 py-4 lg:px-16 lg:py-8">
      <div className="flex overflow-x-auto lg:overflow-x-visible gap-4 pb-4">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 border-r-1 border-white last:border-r-0 px-6 py-4 min-w-[280px] lg:min-w-0 lg:flex-1"
          >
            <h2 className="text-sm whitespace-pre-line">{caseStudy.text}</h2>
            <div className="flex items-center text-primary gap-2">
              <p>Learn more</p>
              <GoArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies2;
