import React from 'react';
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/gallery-1.png';
import image2 from '../assets/gallery-2.png';
import image3 from '../assets/gallery-3.png';
import image4 from '../assets/gallery-4.png';

const Gallery = () => {
  return (
    <div className='bgcc'>
      <div className="about-title">
        <h2 className="core-title">
          <FontAwesomeIcon icon={faUserFriends} size="1x" style={{ paddingRight: '20px' }} />
          Gallery
        </h2>
      </div>
      <div className="gallery-container">
        <div className="gallery">
          <img src={image1} alt="Gallery image 1" />
          <img src={image2} alt="Gallery image 2" />
          <img src={image3} alt="Gallery image 3" />
          <img src={image4} alt="Gallery image 4" />
        </div>
        <button className="btn btn-dark">
          Explore More
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
