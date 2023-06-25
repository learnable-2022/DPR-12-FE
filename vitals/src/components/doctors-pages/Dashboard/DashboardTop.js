import React from 'react'
import ani from '../../../images/dr.ani.svg'
import esuth from '../../../images/esuth.svg'

export default function DashboardTop({docDetails}) {
  return (
    <div className='acccesss'>
      <div className='access-top'>
            <div className='text-sided'>
                <img className='text-sided-img' src={esuth} alt='' />
                <p>Enugu State University Teaching Hospital</p>
            </div>
            <div className='profile-side'>
                <img src={ani} alt='' />
                <p>Logged in as: <span>Dr. {docDetails.data.firstName} {docDetails.data.lastName}</span></p>
            </div>
      </div>
    </div>
  )
}
