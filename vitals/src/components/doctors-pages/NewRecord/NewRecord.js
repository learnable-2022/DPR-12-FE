import React from 'react'
import Sidebar from '../sidebar/sidebar'
import UpdateRecord from '../UpdateRecord'
import NewPatientRecords from './NewPatientRecord'

export default function NewRecord() {
  return (
    <div>
      <Sidebar />
      <NewPatientRecords />
    </div>
  )
}
