import React from 'react'
import Sidebar from '../sidebar/sidebar'
import NewMultiForm from '../NewRecord/NewMultiForm'
import '../doctorspages.css'



export default function NewPatientRecord() {
  return (
    <div className='update-update'>
        <div className='update-container'>
                <Sidebar />
                <div className='main-updates-container'>
                   <div className='main-updates'>
                        <div className='title-side'>
                            <h4>New Record</h4>
                            <p>You are creating a New Health Record</p>
                        </div>  
                        <NewMultiForm />   
                    </div>
                </div>

        </div>
    </div>
  )
}
