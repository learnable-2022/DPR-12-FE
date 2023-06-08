import React from 'react'
import './patientlogin.css'
import Leftside from './leftside'
import Rightside from './rightside'





export default function patientlogin() {
  return (
    <div className='container'>
      <div className='main-container'>

        <Leftside />
        <Rightside />
      </div>
    </div>
  )
}
