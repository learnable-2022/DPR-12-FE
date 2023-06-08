import React from 'react'
import MainRecords from './MainRecords'
import Sidebar from '../../doctors-pages/sidebar/sidebar'
import '../../doctors-pages/doctorspages.css'

export default function Records() {
  return (
    <div>
      <div className='access-patients-main'>
        <Sidebar />
        <MainRecords />
        
        </div>
    </div>
  )
}
