import React, { useState } from "react";
import black from "/vector-black.webp";
import green from "/vector-green.webp";
import mask from "/mask.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    checkboxes: { hi: false, quote: false },
  });

  const checkboxOptions = [
    { id: "hi", label: "Say Hi" },
    { id: "quote", label: "Get a Quote" },
  ];

  const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Name" },
    { id: "email", label: "Email*", type: "email", placeholder: "Email" },
    {
      id: "message",
      label: "Message*",
      type: "textarea",
      placeholder: "Message",
      rows: 6,
      required: true,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id) => {
    setFormData((prev) => ({
      ...prev,
      checkboxes: { ...prev.checkboxes, [id]: !prev.checkboxes[id] },
    }));
  };

  return (
    <div className="container">
      {/* Text Part */}
      <div className="mt-20 flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        <div className="bg-primary w-fit font-medium text-2xl text-black px-2 rounded-md">
          Contact Us
        </div>
        <div className="text-center lg:text-left">
          <p className="text-xs text-black ">
            Connect with Us: Let's Discuss Your
            <br className="hidden lg:block" /> Digital Marketing Needs
          </p>
        </div>
      </div>
      <div className="bg-third text-black rounded-3xl mt-10 px-4 py-8 lg:px-32 lg:py-12 relative">
        {" "}
        <div className="flex items-center justify-between lg:justify-start lg:gap-6 px-4 lg:px-0">
          {checkboxOptions.map((option) => (
            <div key={option.id} className="flex items-center gap-2">
              {" "}
              <input
                type="checkbox"
                id={option.id}
                checked={formData.checkboxes[option.id]}
                onChange={() => handleCheckboxChange(option.id)}
                className="w-4 h-4 flex-shrink-0 appearance-none bg-white border-black border-1 rounded-full focus:ring-primary focus:ring-2 cursor-pointer relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:opacity-0 checked:before:opacity-100 before:transition-opacity before:duration-200"
              />
              <label
                htmlFor={option.id}
                className="text-xs lg:text-sm cursor-pointer whitespace-nowrap"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>{" "}
        <form className="space-y-6 mt-6">
          {formFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium mb-2"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  className="w-full lg:w-[400px] px-4 py-3 bg-white text-black rounded-lg border-black border-1 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required={field.required}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="w-full lg:w-[400px] px-4 py-3 bg-white text-black rounded-lg border-black border-1 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              )}
            </div>
          ))}
        </form>
        <button className="hidden lg:block lg:w-[400px] mt-6 px-6 py-4 text-white bg-secondary text-xs rounded-xl">
          Send Message
        </button>
        <div className="hidden lg:block pointer-events-none absolute inset-0 overflow-hidden">
          <img src={black} alt="" className="absolute top-48 right-22 w-48" />
          <img src={green} alt="" className="absolute top-96 right-56" />
          <img src={mask} alt="" className="absolute top-2 -right-70 w-144 " />
        </div>
      </div>
      <button className="block lg:hidden w-full lg:w-[400px] mt-6 px-6 py-4 text-white bg-secondary text-xs rounded-xl">
        Send Message
      </button>
    </div>
  );
};

export default Contact;
