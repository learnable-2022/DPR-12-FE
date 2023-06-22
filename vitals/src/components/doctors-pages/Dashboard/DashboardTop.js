import React from 'react'
import ani from '../../../images/dr.ani.svg'
import esuth from '../../../images/esuth.svg'

export default function DashboardTop() {
  return (
    <div className='acccesss'>
      <div className='access-top'>
            <div className='text-sided'>
                <img src={esuth} alt='' />
                <p>Enugu State University Teaching Hospital (Parklane)</p>
            </div>
            <div className='profile-side'>
                <p>Logged in as: <span>Dr. Jonathan Ani</span></p>
                <img src={ani} alt='' />
            </div>
      </div>
    </div>
  )
}
