import React from 'react'
import cntbg from '../img/contact background.jpg'
import con from '../img/2889131.png'
import { motion } from 'framer-motion'


const contact = () => {
  return (
    <div id='contact' className='py-2 text-blue-700 bg-cover bg-center bg-no-repeat w-auto"' style={{backgroundImage: `url(${cntbg})`}}>
        <motion.div 
        
        className=' flex flex-col justify-center items-center text-center w-full max-w-screen-lg mx-auto py-10 '>
          <h1 className='font-black text-white text-4xl md:text-5xl xl:text-6xl'>Contact</h1>
          <p className='text-sm lg:text-xl font-semibold text-center py-4 px-12 lg:px-28 font-[Poppins]'>"Get in Touch: Reach out for inquiries, collaborations, or just to say hello!"</p>
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center '>
            <div className='flex justify-center items-center lg:items-end lg:justify-end'>
                <motion.img initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, ease: 'easeInOut', }}
              viewport={{ once: true }}
                
                src={con} alt="" className='p-5 lg:w-full max-w-screen-sm w-[20rem]'/>
            </div>
            <motion.div initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, ease: 'easeInOut', }}
              viewport={{ once: true }}
            
            className='px-10 lg:px-28 backdrop-blur-sm w-full max-w-screen-md mx-auto text-white flex flex-col justify-center items-center gap-y-5'>
                 <input type="text" required placeholder='Your Name' className='w-full bg-[#0f0737] p-3 border border-gray-400 border-opacity-35 rounded-xl' />
                 <input type="text" required placeholder='Your Email' className='w-full bg-[#0f0737] p-3 border border-gray-400 border-opacity-35 rounded-xl' />
                 <textarea type="text" rows={4} placeholder='Your Message' className='w-full bg-[#0f0737] p-3 h-auto border border-gray-400 border-opacity-35 rounded-xl' />
                 <button>
                <input type="submit" name="" id="" className='bg-[#0f0737] rounded-full p-3 w-32 text-center text-white border border-gray-400 border-opacity-35 font-semibold text-base cursor-pointer hover:bg-blue-800 hover:text-white delay-300 transition-colors duration-300'/>
            </button>
            <p className='text-white text-center sm:text-base text-sm'>Or Message me throught my social media account.</p>
            <div className='flex gap-x-6 justify-center items-center'>
            <a href="https://www.facebook.com/L4.jhams09" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/768px-Facebook_Logo_2023.png" alt="fb" className='w-8 md:w-10 grayscale hover:grayscale-0 cursor-pointer hover:scale-110 transition-all duration-300' /></a>
            <a href="https://www.instagram.com/jhamsx/" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="fb" className='w-8 md:w-10 grayscale hover:grayscale-0 cursor-pointer hover:scale-110 transition-all duration-300' /></a>
            <a href="https://x.com/Jm_Lars09" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/800px-X_logo_2023_%28white%29.png" alt="fb" className='w-8 md:w-10 grayscale hover:grayscale-0 cursor-pointer hover:scale-110 transition-all duration-300' /></a>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default contact