import React from 'react'
import Cpac from '../img/cpac.png'
import Bgnhs from '../img/bgnhs.png'
import Bges from '../img/bges.png'
import edbg from '../img/educ background.jpg'
import { motion } from "motion/react"


const education = () => {
  return (
    <div id="education" className='text-blue-700' style={{backgroundImage: `url(${edbg})`}}>
        <motion.div initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
        
        className=' flex flex-col justify-center items-center text-center w-full max-w-screen-lg mx-auto pt-10'>
          <h1 className='font-black text-white text-4xl md:text-5xl xl:text-6xl'>Educational Background</h1>
          <p className='text-sm lg:text-xl font-semibold text-center py-4 px-12 lg:px-28 font-[Poppins]'>"The power of education lies in its ability to transform dreams into reality. It’s the tool we use to shape our future and redefine limits."</p>
        </motion.div>
        <div className='grid grid-cols-1 gap-6 py-6 sm:px-28 sm:grid-cols-1 lg:grid-cols-2'>
          <motion.div initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'circOut' }}
              viewport={{ once: true }}

           className='block items-center w-[80%] mx-auto py-4 bg-blue-950 bg-opacity-25 rounded-2xl'>
            <div className=' w-[85%] max-w-screen-sm mx-auto p-2 flex flex-col text-center items-center lg:items-start lg:text-left'>
            <img src={Cpac} alt="cpac" className='w-14'/>
            <h1 className='font-black text-white text-xl'>Central Philiphine Adventist College</h1>
            <p className='text-xl font-bold'>Bachelor of Science in Information Systems</p>
            <p className='text-base font-semibold'>S.Y. 2019-2023</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'circOut' }}
              viewport={{ once: true }}
          
          className='block items-center w-[80%] mx-auto py-4 bg-blue-950 bg-opacity-25 rounded-2xl'>
            <div className=' w-[85%] max-w-screen-sm mx-auto p-2 flex flex-col text-center items-center lg:items-start lg:text-left'>
            <img src={Cpac} alt="cpac" className='w-14'/>
            <h1 className='font-black text-white text-xl'>Central Philiphine Adventist College Academy</h1>
            <p className='text-xl font-bold'>Senior High School</p>
            <p className='text-base font-semibold'>S.Y. 2016-2018</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'circOut' }}
              viewport={{ once: true }}
          
          className='block items-center w-[80%] mx-auto py-4 bg-blue-950 bg-opacity-25 rounded-2xl'>
            <div className=' w-[85%] max-w-screen-sm mx-auto p-2 flex flex-col text-center items-center lg:items-start lg:text-left'>
            <img src={Bgnhs} alt="cpac" className='w-14'/>
            <h1 className='font-black text-white text-xl'>Brgy. Guimbala-on National High School</h1>
            <p className='text-xl font-bold'>Junior High School</p>
            <p className='text-base font-semibold'>S.Y. 2011-2015</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'circOut' }}
              viewport={{ once: true }}
          
          className='block items-center w-[80%] mx-auto py-4 bg-blue-950 bg-opacity-25 rounded-2xl'>
            <div className=' w-[85%] max-w-screen-sm mx-auto p-2 flex flex-col text-center items-center lg:items-start lg:text-left'>
            <img src={Bges} alt="cpac" className='w-14'/>
            <h1 className='font-black text-white text-xl'>Brgy. Guimbala-on Elementary School</h1>
            <p className='text-xl font-bold'>Elementary</p>
            <p className='text-base font-semibold'>S.Y. 2004-2010</p>
            </div>
          </motion.div>
    </div>
        </div>
  )
}

export default education