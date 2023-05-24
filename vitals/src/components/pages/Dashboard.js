import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Main from '../main/main'
import './Dashboard.css'


export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Main />
    </div>
  )
}
