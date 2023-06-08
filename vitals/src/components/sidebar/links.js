import React from 'react'
import './sidebar.css'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div className='link'>
      
      <Link to={'/patientdashboard'}><div> <DashboardOutlinedIcon /> Dashboard</div></Link>
      <Link to={'/accesspatients'}><div> <FolderSharedOutlinedIcon /> Patients</div></Link>
      <Link to={'/patientappointments'}><div> <CalendarMonthOutlinedIcon />Appointments</div></Link>
      <a href="http://google.com"><div> <LayersOutlinedIcon />Records</div></a>
      <a href="http://google.com"><div> <OutlinedFlagIcon />Access Control</div></a>
      <a href="http://google.com"><div> <AnalyticsOutlinedIcon />Analytics</div></a>
      <a href="http://google.com"><div> <PersonAddOutlinedIcon />Registration</div></a>
      <a href="http://google.com"><div> <HealthAndSafetyOutlinedIcon />Clinics</div></a>
      <a href="http://google.com"><div> <PaymentsOutlinedIcon />Billings</div></a>
      <a href="http://google.com"><div> <PeopleOutlinedIcon />Users</div></a>
      <a href="http://google.com"><div> <SettingsOutlinedIcon />Settings</div></a>
    </div>
  )
}
