import { React, useEffect, useState } from 'react'
import logo from '/src/img/myLogo.svg'
import { HashLink as Link } from "react-router-hash-link"
import { NavHashLink as NavLink } from 'react-router-hash-link'

const navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
      };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolling up or down
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }

    //   Update scrolled state
      setScrolled(currentScrollY > 50);

      // Save current scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

    // Navbar
  return (
    <div class={`fixed top-0 left-0 w-full z-50 transition-all duration ${
        scrolled ? "backdrop-blur-sm shadow-lg text-white" : "backdrop-blur-sm text-white"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <header class=" flex justify-between items-center mx-auto w-full max-w-screen-md lg:max-w-screen-lg py-4 px-5 sm:items-center sm:justify-between sm:flex-row sm:px-10">
        
        <Link to={'#home'}>
        <img src={logo} alt="logo" class="w-12"/>
        </Link>
        
        <ul class="hidden items-center space-x-5 sm:flex-row sm:gap-x-8 xl:flex lg:flex md:flex font-semibold text-base">
        <NavLink to="#home" smooth className="hover:scale-110 transition-all ease-in-out delay-200 duration-200 hover:text-blue-400" ><li><a href="#">Home</a></li></NavLink>
        <NavLink to="#education" smooth className="hover:scale-110 transition-all ease-in-out delay-200 duration-200 hover:text-blue-400"><li><a href="#">Education</a></li></NavLink>
        <NavLink to="#skills" smooth className="hover:scale-110 transition-all ease-in-out delay-200 duration-200 hover:text-blue-400"><li><a href="#">Skills</a></li></NavLink>
        <NavLink to="#project" smooth className="hover:scale-110 transition-all ease-in-out delay-200 duration-200 hover:text-blue-400"><li><a href="#">Projects</a></li></NavLink>
        </ul>
        <div>
          <NavLink to="#contact" smooth> <button class="relative hidden w-24 md:flex bg-[#0f0737] text-white font-semibold justify-center items-center text-center px-4 py-2 rounded-2xl hover:bg-[#28348c] transition-all duration-500 delay-150">Contact</button> </NavLink>
        </div>

        <i class="bx bx-menu flex md:hidden cursor-pointer text-4xl" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      {isMenuOpen && (
      <div className={'absolute top-20 z-50 left-0 w-full pb-3 bg-black bg-opacity-80 shadow-lg flex-row items-center gap-1 font-semibold text-lg' + (isMenuOpen ? 'block' : 'hidden')}>  
        <Link to="#home" smooth><li className="list-none w-full text-start p-4 cursor-pointer" onClick={handleLinkClick}><a href="#">Home</a></li></Link>
        <Link to='#education' smooth><li className="list-none w-full text-start p-4 cursor-pointer" onClick={handleLinkClick}>Education</li></Link>
        <Link to="#skills" smooth><li className="list-none w-full text-start p-4 cursor-pointer" onClick={handleLinkClick}><a href="#">Skills</a></li></Link>
        <Link to="#project" smooth><li className="list-none w-full text-start p-4 cursor-pointer" onClick={handleLinkClick}><a href="#">Projects</a></li></Link>
        <Link to="#contact" smooth><li className="list-none w-full text-center p-4 cursor-pointer bg-[#0f0737] text-white active:bg-[#28348c] rounded-full max-w-32" onClick={handleLinkClick}><a href="#">Contact</a></li></Link>
      </div>
      )}
        </header>
        
    </div>
  )
}

export default navbar