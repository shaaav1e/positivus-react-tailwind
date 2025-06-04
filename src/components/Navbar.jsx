import React from "react";
import logo from "/logo-1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
const Navbar = () => {
  const nav_links = [
    { name: "About us", href: "/" },
    { name: "Services", href: "/" },
    { name: "Use Cases", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Blog", href: "/" },
  ];
  return (
    <div className="container flex justify-between items-center mt-8 text-black">
      {/* Logo */}
      <div className="img">
        <img src={logo} alt="Logo" className="w-36" />
      </div>
      <MobileNav />
      <div className="hidden lg:flex items-center gap-36">
        {/* Mid part */}
        <ul className="hidden lg:flex items-center gap-8">
          {nav_links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
              {/* replace a with Link when using react-router-dom */}
            </li>
          ))}
        </ul>
        {/* Button */}
        <button className="hidden lg:block px-4 py-2.5 rounded-xl border border-black ">
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
