import React from 'react'
import ani from '../../../images/dr.ani.svg'
import '../doctorspages.css'

export default function RecordTop(props) {


  return (
    <div>
        <div className='access-top'>
            <div className='title-side'>
                <h4>Records</h4>
                <p>You are Viewing {props.name}’s Health Record</p>
            </div>
            <div className='profile-side'>
                <p>Logged in as: <span>Dr. Jonathan Ani</span></p>
                <img src={ani} alt='' />
            </div>
        </div>
    </div>
  )
}
