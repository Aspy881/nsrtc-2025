import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import Copyright from "./copyright";
import { PUBLIC_URL } from "../../config";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1E2B99] text-white px-6 py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr] gap-8 px-8 lg:px-16 items-start text-sm">

          {/* Logo + Divider */}
          <div className="flex items-center relative">
            <img
              src={`${PUBLIC_URL}images/mit-wpu-logo-white.png`}
              alt="MIT-WPU Logo"
              className="h-28 w-auto"
            />
            {/* Vertical Divider */}
            <div className="hidden md:block h-24 w-px bg-white mx-20" />
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>MIT World Peace University<br />Kothrud, Pune</p>
            <div className="flex items-start gap-2">
              <FaEnvelope className="mt-[3px]" />
              <a href="mailto:nsrtc2025@mitwpu.edu.in" className="hover:text-yellow-300">
                nsrtc2025@mitwpu.edu.in
              </a>
            </div>
            <div className="flex items-start gap-2">
              <FaPhone className="mt-[3px]" />
              <p>+91 83093 37736 | 94230 14560</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/registration" className="hover:text-yellow-300">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/nsrtc/schedule" className="hover:text-yellow-300">
                  Conference Schedule
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="hover:text-yellow-300">
                  Speakers
                </Link>
              </li>
              <li>
                <a
                  href={`${PUBLIC_URL}nsrtc/downloadables`}
                  className="hover:text-yellow-300"
                >
                  Downloadable
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center gap-6 text-2xl">
              <a
                href="https://www.instagram.com/nsrtc_bharat/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/NSRTC.Bharat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/nsrtcbharat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-gray-400 transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.youtube.com/@NSRTC_MIT-WPU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}

      </footer>
              <Copyright />
    </>
  );
};

export default Footer;
