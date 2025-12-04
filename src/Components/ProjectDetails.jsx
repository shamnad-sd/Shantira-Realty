import React from 'react'
import ProjectOverview from './ProjectOverview'
import LocationInsights from './LocationInsights'




const ProjectDetails = ({ project }) => {
  return (
    <div>
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#496f9a]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <h1 className="text-[#2c8eab] apollo-heading text-4xl md:text-[88px] uppercase text-center">
            {project.title}
          </h1>
        </div>
      </div>


      {/* contact */}
      <div className="bg-gradient-to-b from-[#496f9a] to-transparent">
        <div className="relative z-10 px-6 md:px-15">
          {/* gradient wrapper */}
          <section className="pb-10 px-4 md:px-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-1 apollo-heading text-white text-[28px]">
                Enquiry
              </h2>
              <p className="text-center text-white font-extralight mb-6 text-[19px]">
                Wish to get call back from our team? Fill your details.
              </p>

              <form className="w-full space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="block text-[11px] text-gray-200 mb-1 pl-4">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
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

                  <div className="space-y-4">
                    <label className="block text-[11px] text-gray-200 mb-1 pl-4">
                      Mail ID*
                    </label>
                    <input
                      type="email"
                      placeholder="Mail ID*"
                      className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none"
                    />
                    <label className="block text-[11px] text-gray-200 mb-1 pl-4">
                      Captcha*
                    </label>
                    <input
                      type="number"
                      placeholder="12+4 ="
                      className="w-full rounded-md bg-white text-gray-800 text-sm px-4 py-2.5 outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-[43px] rounded-md bg-[#CFA77F] text-white font-light"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      <div className='py-14 px-4 md:px-15'>
        <ProjectOverview project={project} />
        <LocationInsights />
      </div>

    </div>
  )
}

export default ProjectDetails
