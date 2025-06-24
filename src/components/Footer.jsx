import React from "react";
import logo from "/logo-white.png";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  const links = [
    {
      name: "About us",
    },
    {
      name: "Services",
    },
    {
      name: "Use Cases",
    },
    {
      name: "Pricing",
    },
    {
      name: "Blog",
    },
  ];
  return (
    <div className="mt-20 container">
      <div className="bg-secondary rounded-t-3xl px-6 py-8 lg:px-16 lg:py-8">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="w-32" />
          </div>{" "}
          {/* Navigation Links */}
          <div className="flex flex-col gap-3 text-center mb-8 mt-8">
            {links.map((link) => (
              <a key={link.name} href="#" className="text-white text-lg">
                {link.name}
              </a>
            ))}
          </div>
          {/* Contact Us Section */}
          <div className="mb-8 mt-8">
            <div className="flex justify-center mb-4">
              <p className="bg-primary w-fit font-medium text-lg text-black px-2 py-1 rounded-md">
                Contact us
              </p>
            </div>
            <div className="text-center text-white space-y-2">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          {/* Newsletter Subscription */}
          <div className="bg-dark px-6 py-8 rounded-2xl mb-8">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full text-lg rounded-xl border border-white bg-transparent px-4 py-3 text-white placeholder-white"
              />
              <button className="w-full rounded-xl text-lg bg-primary text-black px-4 py-3 font-medium">
                Subscribe to news
              </button>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <CiLinkedin className="text-white" size={32} />
            <FaFacebook className="text-white" size={32} />
          </div>
          {/* Footer Bottom */}
          <div className="border-t border-white pt-6">
            <div className="text-center text-white space-y-3">
              <div className="flex items-center justify-center gap-2">
                <FaRegCopyright size={16} />
                <p className="text-sm">2023 Positivus. All Rights Reserved.</p>
              </div>
              <p className="text-sm underline">Privacy Policy</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="Logo" className="w-42" />
            </div>
            <div className="flex gap-6 text-lg underline">
              {links.map((link) => (
                <a key={link.name} href="#" className="text-white ">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <CiLinkedin className="text-white" size={36} />
              <FaFacebook className="text-white" size={36} />
            </div>
          </div>

          <div className="flex justify-between mt-16">
            <div className="flex flex-col justify-between text-white text-lg h-[200px]">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="bg-primary w-fit font-medium text-2xl text-black px-2 rounded-md">
                    Contact Us:
                  </p>
                </div>
                <div>
                  <p>Email: info@positivus.com</p>
                </div>
                <div>Phone: 555-567-8901</div>
              </div>
              <div>
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>
            <div className="bg-dark px-8 py-16 rounded-2xl h-[200px] flex items-center">
              <div className="flex gap-6">
                <button className="w-[300px] text-lg text-left rounded-xl border border-white px-6 py-5 text-white">
                  Email
                </button>
                <button className="rounded-xl text-lg bg-primary text-black px-6 py-5">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>

          <div className="border-b border-white mt-12"></div>
          <div className="flex mt-12 text-white text-lg gap-16">
            <div className="flex items-center gap-2">
              <FaRegCopyright />
              <p>2023 Positivus. All rights reserved.</p>
            </div>
            <div>
              <p className="underline">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
