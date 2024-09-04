import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavbarLink } from "./NavbarLink";
import { Sidebar } from "./Sidebar";
import { NavbarButton } from "./NavbarButton";
import { Link } from "react-scroll";
import PrivateRoute from "../PrivateRoute";

export const Navbar = ({ handleAuthToggle, isAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center w-[98%] rounded-md fixed bg-black px-6 md:px-8 py-4 z-10">
      {/* Navigation Links (Hidden on Small Devices) */}
      <nav
        className={`min-w-fit hidden lg:flex justify-start items-center gap-2 w-5/12 ${
          menuOpen ? "hidden" : ""
        }`}
      >
        <NavbarLink to="/home" view="Home"></NavbarLink>

        <Link
          to="servicesAvailable"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="text-lg text-white font-medium text-center py-3 px-4 rounded hover:bg-customOrange transition-all duration-300"
        >
          Services
        </Link>
        {/* <NavbarLink view="Services" /> */}
        <NavbarLink to="/dashboard" view="Dashboard"></NavbarLink>
        <NavbarLink to="/services-listing" view="Service Listing"></NavbarLink>
      </nav>

      {/* Logo */}
      <NavLink
        to="/home"
        className="w-4/12 md:w-1/2 lg:w-4/12 flex justify-start items-center lg:justify-center"
      >
        <img
          className="w-5/6 md:w-2/6 lg:w-3/12"
          src="./logo.png"
          alt="Logbiz Logo"
          title="Logbiz Logo"
        />
      </NavLink>

      {/* Buttons */}
       <nav className="hidden lg:flex justify-end items-center gap-2 w-5/12">
       {/* <button className="text-white" onClick={handleAuthToggle}>
        {isAuthenticated ? "Log Out" : "Log In"}
       </button> */}
       <NavbarButton
          view={isAuthenticated ? "Log Out" : "Log In"}
          onClick={handleAuthToggle}
        />
        <NavbarButton to="/contact" view="Contact us" />
        <NavbarButton to="/signup" view="Sign up/login" />
      </nav>
      {/* Hamburger Menu Button */}
      <button className="lg:hidden" onClick={toggleMenu}>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={toggleMenu} />
    </header>
  );
};
