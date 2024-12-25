import React from "react";
import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold font-serif">
            FOOD<span className="text-primary">EAT</span>
          </p>
        </div>
        {/* Menu section */}
        <div className="flex justify-center items-center gap-10">
          <ul className="gap-8 hidden sm:flex">
            <li className="hover:border-b-2 font-semibold border-primary uppercase">HOME</li>
            <li className="hover:border-b-2 font-semibold border-primary uppercase">MENU</li>
            <li className="hover:border-b-2 font-semibold border-primary uppercase">ABOUT</li>
          </ul>
          {/* login section */}
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="" className="w-10 rounded-full " />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
