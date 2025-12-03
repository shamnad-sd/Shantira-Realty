import React from 'react'
import Images from './Images'
import Image from 'next/image'

const CtaForm = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#11363D] rounded-[30px] overflow-hidden flex flex-col lg:flex-row">
          {/* Left image + text */}
          <div className="relative w-full lg:w-[45%]">
            <Images
              imageurl="/HomeImg/contact-banner.jpg"
              alt="Get in touch"
              width={900}
              height={600}
              quality={90}
              priority={true}
              placeholder={true}
              className="w-full h-full object-cover"
            />

            {/* dark + gradient overlay */}
            {/* <div className="absolute inset-0" /> */}
            <div className="pointer-events-none absolute inset-0 lg:bg-linear-to-r from-transparent via-black/0 to-[#11363D]" />

            <div className="absolute inset-0 flex items-end p-10 md:pl-20">
              <div className="text-white">
                <p className="text-3xl md:text-4xl font-semibold leading-tight">
                  Get In
                </p>
                <p className="text-3xl md:text-4xl font-semibold leading-tight">
                  Touch With Us
                </p>
              </div>
            </div>
          </div>


          {/* Right form */}
          <div className="w-full lg:w-[55%] px-8 lg:px-0 lg:pr-10 py-8 lg:py-10 flex items-center">
            <form className="w-full space-y-4">
              {/* Full name + message */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className='space-y-3'>
                  <label className="block text-[11px] text-gray-200 mb-1 pl-4">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none"
                  />
                  <label className="block text-[11px] text-gray-200 mb-1 pl-4">
                    Mail ID*
                  </label>
                  <input
                    type="email"
                    placeholder="Mail ID*"
                    className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none"
                  />

                  <label className="block text-[11px] text-gray-200 mb-1 pl-4">
                    Phone Number*
                  </label>
                  <div className="flex items-center rounded-md bg-white text-sm text-gray-800 px-4 py-2.5">
                    <span className="pr-3 border-r border-gray-300">+91</span>
                    <input
                      type="tel"
                      placeholder="0000 000 000"
                      className="flex-1 pl-3 outline-none bg-transparent"
                    />
                  </div>

                </div>

                <div className='space-y-4'>
                  <label className="block text-[11px] text-gray-200 mb-1 pl-4">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Message"
                    className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full h-[43px] rounded-md bg-[#CFA77F] text-white  font-light"
                  >
                    Send Inquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>


  )
}

export default CtaForm
