import React from 'react'
import DashboardTop from './DashboardTop'
import DashboardMid from './DashboardMid'
import DashboardBottom from './DashboardBottom'

export default function MainDashboard() {
  return (
    <div>
        
        <div className='dashboard-stack'>
            <DashboardTop />
            <DashboardMid />
            <DashboardBottom />   
        </div>

    </div>
  )
}
