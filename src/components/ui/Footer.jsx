import React from "react";
import FooterApi from "../api/footerApi.json";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Footer() {
  const dynamicIcon = {
    FaLocationDot: <FaLocationDot />,
    MdOutlineAddIcCall: <MdOutlineAddIcCall />,
    IoMail: <IoMail />,
  };
  return (
    <footer className="bg-[#111827] text-white py-6 px-4 md:px-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
        {FooterApi.map((data, index) => {
          const { icon, title, detail } = data;
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="text-red-500 text-2xl mt-4">
                {dynamicIcon[icon]}
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">{title}</p>
                <p className="text-gray-400 text-sm">{detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col md:flex-row md:justify-between items-center text-gray-500 text-sm">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Shree-Atlas. All rights reserved.
        </div>
        <div className="flex gap-6">
          <NavLink to="/" className="hover:text-white transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-white transition">
            About
          </NavLink>
          <a
            href="https://www.linkedin.com/in/dreamergopal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Social
          </a>
          <NavLink to="/contact" className="hover:text-white transition">
            Contact
          </NavLink>
          <a
            href="https://shree-moves.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Other services
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
