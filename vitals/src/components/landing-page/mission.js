import React from 'react'
import './landing.css'
import hands from '../../images/hands.svg'
import demo from '../../images/demo.svg'
import { Link } from 'react-router-dom'

export default function Mission() {
  return (
    <div className='mission-container'>
       <div className='mission'>
            <div className='mission-details'>
                    <img className='mission-img' src={hands} alt='' />
                    <p>Our mission is simple: to enable the success of your practice. From day one, we make it easy to get up and running with Vitals. Once onboarded, our support team is ready to make sure that your success continues. Free for Vitals customers.</p>
            </div>
            <div className='mission-cta'>
                    <button className='nav-btn'>LEARN MORE</button>
                    <Link to={'https://youtube.com'}><img className='demo' src={demo} alt='' /></Link>
            </div>
        </div>
    </div>
  )
}
