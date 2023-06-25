import React from 'react'
import '../hcp-pages.css'
import esut from '../../../images/esuth.svg'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ani from '../../../images/dr.ani.svg';


export default function MainPatients() {
  return (
    <div className='hcp-container'>
      <div className='hcp-dash-title'>
        <h4>Patients</h4>
        <input className='mid-inputs' type='text' placeholder='Search Patient' value='' />
        <div className='dash-logged-in'>
            <div><p>Logged in as: </p><span>Enugu State Teaching Hospital</span></div>
            
            <img src={esut} alt='' />
        </div> 
      </div>
      <div className='total-doctors'>
        <div className='doctor-box-container'>
            <div className='doctor-box'>
              <div className='doctor-box-text'>
                <h4>100</h4>
                <p>Total Patients</p>
              </div>
              <GroupOutlinedIcon className='the-icon' />
            </div>
            <div className='doctor-box-button'>
                <p>View More</p>
                <NavigateNextOutlinedIcon />
            </div>
        </div>
        <div className='doctor-box-container'>
            <div className='doctor-box'>
              <div className='doctor-box-text'>
                <h4>65</h4>
                <p>Verified Patients</p>
              </div>
              <GroupOutlinedIcon className='the-icon' />
            </div>
            <div className='doctor-box-button'>
                <p>View More</p>
                <NavigateNextOutlinedIcon />
            </div>
        </div>
        <div className='doctor-box-container'>
            <div className='doctor-box'>
              <div className='doctor-box-text'>
                <h4>35</h4>
                <p>Unverified Patients</p>
              </div>
              <GroupOutlinedIcon className='the-icon' />
            </div>
            <div className='doctor-box-button'>
                <p>View More</p>
                <NavigateNextOutlinedIcon />
            </div>
        </div>
        
      </div>
      <div className='doctors-button'>
        <div className='doctors-button-container'>
          <button className='nav-btn'>Add Patients</button>
        </div>
      </div>
      <div className='doctors-main-container'>
        <div className='doctors-container'>
          <div className='doctor-doctor'>
            <img src={ani} alt='' />
            <span className='doctor-label'>
              <p>•</p>
              <small>Resident Doctor</small>
            </span>
          </div>
          <div className='doctor-doctor-details'>
            <h4>Dr. Jonathan Ani</h4>
            <p>Pediatrician</p>
            <small>ID: 653304920113</small>
          </div>
        </div>
        <div className='doctors-container'>
          <div className='doctor-doctor'>
            <img src={ani} alt='' />
            <span className='doctor-label'>
              <p>•</p>
              <small>Resident Doctor</small>
            </span>
          </div>
          <div className='doctor-doctor-details'>
            <h4>Dr. Jonathan Ani</h4>
            <p>Pediatrician</p>
            <small>ID: 653304920113</small>
          </div>
        </div>
        <div className='doctors-container'>
          <div className='doctor-doctor'>
            <img src={ani} alt='' />
            <span className='doctor-label'>
              <p>•</p>
              <small>Resident Doctor</small>
            </span>
          </div>
          <div className='doctor-doctor-details'>
            <h4>Dr. Jonathan Ani</h4>
            <p>Pediatrician</p>
            <small>ID: 653304920113</small>
          </div>
        </div>
        <div className='doctors-container'>
          <div className='doctor-doctor'>
            <img src={ani} alt='' />
            <span className='doctor-label'>
              <p>•</p>
              <small>Resident Doctor</small>
            </span>
          </div>
          <div className='doctor-doctor-details'>
            <h4>Dr. Jonathan Ani</h4>
            <p>Pediatrician</p>
            <small>ID: 653304920113</small>
          </div>
        </div>
        <div className='doctors-container'>
          <div className='doctor-doctor'>
            <img src={ani} alt='' />
            <span className='doctor-label'>
              <p>•</p>
              <small>Resident Doctor</small>
            </span>
          </div>
          <div className='doctor-doctor-details'>
            <h4>Dr. Jonathan Ani</h4>
            <p>Pediatrician</p>
            <small>ID: 653304920113</small>
          </div>
        </div>
        
      </div>
    </div>
  )
}
