import React from 'react';
import './Home.css';
import backgroundVideo from '../assets/video-2.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className='hero'>
      <video className='background-video' autoPlay loop muted>
        <source src={backgroundVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text">
        <h3>E-CELL DBIT</h3>
        <p className='h-txt'>
          IGNITING INNOVATIONS <br />
          EMPOWERING ENTREPRENEURS <br />
          TURNING IDEAS INTO VENTURES
        </p>
        <Link to='about' smooth={true} offset={-201} duration={500} className='btn btn1'>
          Explore More
          <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
        </Link>
      </div>
    </div>
  );
};

export default Home;
