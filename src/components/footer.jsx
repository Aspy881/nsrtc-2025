import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa6';
import { PUBLIC_URL } from '../config';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1E2B99] text-white px-6 py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-16 items-start text-sm">

          {/* Logo */}
          <div className="flex justify-center md:justify-start relative">
            <img
              src={`${PUBLIC_URL}MIT-white-logo-1.png`}
              alt="MIT-WPU Logo"
              className="h-32 w-40 pr-4"
            />
            {/* Vertical Divider */}
            <div className="hidden md:block absolute right-[4rem] top-0 h-full border-r-2 border-white" />
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>MIT World Peace University<br />Kothrud, Pune</p>
            <div className="mt-2 flex items-start space-x-2">
              <FaEnvelope className="mt-1 text-sm" />
              <a href="mailto:nsrtc2025@mitwpu.edu.in" className="hover:text-yellow-300 text-sm">
                nsrtc2025@mitwpu.edu.in
              </a>
            </div>
            <div className="mt-2 flex items-start space-x-2">
              <FaPhone className="mt-1 text-sm" />
              <p className="text-sm">+91 9230230392</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="list-none list-inside space-y-1 text-sm">
              <li><a href="#" className="hover:text-yellow-300">Registration</a></li>
              <li><a href="#" className="hover:text-yellow-300">Conference Schedule</a></li>
              <li><a href="#" className="hover:text-yellow-300">Speakers</a></li>
              <li><a href="#" className="hover:text-yellow-300">Downloadable</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center md:col-span-1 md:text-left">
            <h3 className="text-lg pb-2 font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
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
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
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
      </footer>

    </>
  );
};

export default Footer;
