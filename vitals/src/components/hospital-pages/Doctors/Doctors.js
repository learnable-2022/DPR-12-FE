import React from 'react'
import Sidebar from '../sidebar/sidebar'
import MainDoctor from './MainDoctor'
import '../hcp-pages.css'

export default function Doctors() {
  return (
    <div>
      <div className='hcp-main'>
        <Sidebar />
        <MainDoctor />
      </div>
    </div>
  )
}
