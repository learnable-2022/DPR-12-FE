import React from 'react'
import Sidebar from '../../sidebar/sidebar'
import MainRecord from './MainRecord'

export default function Record() {
  return (
    <div>
      <div className='hcp-main'>
        <Sidebar />
        <MainRecord />
      </div>
    </div>
  )
}
