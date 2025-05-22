import React from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { PUBLIC_URL } from '../config';

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-gray-90 pb-5 border-b-2 border-red-700">
      {({ open }) => (
        <>
          <div className="w-full  pr-15 py-2 flex items-center">
            {/* Left: Logo & Text */}
            <div className="flex px-8 items-center space-x-2">
              <img src={`${PUBLIC_URL}mit-wpu_logo.png`} alt="MIT-WPU Logo" className="h-25 w-auto" />
            
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-auto space-x-12 text-black font-medium items-center">
              <a href="#" className="hover:text-red-600">Home</a>

              {/* Committee Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="inline-flex items-center hover:text-red-700">
                NSRTC
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </Menu.Button>
                <Menu.Items className="absolute mt-2 bg-white shadow-lg rounded-md py-1 w-40 z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}>Advisory</a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}>Organizing</a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>

              {/* Speakers Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="inline-flex items-center hover:text-red-700">
                  Committee
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </Menu.Button>
                <Menu.Items className="absolute mt-2 bg-white shadow-lg rounded-md py-1 w-40 z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}>Keynote</a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}>Guest</a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>

              <a href="#" className="hover:text-red-700">Speakers</a>

              <a href="#" className="hover:text-red-700">Contact</a>
            </div>

            {/* Mobile hamburger button */}
            <div className="md:hidden ml-auto">
              <Disclosure.Button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Nav Panel */}
          <Disclosure.Panel className="md:hidden px-4 pb-4 space-y-2">
            {/* Static links */}
            <a href="#" className="block text-black hover:text-blue-600">Home</a>
            <a href="#" className="block text-black hover:text-blue-600">NSRTC</a>

          {/* Dropdown: Committee */}
          <Disclosure as="div" className="space-y-1">
            {({ open }) => (
      <>
        <Disclosure.Button className="w-full flex justify-between items-center text-left font-medium text-black hover:text-blue-600">
          Committee
          <svg
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel className="ml-4 space-y-1">
          <a href="#" className="block text-sm hover:text-blue-600">Advisory</a>
          <a href="#" className="block text-sm hover:text-blue-600">Organizing</a>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

  {/* Dropdown: Speakers */}
  <Disclosure as="div" className="space-y-1">
    {({ open }) => (
      <>
        <Disclosure.Button className="w-full flex justify-between items-center text-left font-medium text-black hover:text-blue-600">
          Speakers
          <svg
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel className="ml-4 space-y-1">
          <a href="#" className="block text-sm hover:text-blue-600">Keynote</a>
          <a href="#" className="block text-sm hover:text-blue-600">Guest</a>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

  {/* Static link */}
  <a href="#" className="block text-black hover:text-blue-600">Contact</a>
</Disclosure.Panel>

        </>
      )}
    </Disclosure>
  );
};

export default Header;
