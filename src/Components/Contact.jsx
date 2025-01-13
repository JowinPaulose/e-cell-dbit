import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
    <div className="contacts-title">
            <h2 className="contact-title">
              <FontAwesomeIcon icon={faUserFriends} size="1x" style={{ paddingRight: '20px' }} />
              Contact Us Here
            </h2>
          </div>
          <div className="contact">
            <div className="address">
            <h3>Address</h3>
            <p>Premier Automobiles Road Opp. HDIL Premier Exotica,<br/> Kurla, Mumbai, Maharashtra 400070</p>
            </div>
            <div className="mail">
            <h3>Email</h3>
            <p>ecelldbit@gmail.com</p>
            </div>
        
        </div>
    </div>
  )
}

export default Contact
