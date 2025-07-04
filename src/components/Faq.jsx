import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  const faqs = [
    {
      id: 1,
      title: "01",
      name: "Consultation",
      dropdown:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      title: "02",
      name: "Research and Strategy Development",
      dropdown:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 3,
      title: "03",
      name: "Implementation",
      dropdown:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 4,
      title: "04",
      name: "Monitoring and Optimization",
      dropdown:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 5,
      title: "05",
      name: "Reporting and Communication",
      dropdown:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 6,
      title: "06",
      name: "Continual Improvement",
      dropdown:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
  ];
  return (
    <div className="container mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        <div className="bg-primary w-fit font-medium text-2xl text-black px-2 rounded-md ">
          Our Working Process
        </div>
        <div className="text-center lg:text-left">
          <p className="text-xs text-black">
            Step-by-Step Guide to Achieving <br className="hidden lg:block" />
            Your Business Goals
          </p>
        </div>
      </div>
      <div className="mt-10">
        {" "}
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`mt-6 rounded-full lg:rounded-3xl border border-black border-b-3 w-full px-12 py-6 lg:px-16 lg:py-8 pt-10 ${
              openFaq === faq.id ? "py-16 lg:py-6 bg-primary" : "bg-third"
            }`}
          >
            {" "}
            <div className="flex justify-between items-center gap-3 lg:gap-6">
              <div className="flex items-center gap-3 lg:gap-6 flex-1 min-w-0">
                <h1 className="font-bold text-2xl lg:text-4xl text-secondary flex-shrink-0">
                  {faq.title}
                </h1>
                <p className="text-sm lg:text-lg font-semibold text-secondary">
                  {faq.name}
                </p>
              </div>
              <button
                onClick={() => toggleFaq(faq.id)}
                className="bg-white rounded-full px-4 py-4 border-1 border-secondary flex-shrink-0"
              >
                {openFaq === faq.id ? (
                  <TiMinus size={20} />
                ) : (
                  <FaPlus size={20} />
                )}
              </button>
            </div>
            {openFaq === faq.id && (
              <div className="mt-6 pt-6 border-t border-secondary">
                <p className="text-secondary text-sm">{faq.dropdown}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
