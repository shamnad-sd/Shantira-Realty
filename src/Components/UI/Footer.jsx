import Image from 'next/image';
import React from 'react';
import Images from './Images';
import { copyright } from '@/utils/variable';
import { navItems, projects } from '@/utils/Data';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#11363D] text-white py-10 md:py-17 px-4 md:px-15">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6  gap-8  xl:gap-10 border-b border-[#CFB084] pb-10">
          <div className="md:col-span-1 xl:col-span-2">
            <div className="mb-4">
              <Images
                imageurl={'/Logo.png'}
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
            <p className="font-extralight ">
              B402, Purva Eternity, Kakkanad Pallikara Rd, Athani, Kakkanad, Kochi, Kerala 682030
            </p>
            <p className="font-extralight mt-3">
              <a href="tel:+916282091189" className="hover:underline">
                +91 62820 91189
              </a>
            </p>

            <p className="font-extralight mt-3">
              <a href="mailto:info@shantirarealty.com" className="hover:underline">
                info@shantirarealty.com
              </a>
            </p>

          </div>

          {/* Projects */}
          <div>
            <h3 className="text-[19px] mb-2">Projects</h3>
            <ul className="space-y-3  ">
              {projects.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`projects/${item.slug}`}
                    className="font-extralight"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[19px] mb-2">Quick Links</h3>
            <ul className="space-y-3 font-extralight ">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className=" "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-[19px] mb-4">Follow us</h3>
            <ul className="space-y-6  font-extralight">
              <li className="flex items-center space-x-4">
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.851 3.95839H14.4979V0.167871C14.0412 0.116219 12.4708 0 10.6418 0C6.82552 0 4.21129 1.97373 4.21129 5.60134V8.9399H0V13.1774H4.21129V23.8397H9.37452V13.1784H13.4155L14.0569 8.94089H9.37331V6.02152C9.37452 4.79675 9.77559 3.95839 11.851 3.95839Z" fill="white" />
                </svg>

                <a href="https://www.facebook.com/profile.php?id=61581869027781"><span>Facebook</span></a>
              </li>
              <li className="flex items-center space-x-4">
               {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0"/>
               </svg> */}
               <svg width="28" height="28" viewBox="0 0 512 512" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
               <path d="m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0"/>
               </svg>

                <a href="https://www.linkedin.com/company/shantira-realty/posts/?feedView=all"><span>Linkedin</span></a>
              </li>
              <li className="flex items-center space-x-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.75 0H19.25C24.0817 0 28 3.91825 28 8.75V19.25C28 24.0817 24.0817 28 19.25 28H8.75C3.91825 28 0 24.0817 0 19.25V8.75C0 3.91825 3.91825 0 8.75 0ZM19.2501 25.375C22.6276 25.375 25.3751 22.6275 25.3751 19.25V8.75001C25.3751 5.37251 22.6276 2.62501 19.2501 2.62501H8.75012C5.37262 2.62501 2.62512 5.37251 2.62512 8.75001V19.25C2.62512 22.6275 5.37262 25.375 8.75012 25.375H19.2501Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.00012 14C7.00012 10.1342 10.1344 7 14.0001 7C17.8659 7 21.0001 10.1342 21.0001 14C21.0001 17.8658 17.8659 21 14.0001 21C10.1344 21 7.00012 17.8658 7.00012 14ZM9.62512 13.9998C9.62512 16.4113 11.5886 18.3748 14.0001 18.3748C16.4116 18.3748 18.3751 16.4113 18.3751 13.9998C18.3751 11.5866 16.4116 9.62484 14.0001 9.62484C11.5886 9.62484 9.62512 11.5866 9.62512 13.9998Z" fill="white" />
                  <ellipse cx="21.5255" cy="6.47523" rx="0.93275" ry="0.93275" fill="white" />
                </svg>

                <a href="https://www.instagram.com/shantira_realty/?hl=en"><span>Instagram</span></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 text-sm gap-4">
          <p className='md:block hidden font-extralight'>{copyright}</p>
          <div className="flex items-center gap-6 md:gap-15">
            <Link href={'/terms-conditions'}><button className="hover:text-[#D4A574] cursor-pointer font-extralight">Terms &amp; Conditions</button></Link>
            <Link href={'/privacy-policy'}><button className="hover:text-[#D4A574] font-extralight cursor-pointer">Privacy Policy</button></Link>
          </div>
          <p className='block md:hidden'>{copyright}</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;