import React from 'react'
import userImage from "../assets/campany name.jpg"
import AnimatedIcon from './AnimatedIcon'
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { motion } from 'framer-motion'

const HeroImage = ({ variants }) => {
  return (
    <motion.div 
    variants={variants}
    className='mask-gradient absolute right-0 top-0 h-[550px] w-full overflow-hidden rounded-bl-full rounded-br-full border-r-[10px] border-blue-500 bg-gray-700 md:h-[600px] md:w-[450px]'> 
      <AnimatedIcon Icon={BiLogoReact} className='md:left-10 left-4 top-28'/>
      <AnimatedIcon Icon={BiLogoCss3} className='md:left-32 left-4 md:top-28 top-44'/>
      <AnimatedIcon Icon={BiLogoJavascript} className='md:left-56 right-4 md:top-28 top-28'/>
      <AnimatedIcon Icon={BiLogoTailwindCss} className='md:left-80 right-4 md:top-28 top-44'/>
      <img className='absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2' src={userImage} alt="User Image" />
    </motion.div>
  )
}

export default HeroImage
