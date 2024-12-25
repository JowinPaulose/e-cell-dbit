import React from 'react'
import './Events.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import nextIcon from '../assets/next-icon.png'
import backIcon from '../assets/back-icon.png'
import event1 from '../assets/gallery-1.png'
import event2 from '../assets/gallery-2.png'
import event3 from '../assets/gallery-3.png'
import event4 from '../assets/gallery-4.png'

const Events = () => {
  return (
    <div>
    <div className="events-title">
        <h2 className="event-title">
            <FontAwesomeIcon icon={faUserFriends} size="1x" style={{ paddingRight: '20px' }} />
            Events
        </h2>
    </div>
        <div className="events">
            <img src={backIcon} alt="" className='bk-btn' />
            <img src={nextIcon} alt="" className='nxt-btn' />
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Events
