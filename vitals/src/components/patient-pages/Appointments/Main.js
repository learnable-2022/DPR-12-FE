import React from 'react'
import './Appointments.css'
import kemi from '../../../images/kemi.svg'
import GoogleIcon from '@mui/icons-material/Google';
import google from '../../../images/google.png'
import Table from '../../patient-pages/Appointments/Table';


export default function Main() {
  return (
    <main className='app-main'>
        <div className='appoint-title' >
            <h3>Appointments</h3>
            <p>Here's your next appointment schedule</p>
        </div>
        <div>
            <div className='nxt-appoint-container'>
                <h6>Next Appointment</h6>
                <div className='appoint-doctor-container'>
                    <div className='appoint-doctor'>
                        
                    </div>
                    <div className='appoint-details'>
                        <div>
                            <p><span>Healthcare Professional:  Dr. Kemi Wilkinson</span></p>
                            <p>Date: Saturday 17th June, 2023</p>
                            <p>Time: 10am</p>
                        </div>

                        <button className='nav-btn'>REQUEST RESCHEDULE</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Table />
        </div>

    </main>
  )
}
