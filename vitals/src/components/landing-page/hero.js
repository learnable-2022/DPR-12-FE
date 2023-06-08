import React from 'react'
import './landing.css'
import appstore from '../../images/app-store.svg'
import playstore from '../../images/play-store.svg'
import heroImg from '../../images/hero-img.svg'
import fade from '../../images/fade.svg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero-section'>
      <div className='hero-details'>
            <div className='hero-text'>
                <h1 className='hero-header'>Revolutionalizing Healthcare Medical Record Efficiency.</h1>
                <p>Providing our users with a system that helps manage medical records and automate clinical workflow with optimal security measures.</p>
                <button className='nav-btn'>LEARN MORE</button>
                <p>Download the <span>Vitals</span> app</p>
                <div className='hero-apps'>
                    <Link to={'https://www.apple.com/store'}><img className='app-store' src={appstore} alt='' /></Link>
                    <Link to={'https://play.google.com'}><img className='play-store' src={playstore} alt='' /></Link>
                </div>
            </div>
            <div className='hero-img'>
                <img className='hero-doctor' src={heroImg} alt='' />
                <img className='hero-fade' src={fade} alt='' />
            </div>
      </div>

    </div>
  )
}
