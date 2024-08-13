import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Hero.css';
import arrow_icon from '../Images/arrow.png';
import hero_image from '../Images/hero_img.webp'; // Update or use your own image for navigation

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <div className='hero-text'>
          <p className='hero-new'>New</p>
          <p className='hero-collections'>Collections</p>
          <p className='hero-for-everyone'>For Everyone</p>
        </div>
        <Link to="/latest-collections" className='hero-latest-btn'>
          <div>Latest Collections</div>
          <img src={arrow_icon} alt='Arrow icon indicating more collections' />
        </Link>
      </div>
      <Link to="/latest-collections" className='hero-right'>
        <img src={hero_image} alt='Hero image showcasing new collections' />
      </Link>
    </div>
  );
};

export default Hero;
