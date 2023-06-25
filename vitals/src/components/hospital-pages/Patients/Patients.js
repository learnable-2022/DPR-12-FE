import React from 'react'
import Sidebar from '../sidebar/sidebar'
import MainPatients from './MainPatients'

export default function Patients() {
  return (
    <div>
      <div className='hcp-main'>
        <Sidebar />
        <MainPatients />
      </div>
    </div>
  )
}
