import React from 'react'
import './Appointments.css'
import kemi from '../../../images/kemi.svg'
import GoogleIcon from '@mui/icons-material/Google';
import google from '../../../images/google.png'
import Table from '../../patient-pages/Appointments/Table';

// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers-pro/DateCalendar';

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
                        <img src={kemi} alt='' />
                        <div className='appoint-doctor-name'>
                            <h6>Dr. Kemi Wilkinson</h6>
                            <p>Physician</p>
                        </div>
                    </div>
                    <div className='appoint-details'>
                        <p>Saturday June</p>
                        <p>10th, 2023 / 10am</p>
                        <button className='cal-btn'><img className='google' src={google} alt='' />ADD TO CALENDAR</button>
                        <button className='nav-btn'>REQUEST RESCHEDULE</button>
                    </div>
                </div>
            </div>
            <div>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider> */}
            </div>
        </div>
        <div>
            <Table />
        </div>

    </main>
  )
}
