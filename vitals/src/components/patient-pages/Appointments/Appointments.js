import React from 'react'
import Sidebar from '../../sidebar/sidebar'
import Main from './Main'
import './Appointments.css'

export default function Appointments() {
  return (
    <div className='appoint-main'>
      <Sidebar />
      <Main />
    </div>
  )
}
