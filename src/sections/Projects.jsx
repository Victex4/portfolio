import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../constants/Index'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section className='container py-16' id='projects'>
        <SectionTitle title="Our Project"/>
      <div className='space-y-4 px-5'>
        {
          projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index}/> 
        ))}
      </div>
    </section>
  )
}

export default Projects
