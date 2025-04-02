import React from "react";
import ThemeController from "./ThemeController";
import Notification from "./Notification";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Notification />
      <div className="navbar bg-base-100 shadow-sm flex md:justify-center justify-between fixed top-5 w-full z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => scrollToSection("home")}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("about")}>About</a>
              </li>

              <li>
                <a onClick={() => scrollToSection("projects")}>Projects</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("contact")}>Contact Me</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold font-boldonse">
            Arpan<span className="text-[#CD882A] text-2xl">JMD</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg px-1 mr-4">
            <li>
              <a
                onClick={() => scrollToSection("home")}
                className="cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                className="cursor-pointer"
              >
                About
              </a>
            </li>

            <li>
              <a
                onClick={() => scrollToSection("projects")}
                className="cursor-pointer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;
