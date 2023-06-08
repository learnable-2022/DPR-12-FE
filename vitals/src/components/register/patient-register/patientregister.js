import React from 'react'
import PatientLeft from './patientleft'
import PatientRight from './patientright'
import './patientregister.css'


export default function patientregister() {
  return (
    <div className='reg-container'>
        <PatientLeft />
        <PatientRight />
    </div>
  )
}
