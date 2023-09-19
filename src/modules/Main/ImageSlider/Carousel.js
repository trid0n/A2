import React, { useState } from 'react';
import img1 from '../../Images/img1.jpg';
import img2 from '../../Images/img2.jpg';
import img3 from '../../Images/img3.jpg';
import img4 from '../../Images/img4.jpg';
import img5 from '../../Images/img5.jpg';
import './Carousel.css';


const Carousel = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    // Add more image URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <button className='arrow prev'onClick={prevSlide}>Previous</button>
       <img 
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`} 
        
       />
      <button className='arrow next' onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
