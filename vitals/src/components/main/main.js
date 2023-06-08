import React from 'react'
import './main.css'
import Greeting from './greeting'
import Vitals from './vitals'
import Medications from './medications'
import HospitalHistory from './hospitalhistory'

export default function main() {
  return (
    <div className='main'>
      <Greeting />
      <Vitals />

        <div className='main-lower'>
            <Medications />
            <HospitalHistory />
            
        </div>
    </div>
    
  )
}
