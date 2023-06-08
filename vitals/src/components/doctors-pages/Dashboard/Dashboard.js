import React from 'react'
import Sidebar from '../../doctors-pages/sidebar/sidebar'
import MainDashboard from '../../doctors-pages/Dashboard/MainDashboard'

export default function Dashboard() {
  return (
    <div>
      <div className='access-patients-main'>
        <Sidebar />
        <MainDashboard />
        
        </div>
    </div>
  )
}
