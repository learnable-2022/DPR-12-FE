import React from 'react'
import DashboardTop from './DashboardTop'
import DashboardMid from './DashboardMid'
import DashboardBottom from './DashboardBottom'

export default function MainDashboard({docDetails},{patients}) {
  return (
    <div>
        
        <div className='dashboard-stack'>
            <DashboardTop docDetails={docDetails} />
            <DashboardMid docDetails={docDetails} />
            <DashboardBottom patients={patients} />   
        </div>

    </div>
  )
}
