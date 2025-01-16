import React from 'react'
import skbg from '../img/skill background.jpg'
import html from '../img/HTML5_logo_resized.svg.png'
import css from '../img/CSS3_logo_and_wordmark.svg.png'
import react from '../img/reactjs logo.svg'
import tailwind from '../img/Tailwind_CSS_Logo.svg.png'
import ps from '../img/Adobe_Photoshop_CC_icon.svg.png'
import ai from '../img/Adobe_Illustrator_CC_icon.svg.png'
import xd from '../img/Adobe_XD_CC_icon.svg.png'
import ae from '../img/Adobe_After_Effects_CC_icon.svg.png'
import troub from '../img/troubleshooting.png'
import sett from '../img/settings.png'
import canva from '../img/Canva App Logo.png'
import wrdprs from '../img/WordPress_blue_logo.svg.png'
import { motion } from 'framer-motion'


const skills = () => {
  return (
    <div id='skills' className='bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${skbg})`}}>
        <motion.div initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
        
        className=' flex flex-col justify-center items-center text-center w-full max-w-screen-lg mx-auto pt-10 lg:pb-5 text-blue-700'>
          <h1 className='font-black text-white text-4xl md:text-5xl xl:text-6xl'>What Defines Me</h1>
          <p className='text-sm lg:text-xl font-semibold text-center py-4 px-12 lg:px-28 font-[Poppins]'>"Your skills are your greatest asset. They empower you to turn challenges into opportunities and ideas into achievements."  </p>
        </motion.div>
        <div className='grid grid-cols-1 gap-1 py-2 mx-auto lg:grid-cols-2 sm:px-10 '>
            <div className='px-9 xl:border-r-2 border-gray-100 border-opacity-35 flex flex-col items-center justify-center'>
            <motion.h2 initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', }}
              viewport={{ once: true }}
            
            className='text-white flex justify-center font-extrabold text-3xl pb-6 md:pb-0'>Programming Skills</motion.h2>
            <div className='flex flex-col justify-between items-between w-[80%] lg:w-full max-w-screen-xl md:py-10 md:justify-center md:items-center'>
                <motion.div initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://html.com/" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={html} alt="html" className='h-12 sm:h-16 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 flex' />HTML</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[50%] h-6'>50%</div>
                        </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: .8 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://www.w3schools.com/css/css_intro.asp" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={css} alt="css" className='h-12 sm:h-16 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300' />CSS</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[37%] h-6'>37%</div>
                        </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.1 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://react.dev/" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={react} alt="react" className='h-8 sm:h-11 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300' />ReactJS</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[32%] h-6'>32%</div>
                        </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.4 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 mt-6 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://tailwindcss.com/" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={tailwind} alt="tailwind" className='h-5 sm:h-8 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300' />TailwindCSS</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[60%] h-6'>60%</div>
                        </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.7 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 mt-6 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://wordpress.com/" target='_blank'><li className='flex justify-center items-center text-xl font-bold py-3 cursor-pointer'><img src={wrdprs} alt="wordpress" className='h-8 sm:h-10 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300' />WordPress</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[57%] h-6'>57%</div>
                        </div>
                </motion.div>
                </div>
            </div>
            <div className='px-9 flex flex-col items-center justify-center'>
            <motion.h2 initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', }}
              viewport={{ once: true }}
            
            className='text-white flex justify-center font-extrabold text-3xl py-6 mt-2 md:py-0 md:mt-0'>Graphics Skills</motion.h2>
            <div className='flex flex-col justify-between items-between w-[80%] lg:w-full max-w-screen-xl md:py-10 md:justify-center md:items-center'>
                <motion.div initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://www.adobe.com/ph_en/products/photoshop.html" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={ps} alt="ps" className='h-12 sm:h-16 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 flex' />Photoshop</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[80%] h-6'>80%</div>
                        </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://www.adobe.com/ph_en/products/illustrator.html" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={ai} alt="ai" className='h-12 sm:h-16 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 flex' />Illustrator</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[65%] h-6'>65%</div>
                        </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.1 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://helpx.adobe.com/support/xd.html" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={xd} alt="xd" className='h-12 sm:h-16 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 flex' />Adobe XD</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[42%] h-6'>42%</div>
                        </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.4 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://www.adobe.com/ph_en/products/aftereffects.html" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={ae} alt="ae" className='h-12 sm:h-16 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 flex' />After Effects</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[30%] h-6'>30%</div>
                        </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.7 }}
              viewport={{ once: true }}
                
                className='text-white grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='flex justify-start items-center gap-x-16'>
                    <a href="https://canva.com/" target='_blank'><li className='flex justify-center items-center text-base sm:text-xl font-bold py-3 cursor-pointer'><img src={canva} alt="canva" className='h-16 mx-5 xl:grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 flex' />Canva</li></a>
                        </div>
                        <div className='bg-gray-400 w-full sm:w-[15rem] h-6 rounded-full items-center flex justify-start cursor-pointer hover:scale-110 transition-all duration-200'>
                        <div className='text-center font-semibold rounded-full bg-blue-700 w-[70%] h-6'>70%</div>
                        </div>
                </motion.div>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center w-full max-w-screen-xl mx-auto py-4'>
                <motion.h2 initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', }}
              viewport={{ once: true }}
                
                className='text-white flex justify-center font-extrabold text-3xl pb-6'>Other Skills</motion.h2>
            </div>
            <div className='grid grid-cols-1 gap-10 pb-5 mx-auto w-full max-w-screen-xl px-20 xl:px-0 xl:grid-cols-2'>
                <motion.div initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              viewport={{ once: true }}
                
                className='bg-blue-950 bg-opacity-35 w-full mx-auto rounded-xl items-center flex flex-col justify-start lg:p-4 text-center hover:scale-105 transition-all duration-200 cursor-pointer'>
                    <img src={troub} alt="troubleshooting" className='md:w-20 w-16' />
                    <h1 className='text-white font-bold text-lg lg:text-2xl py-2'>Software Troubleshooting</h1>
                    <p className='text-sm lg:text-lg font-semibold text-white md:p-2'>I have solid troubleshooting skills, with experience in diagnosing and resolving software issues, particularly on Windows operating systems.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut', }}  
              viewport={{ once: true }}
                
                className='bg-blue-950 bg-opacity-25 w-full mx-auto rounded-xl items-center flex flex-col justify-start p-4 text-center hover:scale-105 transition-all duration-200 cursor-pointer'>
                    <img src={sett} alt="setting" className='md:w-[70px] w-[50px]' />
                    <h1 className='text-white font-bold text-lg lg:text py-2'>Computer Skills</h1>
                    <p className='text-sm lg:text-lg font-semibold text-white md:p-2'>I have strong computer skills, including using Windows, Microsoft Office, Google Workspace, and managing files. I'm also skilled in internet research and using technology to find effective solutions. </p>
                </motion.div>
            </div>
        </div>
  )
}

export default skills