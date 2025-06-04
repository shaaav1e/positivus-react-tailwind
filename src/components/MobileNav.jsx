import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const MobileNav = () => {
  return (
    <div className="block lg:hidden">
      <GiHamburgerMenu size={24} className="text-black" />
    </div>
  );
};

export default MobileNav;
