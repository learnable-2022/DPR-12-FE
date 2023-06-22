import React from 'react'
import '../doctorspages.css'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../doctors-pages/sidebar/sidebar'
import MainDashboard from '../../doctors-pages/Dashboard/MainDashboard'

export default function Dashboard() {



  return (
    <div className='the-dashboard'>
        <div className='access-patients-main'>
          <Sidebar />
          <div className='main-access'>
            <MainDashboard />
          </div>
        
        </div>
    </div>
  )
}
