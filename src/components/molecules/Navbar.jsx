"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import NavLink from "../atoms/NavLink";
import { PUBLIC_URL } from "../../config";
//import { Disclosure, Menu } from '@headlessui/react';
//import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function Navbar({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // close mobile menu on route change
  }, [location]);

  const navbarClass = transparent
    ? isScrolled
      ? "bg-white shadow-md"
      : "bg-black/10 backdrop-blur-md"
    : "bg-white shadow-md";

  const textColorClass = transparent
    ? isScrolled || isMenuOpen
      ? "text-blue-800 hover:text-red-600"
      : "text-white hover:text-red-600"
    : "text-blue-800 hover:text-red-600";

  return (
    <header
      className={`${navbarClass} fixed top-0 left-0 px-15 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3">
        {/* Logo & Mobile Toggle */}
        <div className="flex items-center mx-5 justify-between w-full md:w-auto mb-4 md:mb-0">
          <Link to="/">
            <img
              src={`${PUBLIC_URL}images/nsrtc-logo.png`}
              alt="NSRTC Logo"
              className="h-30 w-auto"
            />
          </Link>

          <button
            className={`md:hidden ${textColorClass}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto relative`}
        >
          <NavLink to="/" className={textColorClass}>
            Home
          </NavLink>
          <div className="relative group">
            <div
              className={`flex items-center cursor-pointer ${textColorClass} font-semibold focus:outline-none`}
            >
              About <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            {/* Dropdown container */}
            <div className="absolute w-56 bg-white shadow-lg rounded-md  opacity-0 invisible pointer-events-none group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 transition-opacity duration-200 z-50">
              <div className="py-1">
                {[
                  ["About NSRTC", "/nsrtc/about"],
                  ["Themes", "/nsrtc/themes"],
                  ["Schedule", "/nsrtc/schedule"],
                  ["Previous Conferences", "/nsrtc/previous"],
                  ["Downloadables", "/nsrtc/downloadables"],
                ].map(([label, to], i) => (
                  <Link
                    key={i}
                    to={to}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Committee Dropdown */}
          <div className="relative group">
            <div
              className={`flex items-center cursor-pointer ${textColorClass} font-semibold focus:outline-none`}
            >
              Committee <ChevronDown className="ml-1 h-4 w-4" />
            </div>

            <div className="absolute w-56 bg-white shadow-lg rounded-md opacity-0 invisible pointer-events-none group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 transition-opacity duration-200 z-50">
              <div className="py-1">
                {[
                  ["Patrons", "/committees/patrons"],
                  ["Co-Chairmen", "/committees/co-chairmen"],
                  ["Advisory", "/committees/advisory"],
                  ["Convener", "/committees/convener"],
                  ["Organizing Committee", "/committees/organizing"],
                  ["Organizing Team", "/committees/team"],
                ].map(([label, to], i) => (
                  <Link
                    key={i}
                    to={to}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/speakers" className={textColorClass}>
            Speakers
          </NavLink>
          <NavLink to="/registration" className={textColorClass}>
            Registration
          </NavLink>
          <NavLink to="/sponsorship" className={textColorClass}>
            Sponsorship
          </NavLink>
          <NavLink to="/contact" className={textColorClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
