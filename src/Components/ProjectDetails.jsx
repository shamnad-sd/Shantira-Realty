import React from 'react'
import ProjectOverview from './ProjectOverview'
import LocationInsights from './LocationInsights'
import EnquiryForm from './UI/EnquiryForm'




const ProjectDetails = ({ project }) => {
  return (
    <div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#496f9a]" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <h1 className="text-[#2c8eab] apollo-heading text-4xl md:text-[88px] uppercase text-center">
            {project.title}
          </h1>
        </div>
      </div>
      {/* contact */}
      <EnquiryForm />
      <div className='py-14 px-4 md:px-15'>
        <ProjectOverview project={project} />
        <LocationInsights />
      </div>

    </div>
  )
}

export default ProjectDetails
