import React from 'react'
import HeroContent from '../components/HeroContent'
import HeroImage from '../components/HeroImage'
import { motion } from 'framer-motion'

const Hero = ({ menuOpen }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.0,
        ease: "easeOut"
      },
    },
  };

  const contentVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      },
    },
  };

  const imgVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };
  return (
    <motion.section className='overflow-hidden' id='#'
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
      <div className={`container transition-all duration-300 ${menuOpen ? "px-10 blur-sm" : ""}`}>
        <div className='relative flex h-screen flex-col-reverse items-center md:flex-row'>
            {/* Hero Content */}
                <HeroContent variants={contentVariants}/> 

            {/* Hero Image */}
                <HeroImage variants={imgVariants} />
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
