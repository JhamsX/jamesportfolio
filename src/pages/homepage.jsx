import React from 'react'
import jim from '../img/jim.png'
import hmbg from '../img/home bg.jpg'
import loc from '../img/location.png'
import email from '../img/email.png'
import phone from '../img/phone.png'
import { Typewriter, Cursor } from "react-simple-typewriter"
import { motion } from 'framer-motion'










function homepage() {

    return (
        <div id="home">
        <div class=" text-white py-2 bg-cover bg-center bg-no-repeat w-auto" style={{backgroundImage: `url(${hmbg})`}}>
            <div class="relative justify-between items-center mx-auto w-full max-w-7xl grid grid-cols-1 gap-6 p-7 sm:grid-cols-1 sm:flex-row-reverse md:grid-cols-2 lg:grid-cols-2 lg:px-14">
                <div class="text-center sm:text-center md:text-start lg:text-start mt-14 md:mt-0">
                  <motion.p initial={{opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, ease: 'linear' }}
              viewport={{ once: true }}
                  
                  class="text-3xl font-light lg:text-6xl font-[Montserrat] py-2">Hello!</motion.p>
                    <motion.h1 initial={{opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, ease: 'linear', delay: .3 }}
              viewport={{ once: true }}
                    
                    class="text-xl font-[Montserrat] lg:text-4xl py-2"> I'm {" "}<label class="font-extrabold text-[#4580e7] text-4xl lg:text-6xl">James Larida</label></motion.h1>
                    <motion.p 
                    
                    class="text-4xl py-2 font-black lg:text-6xl font-[Inter] ">A {' '}
                      <Typewriter
                        words={['Web Designer', 'Graphic Designer', 'Web Developer', 'UI/UX Designer']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={80}
                        delaySpeed={2500}
                      /></motion.p> 
                      <motion.div initial={{opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, ease: 'linear', delay: .5 }}
              viewport={{ once: true }}
                      
                      className="text-sm lg:text-2xl font-extralight font-[Montserrat] pr-6">"I'm a dedicated, eager to learn and grow while contributing my all to be successful."</motion.div>
                      <motion.div initial={{opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, ease: 'linear', delay: .7 }}
              viewport={{ once: true }}
                      
                      class="flex flex-col justify-start items-start ml-2 mt-3 gap-y-3 py-2 border-l-2 border-white border-opacity-50">
                        <div className="flex justify-start items-center text-start">
                        <img src={loc} alt="location" className="ml-4 w-6 sm:w-auto" />
                        <span className="pl-3 text-xs md:text-base ">Brgy. Guimbala-on, SIlay City, Negros Occidental</span>
                        </div>
                        <div className="flex justify-start items-center text-start">
                        <img src={phone} alt="phone" className="ml-4 w-6 sm:w-auto" />
                        <span className="pl-3 text-xs md:text-base">(+63) 947 6867 696</span>
                        </div>
                        <div className="flex justify-start items-center text-start">
                        <img src={email} alt="email" className="ml-4 w-6 sm:w-auto" />
                        <span className="pl-3 text-xs md:text-base">semajadiral@gmail.com</span>
                        </div>
                      </motion.div>
                      <motion.p initial={{opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, ease: 'linear', delay: .9 }}
              viewport={{ once: true }}
                      
                      className="mt-2 ml-2 pt-4 flex justify-start items-start">I create this web portfolio using ReactJS and TailwindCSS.</motion.p>
                  <div className="pt-4 mt-2 text-white">
                   <motion.a initial={{opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, ease: 'linear', delay: 1.1 }}
              viewport={{ once: true }}
                   
                   download={'https://i.ibb.co/HNBbGtJ/Larida-James-Resume.jpg'} href="" className='bg-blue-800 mt-4 p-3 w-36 rounded-full text-center text-sm font-semibold hover:bg-blue-900 duration-200'> Download CV</motion.a>
                      </div>
              </div>
             <motion.div initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.7 }}
              viewport={{ once: true }}
             
             class="flex justify-center items-center">
                     <img src={jim} alt="Me" class="w-56 sm:w-72 md:w-80 lg:w-screen rounded-ss-full rounded-se-full rounded-ee-full"/>
            </motion.div>
          </div>
        </div>
        </div>


    )
        

        }
export default homepage