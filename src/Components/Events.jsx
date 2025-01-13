import React, { useRef } from 'react';
import './Events.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import nextIcon from '../assets/next-icon.png';
import backIcon from '../assets/back-icon.png';
import event1 from '../assets/gallery-1.png';
import event2 from '../assets/gallery-2.png';
import event3 from '../assets/gallery-3.png';
import event4 from '../assets/gallery-4.png';

const Events = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -25) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='bgc'>
      <div className="events-title">
        <h2 className="event-title">
          <FontAwesomeIcon icon={faUserFriends} size="1x" style={{ paddingRight: '20px' }} />
          Events
        </h2>
      </div>
      <div className="events">
        <img src={backIcon} alt="Previous" className="bk-btn" onClick={slideBackward} />
        <img src={nextIcon} alt="Next" className="nxt-btn" onClick={slideForward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="event">
                  <img src={event1} alt="Event 1" />
                  <h3 className="event-name">Event 1</h3>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="event">
                  <img src={event2} alt="Event 2" />
                  <h3 className="event-name">Event 2</h3>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="event">
                  <img src={event3} alt="Event 3" />
                  <h3 className="event-name">Event 3</h3>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="event">
                  <img src={event4} alt="Event 4" />
                  <h3 className="event-name">Spark Tank</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Events;
