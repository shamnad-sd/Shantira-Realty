import React from 'react'
import Images from './UI/Images'
import ProjectBottomCard from './UI/ProjectBottomCard'

const ProjectDetails = ({ project }) => {
  return (
    <div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden shadow-lg">
        
        {/* Background Image */}
        <Images
          imageurl={project.image}
          width={1400}
          height={700}
          placeholder={true}
          quality={70}
          alt="Project 1"
          classes="w-full h-[750px] sm:h-[600px] md:h-[480px] lg:h-auto object-cover"
        />

        {/* Centered Title */}
        <div className="absolute inset-0 z-10 flex pt-55 justify-center px-6">
          <h1 className="text-[#2c8eab] apollo-heading text-4xl md:text-[110px] text-center">
            {project.title}
          </h1>
        </div>

      </div>

      {/* Bottom overlapping cards (optional enable when needed) */}
      {/* 
      <div className="mt-16 lg:mt-[-380px] relative z-10 px-6 md:px-15">
        <ProjectBottomCard />
      </div> 
      */}

    </div>
  )
}

export default ProjectDetails
