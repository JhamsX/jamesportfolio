import Slider from 'react-slick'
import hmbg from '../img/home bg.jpg'
import React, { useState } from "react";

const carouseldesigns = () => {

  const slides = [
    "src/img/image_original.png",
    "src/img/image_original2.jpg",
    "src/img/image_original3.png",
    "src/img/IS logo.png",
    "src/img/IT logo.png",
    "src/img/revamp.jpg",
    "src/img/1 Thessalonians 5;11.jpg",
    "src/img/sandstorm.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

return (
<div className="relative w-full max-w-2xl mx-auto">
      {/* Slides */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default carouseldesigns