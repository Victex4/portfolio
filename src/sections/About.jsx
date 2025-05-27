import React, { useRef } from 'react'
import userImage from '../assets/campany name.jpg'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      },
    },
  };

  const imgVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const textVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };
  return (
    <motion.section className='py-16 ' id='about' 
    ref={ref}
    variants={containerVariants}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    >
      <SectionTitle title="About Me"/> 
      <div className='flex container flex-col mt-8 items-center gap-10 md:mt-16 md:flex-row md:gap-3'>
        {/* About Image */}
        <div className='mask-gradient h-[450px] w-full overflow-hidden rounded-l-xl rounded-br-full border-l-[10px] border-blue-500 bg-gray-700 md:h-[450px] md:w-[650px]'>
          <motion.img src={userImage} alt="About Image" className='w-[450px]'
          variants={imgVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          />
        </div>
        {/* About Content */}
        <motion.div className='container flex-1'
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        >
          <div className='max-w-lg'>
            <h1 className='text-5xl md:text-5xl font-semibold font-serif text-white/80'>
              Hi, I'm <span className='text-blue-500'>Enochusi Victory</span>
            </h1>
            <p className='text-sm mt-3 text-white/60 md:text-base'>
              A very active fullstack, ive done alot of work using React, Nodejs, MongoDb etc 
              A very active fullstack, ive done alot of work using React, Nodejs, MongoDb etc 
              A very active fullstack, ive done alot of work using React, Nodejs, MongoDb etc 
            </p>
          </div>
          <div className='mt-5'>
            <Button>
              <a href="https://wa.me/+2348065493663">Hire Me</a>
            </Button>
        </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
