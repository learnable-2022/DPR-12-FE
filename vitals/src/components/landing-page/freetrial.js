import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'

export default function Freetrial() {
  return (
    <section className='free-container'>
       <div className='free-trial'>    
            <div className='free-text'>
                    <h4>Your practice. Our purpose.</h4>
                    <p>A streamlined and efficient electronic health record, designed for independent practices like yours. There’s no risk, no commitment, and no credit card required to start a free EHR trial.</p>
            </div>
                <Link to='/login'><button className='nav-btn'>START YOUR FREE TRIAL</button></Link>
        </div> 
    </section>
  )
}
