import React from 'react'
import Table from '../../doctors-pages/Records/Table'
import profile from '../../../images/avatar-icon.jpeg'

import './record.css'
import Vitals from './vitals'

export default function MainRecord() {
  return (
    <div className='person-record'>
      <div className='full-width'>
      <div className='record-side-1'>
        <div className='record-header'>
            <h4>Records</h4>
            <p>You are viewing Santa Claus' records</p>
        </div>
        
        <div className='record-vitals'>
            <Vitals /> 
        </div>
        <div></div>
      </div>
      <div className='record-side-2'>
        <div className='record-2-img'>
            <div>

            <img style={{width:"200px", borderRadius:"50%"}} src={profile} alt='' />
            </div>
            <div className='record-2-details'>
            <h4>Santa Claus</h4>
            <p>Patient ID:</p>
            <span>XXXXXXXXXXXXXXXXXXXXXX</span>
            </div>
            
        </div>
        <div className='record-2-bio'>
            <h4>Bio:</h4>
            <div className='bio-container'>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>
        </div>
        <div className='record-more-details'>
            <div className='record-2-more-details'>
                <div className='record-inside'>
                <p>Weight:<br /> <span>100pq</span></p>
                <p>Blood Group:<br /> <span>100pq</span></p>
                </div>
                <div className='record-inside'>
                <p>Height: <br /> <span>100pq</span></p>
                <p>Genotype: <br /> <span>100pq</span></p>
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
