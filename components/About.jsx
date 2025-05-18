import React from 'react'
import {motion} from 'framer-motion'
const About = () => {
  const container = (delay) => ({
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration : 0.5,
                delay: delay,
                type: "spring",
                stiffness: 100,
            },
        },
    });
  return (
    <div>
      <section className="w-full px-6 py-10 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6" variants={container(0.5) } initial="hidden" animate="show">
          Find Work That Works for You.
        </motion.h1>
        <motion.p className="text-lg sm:text-xl text-gray-600 leading-relaxed" variants={container(1) } initial="hidden" animate="show">
          <strong>JobIndeed</strong> is a smart job search platform that helps you find the right opportunities faster. 
          With real-time listings, advanced filters, and a clean, intuitive interface, JobIndeed connects job seekers 
          to their dream roles across industries and locations.
        </motion.p>
      </div>
    </section>
    </div>
  )
}

export default About
