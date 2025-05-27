import React from 'react'
import Button from './Button'

const ProjectCard = ({ project, index }) => {
  return (
    <div className='sticky overflow-hidden rounded-2xl border-2 border-white/15 bg-gray-800 p-8 md:flex md:items-center'
    style={{ top: `calc(100px + ${index * 30}px)`}}
    >
        {/* Project Content */}

      <div className='flex flex-1 flex-col gap-5'>
        <h2 className='font-serif text-2xl font-semibold text-white/80'>{project.title}</h2>
        <hr className='border-t-2 border-white/10'/>
        <p className='text-sm text-white/30'>
            {project.description}
        </p>
        <a className='w-full'
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className='md:px-48 px-28 flex justify-center mx-auto md:mx-0 md:justify-start'>Visit Site</Button>
      </a>
      </div>

      {/* Project Image */}
      <div className='mt-5 flex justify-center md:mt-0 md:flex-1'>
        <img src={project.Image} alt="project.title" 
        className='-mb-10 mt-8 h-52 w-full rounded-lg object-cover md:-mr-20 md:h-full'
        />
      </div>
    </div>
  )
}

export default ProjectCard
