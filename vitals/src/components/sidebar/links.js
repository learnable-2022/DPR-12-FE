import React from 'react'
import './sidebar-pat.css'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div className='link'>
      
      <Link to={'/patientdashboard'}><div> <DashboardOutlinedIcon /> Dashboard</div></Link>
      <Link to={'/patientappointments'}><div> <CalendarMonthOutlinedIcon />Appointments</div></Link>
      <Link><div> <LayersOutlinedIcon />Records</div></Link>
      <Link to={'/accesscontrol'}><div> <OutlinedFlagIcon />Access Control</div></Link>
      <Link to={'/notifications'}><div> <NotificationsOutlinedIcon />Notifications</div></Link>
      <Link to={'/profile'}><div> <SettingsOutlinedIcon />Profile</div></Link>
    </div>
  )
}
