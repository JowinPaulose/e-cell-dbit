import React from 'react';
import './Home.css';
import backgroundVideo from '../assets/video-2.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icon

const Home = () => {
  return (
    <div className='hero'>
      <video className='background-video' autoPlay loop muted>
        <source src={backgroundVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text">
        <p className='h-txt'>
          IGNITING INNOVATIONS <br />
          EMPOWERING ENTREPRENEURS <br />
          TURNING IDEAS INTO VENTURES
        </p>
        <button className='btn btn1'>
          Explore More
          <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
        </button>
      </div>
    </div>
  );
};

export default Home;
