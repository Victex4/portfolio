import React, { useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import contactImage from '../assets/contact1.png'
import { contactDetails } from '../constants/Index'
import ContactDetailsCard from '../components/ContactDetailsCard'
import { useInView, motion } from 'framer-motion'

const Contact = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef)

    const fadeInVariants = {
        hidden: {
          y: 20,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          },
        },
      };

      const staggerContainer = {
        hidden: {
        },
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
      };
  return (
    <motion.section className='px-4 py-16 lg:py-20' id='contact' 
    ref={sectionRef}
    variants={staggerContainer}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    > 
      <SectionTitle title="Contact Me"/> 
      <div className='container mt-10 flex flex-col gap-10 rounded-2xl border-2 border-white/10 bg-white/5 p-10 md:flex-row'>
        <motion.div className='flex flex-1 items-center justify-center'
         variants={fadeInVariants}
        >
            <img src={contactImage} alt="Contact Image" className='h-40'/>
        </motion.div>
            <motion.div className='flex flex-1 flex-col gap-5'
            variants={fadeInVariants}
            >
                <h1 className='font-serif text-2xl font-bold text-white/80'>
                    Get in Touch
                </h1>
                <p className='text-white/80'>
                    Have a question or want to work with together? feel free to reach out via the options below, i'll get back to you as soon as possible.
                </p>
                <motion.div className='flex flex-col gap-5 text-white/80'
                variants={staggerContainer}
                >
                    {
                        contactDetails.map((contact) => (
                            <motion.div variants={fadeInVariants}>
                                <ContactDetailsCard contact={contact}/>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
