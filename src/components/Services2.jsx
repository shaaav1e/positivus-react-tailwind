import React from "react";
import icon from "/Icon.png";
import seo from "/seo.png";
import pay from "/pay.png";
import email from "/email.png";
import content from "/content.png";
import analytics from "/analytics.png";
import { GoArrowUpRight } from "react-icons/go";
const Services2 = () => {
  const services = [
    {
      id: 1,
      title: "Search engine\noptimization",
      bgColor: "bg-third",
      titleBgColor: "bg-primary",
      textColor: "text-secondary",
      learnMoreColor: "text-secondary",
      arrowBgColor: "bg-secondary",
      arrowTextColor: "text-primary",
      image: seo,
      imageAlt: "magnifier",
    },
    {
      id: 2,
      title: "Pay-per-click\nadvertising",
      bgColor: "bg-primary",
      titleBgColor: "bg-white",
      textColor: "text-secondary",
      learnMoreColor: "text-secondary",
      arrowBgColor: "bg-secondary",
      arrowTextColor: "text-primary",
      image: pay,
      imageAlt: "advertising",
    },
    {
      id: 3,
      title: "Social Media\nMarketing",
      bgColor: "bg-secondary",
      titleBgColor: "bg-white",
      textColor: "text-secondary",
      learnMoreColor: "text-white",
      arrowBgColor: "bg-white",
      arrowTextColor: "text-secondary",
      image: content,
      imageAlt: "social media",
    },
    {
      id: 4,
      title: "Email\nMarketing",
      bgColor: "bg-third",
      titleBgColor: "bg-primary",
      textColor: "text-secondary",
      learnMoreColor: "text-secondary",
      arrowBgColor: "bg-secondary",
      arrowTextColor: "text-primary",
      image: email,
      imageAlt: "email",
    },
    {
      id: 5,
      title: "Content\nCreation",
      bgColor: "bg-primary",
      titleBgColor: "bg-white",
      textColor: "text-secondary",
      learnMoreColor: "text-secondary",
      arrowBgColor: "bg-secondary",
      arrowTextColor: "text-primary",
      image: content,
      imageAlt: "content",
    },
    {
      id: 6,
      title: "Analytics\nand Tracking",
      bgColor: "bg-secondary",
      titleBgColor: "bg-primary",
      textColor: "text-secondary",
      learnMoreColor: "text-white",
      arrowBgColor: "bg-white",
      arrowTextColor: "text-secondary",
      image: analytics,
      imageAlt: "analytics",
    },
  ];
  return (
    <div className="container mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {" "}
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-row rounded-3xl gap-16 border border-black border-b-3 w-full px-16 py-8 pt-10 ${service.bgColor}`}
          >
            <div className="flex flex-col gap-16 flex-1">
              {" "}
              <div
                className={`font-semibold text-xl ${service.titleBgColor} ${service.textColor} w-fit px-2 py-1 rounded leading-tight inline-block`}
              >
                {service.title.split("\n").map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>{" "}
              <div className="flex flex-row items-center gap-4">
                {/* <img src={icon} alt="arrow up" /> */}{" "}
                <div className={`p-2 rounded-full ${service.arrowBgColor}`}>
                  <GoArrowUpRight
                    className={`w-6 h-6 ${service.arrowTextColor}`}
                  />
                </div>
                <p className={`text-xs ${service.learnMoreColor}`}>
                  Learn more
                </p>
              </div>
            </div>
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-32 h-fit self-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services2;
