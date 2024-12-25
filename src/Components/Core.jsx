import React from 'react'
import './Core.css'
import chair from '../assets/jaeden.png'
import vchair from '../assets/Andre.png'
import sec from '../assets/susanne.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';


const Core = () => {
  return (
    <div className='chameli'>
    <h2 className="core-title"><FontAwesomeIcon icon={faUserFriends} size="1x" style={{ paddingRight: '20px' }} />Meet our Core Team </h2>
    <div className='core-team'>
    <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
        <div className='team-member'>
            <img src={vchair} alt='ViceChair'/>
            <div className="caption">
                <p>Andre Fernandes <br/>
                    Vice Chairperson
                </p>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Core
