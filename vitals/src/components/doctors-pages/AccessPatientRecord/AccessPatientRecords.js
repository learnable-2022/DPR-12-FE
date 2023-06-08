import React from 'react'
import '../doctorspages.css'
import Sidebar from '../sidebar/sidebar'
import MainAccess from './MainAccess.js'


export default function AccessPatientRecords() {
  return (
    <div>
        <div className='access-patients-main'>
        <Sidebar />
        <MainAccess />
        </div>
        
        
        

      
    </div>
  )
}
