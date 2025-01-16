import React from 'react'
import Slider from 'react-slick';
import hmbg from '../img/home bg.jpg'

const carouseldesigns = () => {

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };

  return (
    <div className="relative w-full h-auto p-2">
    {/* Blurred Background */}
    <div className="absolute inset-0 bg-cover bg-center filter blur-md">
      <img src={hmbg} alt="Background" className="w-full h-full object-cover" />
    </div>

    {/* Carousel Content */}
    <div className="relative z-10 pt-6 ">
      <Slider {...settings}>
        <div>
          <img src="https://i.ibb.co/bJNgkkb/image-original-2.png" alt="Slide 1" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div>
          <img src="https://i.ibb.co/Vx4Nqc4/image-original.jpg" alt="Slide 2" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div>
          <img src="https://i.ibb.co/zJ7crzL/image-original-1.png" alt="Slide 3" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div>
          <img src="https://i.ibb.co/NyzrNpC/360038166-1364995254083925-4727033434261794046-n.png" alt="Slide 4" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div>
          <img src="https://i.ibb.co/kcTXCqW/358766087-956613768705143-1538898787415985212-n.png" alt="Slide 4" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div>
          <img src="https://i.ibb.co/wRPhGCk/272922684-1264619524032810-3888029146518747979-n.jpg" alt="Slide 4" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div>
          <img src="https://i.ibb.co/Jnh85Kt/RR-22.jpg" alt="Slide 4" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </Slider>
    </div>
  </div>
  )
}

export default carouseldesigns