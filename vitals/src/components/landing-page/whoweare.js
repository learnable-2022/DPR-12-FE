import React from 'react'
import './landing.css'
import system from '../../images/system-icon.svg'
import security from '../../images/security.svg'
import integrate from '../../images/integrate-icon.svg'


export default function Whoweare() {
  return (
    <div className='who'>
        <div className='who-container'>      
          <div className='who-title'>
                <p>Who We Are!</p>
                <h2>Leading provider of healthcare software solutions and services</h2>
          </div>
          <div className='boxes-container'>
              <div className='box'>
                  <img className='box-img' src={system} alt='' />
                  <h4>A proven EHR system</h4>
                  <p>An all-in-one, interoperable healthcare software solution and client service experience that accommodates the needs of medical report specialties.</p>
              </div>
              <div className='box'>
                  <img className='box-img' src={security} alt='' />
                  <h4>Data security and privacy</h4>
                  <p>Robust security measures are in place to protect your data from unauthorized access, breaches, and cyber threats. This includes encryption, user authentication, regular security assessments, and compliance with privacy regulations.</p>
              </div>
              <div className='box'>
                  <img className='box-img' src={integrate} alt='' />
                  <h4>Integrated Telehealth</h4>
                  <p>Vitals has provisions that helps primary and specialty providers deliver in-office quality remotely, improving safety and access to healthcare for patients who find travel difficult because of distance, age, condition, or during a time of crisis.</p>
              </div>
          </div>
        </div>
    </div>
  )
}
