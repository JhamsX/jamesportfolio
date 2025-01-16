import React from 'react'
import prbg from '../img/project background.jpg'
import { useState } from 'react';
import Carousel from './carouseldesigns';
import { motion } from 'framer-motion';


const project = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    { 
      title: "CPAC Library",
      description: "This website was built with WordPress, offering powerful features and a user-friendly design for an engaging library web experience.",
      ImageUrl: 'https://lib.cpac.edu.ph/wp-content/uploads/2023/11/C.png',
      link: 'https://lib.cpac.edu.ph/',
      isPopup: false,
       },
    { 
      title: "Graphic Designs",
      description: "Skilled in graphic design, creating eye-catching designs using tools like Adobe Photoshop, Illustrator, and Canva. Specializes in logos, posters, and digital graphics.",
      ImageUrl: 'https://i.ibb.co/2k6WV95/graphic.png',
      link: <Carousel/>,
      isPopup: true,
     },
    {
       title: "Video production",
       description: "Designing captivating video intros that set the tone and grab attention instantly.",
       ImageUrl: "https://i.ibb.co/xjhnB6n/2370707.png",
       link: 'https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1725110097/profile/portfolio/1450673640044077056/d51xzgbpaa1jesap3ji2.mp4',
       isPopup: false,
      },
  ];

  const handleClick = (project) => {
    if (project.isPopup) {
      setSelectedProject(project);
    } else {
      window.open(project.link, "_blank");
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  
  return (
    <div id="project" className='text-blue-700' style={{backgroundImage: `url(${prbg})`}}> 
      <motion.div initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
      
      className=' flex flex-col justify-center items-center text-center w-full max-w-screen-lg mx-auto pt-10 '>
          <h1 className='font-black text-white text-4xl md:text-5xl xl:text-6xl font-[Inter]'>Projects</h1>
          <p className='text-sm lg:text-xl font-semibold text-center py-4 px-12 lg:px-28 font-[Poppins]'>"Bringing ideas to life through projects is my passion. Each reflects purpose and dedication."</p>
        </motion.div>
        <div className='grid grid-cols-1 gap-7 md:py-6 px-10 sm:px-28 sm:grid-cols-1 lg:grid-cols-3'>
          {projects.map((project, index) => (
        <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: .5 }}  
        viewport={{ once: true }}
        
        key={index}
        onClick={() => handleClick(project)}
        href={project.link}
        className="relative bg-blue-950 bg-opacity-25 p-6 rounded-xl overflow-hidden hover:shadow-xl cursor-pointer transition-shadow duration-300"
        >
          <img 
          src={project.ImageUrl || project.Image} 
          alt={project.title} 
          className="w-full h-64 object-contain"
          />
          <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-t from-blue-950 to-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 text-center rounded-lg'>
            <div className='text-white'>
          <h2 className="text-xl font-bold font-[Inter]">{project.title}</h2>
          <p className="text-white font-[Inter]">{project.description}</p>
        </div>
        </div>
        </motion.div>
      ))}
        </div>
        {selectedProject && selectedProject.isPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-[#060416] rounded-xl p-6 max-w-2xl w-full relative flex flex-col justify-center items-center text-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-gray-800 font-[Inter]"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white">{selectedProject.title}</h2>
            <p className="text-white">{selectedProject.description}</p>
            <div className='object-contain w-96'>{selectedProject.link}</div>
          </div>
        </div>
      )}

          <div className='flex justify-center items-center w-full max-w-screen-xl mx-auto py-4'>
                <motion.h2 initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
                
                className='text-white flex justify-center font-extrabold text-3xl pb-3 font-[Inter]'>Certification</motion.h2>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: .5 }}  
        viewport={{ once: true }}
            
            className='flex flex-col justify-center items-center pb-6'>
              <p className='text-base font-base pb-2 text-white font-[Inter]'>Certified Project Management Associate</p>
              <a download={'https://i.ibb.co/tcZnCM5/08.jpg'} href="" className='font-[Inter] bg-white p-3 w-36 rounded-full text-center font-semibold hover:bg-neutral-300 hover:scale-110 transition ease-in-out delay-150 duration-300'> Download Pdf</a>
            </motion.div>
              
    </div>
  )
}

export default project