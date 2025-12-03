import React from 'react'
import Images from './Images'
import Link from 'next/link'
import { navItems } from '@/utils/Data'

const NavBar = () => {
  return (
    <nav className="fixed md:top-10 top-5 left-5 md:left-15 md:right-15 right-5 z-50 bg-black/50 backdrop-blur-sm rounded-xl shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Images
                imageurl={'/logo.png'}
                alt='nav logo'
                width={100}
                height={50}
                placeholder={true}
                priority={true}
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white hover:text-[#D4A574] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
