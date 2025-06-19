import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FcGlobe } from "react-icons/fc";

function Header() {
  const [show, setShow] = useState(false);

  const menuToggle = () => {
    setShow((prev) => !prev);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <header className="bg-[#111827] text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-wide text-cyan-400 hover:text-white transition"
        >
          <FcGlobe className="text-3xl md:text-4xl" />
          <span>Shree-Atlas</span>
        </NavLink>

        {/* Desktop Navbar is here */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-base font-medium">
            {["/", "/about", "/country", "/contact"].map((path, index) => {
              const labels = ["Home", "About", "Country", "Contact"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white border-b-2 border-cyan-400 pb-1"
                        : "text-gray-400 hover:text-white transition"
                    }
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile navbar icon */}
        <button
          onClick={menuToggle}
          className="md:hidden text-2xl text-cyan-400 hover:text-white transition"
        >
          {show ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* Mobile Menu section is here */}
        {show && (
          <nav className="absolute top-full left-0 w-full bg-[#111827] md:hidden shadow-md">
            <ul className="flex flex-col text-center py-4 space-y-4 text-base font-medium">
              {["/", "/about", "/country", "/contact"].map((path, index) => {
                const labels = ["Home", "About", "Country", "Contact"];
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? "text-white border-b-2 border-cyan-400 pb-1"
                          : "text-gray-400 hover:text-white transition"
                      }
                    >
                      {labels[index]}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
