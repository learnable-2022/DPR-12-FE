import React from 'react'
import Sidebar from './sidebar/sidebar'
import MultiStepForm from './MultiStepForm'
import './doctorspages.css'



export default function UpdateRecord() {
  return (
    <div className='update-update'>
        <div className='update-container'>
                <Sidebar />
                <div className='main-update-container'>
                   <div className='main-update'>
                        <div className='title-side'>
                            <h4>Update Record</h4>
                            <p>You are viewing Sarah Umeh's Health Records</p>
                        </div>  
                        <MultiStepForm />   
                    </div>
                </div>

        </div>
    </div>
  )
}
