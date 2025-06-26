import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

const HeroContent = ({ variants }) => {
  return (
    <motion.div variants={variants} className='text-left md:max-w-72 lg:max-w-lg'>
      <p className='text-xl font-medium text-blue-300'>
        Enochusi Victory
      </p>
      <h2 className='mt-4 font-serif text-3xl font-bold tracking-wide text-white/80 md:text-4xl lg:mt-8 lg:text-5xl'>Fullstack Developer</h2>
      <p className='text-white/40 mt-4 md:text-lg'>
        Being a full-stack developer is truly rewarding. It offers the opportunity to work across both frontend and backend, bringing ideas to life from start to finish and solving real-world problems through technology.
      </p>
      <div className='flex items-center gap-2 mt-5'>
        <Button>Hire Me</Button>
        <Button variant='outline'>My Resume</Button>
      </div>
    </motion.div>
  )
}

export default HeroContent
