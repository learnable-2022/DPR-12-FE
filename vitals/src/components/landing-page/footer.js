import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
import logo from '../../images/VitalsLogo.svg'
import instagram from '../../images/ig-logo.svg'
import twitter from '../../images/twitter-icon.svg'
import email from '../../images/email-icon.svg'
import facebook from '../../images/facebook-icon.svg'

export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='footer-container'>
                <div className='footer-details'>
                    <div className='footer-socials'>
                        <img className='footer-vitals-logo' src={logo} alt='logo' />

                        <div className='social-logos'>
                            <img className='footer-logo' src={instagram} alt='social' />
                            <img className='footer-logo' src={twitter} alt='social' />
                            <img className='footer-logo' src={email} alt='social' />
                            <img className='footer-logo' src={facebook} alt='social' />

                        </div>
                    </div>
                    <div className='footer-subscribe'>
                        <h4>Stay informed with Vitals on the latest health news</h4>

                        <form className='subscribe'>
                            <input type='text' placeholder='Enter your email address'/>
                            <button className='subscribe-btn'>SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
                <div className='footer-links-container'>
                    <div className='footer-links'>
                        <div className='head'>
                            <h5>EHR PRODUCTS & FEATURES</h5>
                        </div>
                        
                        <ul className='footer-items'>
                            <li><Link className='footer-item'>EHR</Link></li>
                            <li><Link className='footer-item'>Charting</Link></li>
                            <li><Link className='footer-item'>Electronic Prescribing</Link></li>
                            <li><Link className='footer-item'>Labs and Imaging</Link></li>
                        </ul>

                    </div>
                    <div className='footer-links'>
                        <div className='footer-head'>
                            <h5>SOLUTIONS</h5>
                        </div>
                        
                        <ul className='footer-items'>
                            <li><Link className='footer-item'>Electronic Health Record</Link></li>
                            <li><Link className='footer-item'>Care Delivery</Link></li>
                            <li><Link className='footer-item'>Specialty Updates</Link></li>
                            <li><Link className='footer-item'>Patient Collections</Link></li>
                            <li><Link className='footer-item'>Interoperability</Link></li>
                            <li><Link className='footer-item'>Telehealth</Link></li>
                            <li><Link className='footer-item'>Patient Engagement</Link></li>
                        </ul>

                    </div>
                    <div className='footer-links'>
                        <div className='head'>
                            <h5>COMPANY</h5>
                        </div>
                        
                        <ul className='footer-items'>
                            <li><Link className='footer-item'>About Vitals</Link></li>
                            <li><Link className='footer-item'>Contact Us</Link></li>
                            <li><Link className='footer-item'>Our Podcast</Link></li>
                            <li><Link className='footer-item'>Events</Link></li>
                            <li><Link className='footer-item'>Support</Link></li>
                        </ul>

                    </div>
                </div>       
        </div>
                    
        <p>© 2023 Vitals Inc. | Site Map | Terms | Privacy Policy | EHR Certification | EHR Status</p>

        
    </footer>

        
    </>
  )
}
