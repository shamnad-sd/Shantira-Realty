import ProjectDetails from '@/Components/ProjectDetails';
import { projects } from '@/utils/Data';
import React from 'react'

const ProjectPageDetails = async ({ params }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return (
    <ProjectDetails project={project} />
  )
}

export default ProjectPageDetails