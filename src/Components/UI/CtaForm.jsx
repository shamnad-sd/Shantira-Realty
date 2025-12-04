import React from 'react'
import Images from './Images'
import Form from './Form'

const CtaForm = () => {
  return (
    <section className="md:py-16 px-4 md:px-15 py-10">
      <div className="mx-auto">
        <div className="bg-[#11363D] rounded-[30px] overflow-hidden flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-[45%]">
            <Images
              imageurl="/HomeImg/contact-banner.jpg"
              alt="Get in touch"
              width={900}
              height={600}
              priority={true}
              placeholder={true}
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 lg:bg-linear-to-r from-transparent via-black/0 to-[#11363D]" />
            <div className="absolute inset-0 flex items-end p-10 md:pl-20">
              <div className="text-white md:pb-10">
                <p className="text-3xl md:text-4xl  leading-tight">
                  Get In <br/>
                  Touch With Us
                </p>
                {/* <p className="text-3xl md:text-4xl  leading-tight">
                  Touch With Us
                </p> */}
              </div>
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>


  )
}

export default CtaForm
