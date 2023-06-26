import React from 'react'
import Table from '../../doctors-pages/Records/Table'
import profile from '../../../images/avatar-icon.jpeg'

import './record.css'
import Vitals from './vitals'
import Medications from './medications'
import HospitalHistory from '../../main/hospitalhistory'

export default function MainRecord({userDetails}) {

  return (
    <div className='person-record'>
      <div className='full-width'>
      <div className='record-side-1'>
        <div className='record-header'>
            <h4>Records</h4>
            <p>You are viewing {userDetails.data.firstName} {userDetails.data.lastName}' records</p>
        </div>
        
        <div className='record-vitals'>
            <Vitals userDetails={userDetails} /> 
        </div>
        <div className='huge-container'>
          <div className='huge'>
            <Medications userDetails={userDetails} />
            <div className='symptom-container'>
              <div className='symptom'>
                <h4>Latest Signs and Symptoms:</h4>
                <div className='symps'>
                  <p>{userDetails.data.signsAndSymptoms}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='record-side-2'>
        <div className='record-2-img'>
            <div>

            <img style={{width:"200px", borderRadius:"50%"}} src={profile} alt='' />
            </div>
            <div className='record-2-details'>
            <h4>{userDetails.data.firstName} {userDetails.data.lastName}</h4>
            <p>Patient ID:</p>
            <span>{userDetails.data._id}</span>
            </div>
            
        </div>
        <div className='record-2-bio'>
            <h4>Bio:</h4>
            <div className='bio-container'>
            <p>{userDetails.data.bio}</p>
            </div>
        </div>
        <div className='record-more-details'>
            <div className='record-2-more-details'>
                <div className='record-inside'>
                <p>Weight:<br /> <span>{userDetails.data.weight}</span></p>
                <p>Blood Group:<br /> <span>{userDetails.data.blood_group}</span></p>
                </div>
                <div className='record-inside'>
                <p>Height: <br /> <span>{userDetails.data.height}</span></p>
                <p>Genotype: <br /> <span>{userDetails.data.genotype}</span></p>
                </div>    
            </div>
            <div>
                <button className='glass-btn'>BACK TO DASHBOARD</button>
            </div>
            
        </div>
      </div>
      </div>  
      
    </div>
  )
}
