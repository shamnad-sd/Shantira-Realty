import Image from 'next/image';
import React from 'react';
import Images from './Images';
import { copyright } from '@/utils/variable';
import { navItems } from '@/utils/Data';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="section-color text-white py-17 px-4 md:px-15">
      <div className="mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6   gap-10 border-b border-[#D4A574]/40 pb-10">
          {/* Logo / Brand */}
          <div className="md:col-span-1 lg:col-span-2">
            {/* Replace with your Image component */}
            <div className="mb-4">
              <Images
                imageurl={'/logo.png'}
                alt='nav logo'
                width={140}
                height={70}
                placeholder={true}
                priority={true}
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[19px] mb-2">Contact</h3>
            <p className=" text-gray-300">
              Address Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
            <p className=" text-gray-300 mt-3">Phone Number</p>
            <p className=" text-gray-300 mt-3">mail id</p>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-[19px] mb-2">Projects</h3>
            <ul className="space-y-3  text-gray-300">
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[19px] mb-2">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-[19px] mb-2">Follow us</h3>
            <ul className="space-y-6  text-gray-300">
              <li className="flex items-center space-x-4">
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.851 3.95839H14.4979V0.167871C14.0412 0.116219 12.4708 0 10.6418 0C6.82552 0 4.21129 1.97373 4.21129 5.60134V8.9399H0V13.1774H4.21129V23.8397H9.37452V13.1784H13.4155L14.0569 8.94089H9.37331V6.02152C9.37452 4.79675 9.77559 3.95839 11.851 3.95839Z" fill="white" />
                </svg>

                <span>Facebook</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9636 0H17.8769L11.512 7.27492L19 17.1742H13.1368L8.54484 11.1702L3.29045 17.1742H0.375139L7.18304 9.39298L0 0H6.01168L10.1626 5.48773L14.9636 0ZM13.941 15.4303H15.5554L5.13456 1.65237H3.4023L13.941 15.4303Z" fill="white" />
                </svg>

                <span>Twitter</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.75 0H19.25C24.0817 0 28 3.91825 28 8.75V19.25C28 24.0817 24.0817 28 19.25 28H8.75C3.91825 28 0 24.0817 0 19.25V8.75C0 3.91825 3.91825 0 8.75 0ZM19.2501 25.375C22.6276 25.375 25.3751 22.6275 25.3751 19.25V8.75001C25.3751 5.37251 22.6276 2.62501 19.2501 2.62501H8.75012C5.37262 2.62501 2.62512 5.37251 2.62512 8.75001V19.25C2.62512 22.6275 5.37262 25.375 8.75012 25.375H19.2501Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.00012 14C7.00012 10.1342 10.1344 7 14.0001 7C17.8659 7 21.0001 10.1342 21.0001 14C21.0001 17.8658 17.8659 21 14.0001 21C10.1344 21 7.00012 17.8658 7.00012 14ZM9.62512 13.9998C9.62512 16.4113 11.5886 18.3748 14.0001 18.3748C16.4116 18.3748 18.3751 16.4113 18.3751 13.9998C18.3751 11.5866 16.4116 9.62484 14.0001 9.62484C11.5886 9.62484 9.62512 11.5866 9.62512 13.9998Z" fill="white" />
                  <ellipse cx="21.5255" cy="6.47523" rx="0.93275" ry="0.93275" fill="white" />
                </svg>

                <span>Instagram</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-sm text-gray-300 gap-4">
          <p>{copyright}</p>
          <div className="flex items-center gap-6">
            <button className="hover:text-[#D4A574] cursor-pointer">Terms &amp; Conditions</button>
            <button className="hover:text-[#D4A574] cursor-pointer">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;