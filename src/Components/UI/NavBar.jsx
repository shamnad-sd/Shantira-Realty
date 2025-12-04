"use client";

import React, { useState } from "react";
import Images from "./Images";
import Link from "next/link";
import { navItems } from "@/utils/Data";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed md:top-10 top-5 left-5 md:left-15 md:right-15 right-5 z-50 bg-black/50 backdrop-blur-sm rounded-xl shadow-md">
        <div className="mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href={'/'}>
                <Images
                  imageurl={"/Logo.png"}
                  alt="nav logo"
                  width={100}
                  height={50}
                  placeholder={true}
                  priority={true}
                />
              </Link>
            </div>


            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors ${isActive ? "text-[#D4A574]" : "text-white hover:text-[#D4A574]"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile button */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-70 md:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setOpen(false)}
        />

        {/* right-to-left panel */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-[#2A6F7E] shadow-xl
                      transform transition-transform duration-300
                      ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <Images
              imageurl={"/Logo.png"}
              alt="nav logo"
              width={100}
              height={50}
              placeholder={true}
              priority={true}
            />
            <button
              onClick={() => setOpen(false)}
              className="text-white text-[28px]"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col gap-4 px-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white text-sm py-1 border-b border-white/10 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
