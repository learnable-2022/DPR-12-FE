import React from 'react'
import './doctorlogin.css'
import { Link } from 'react-router-dom'
import signin from '../../../images/patient-signin.svg'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';



export default function Leftside() {
  return (
    <div>
        <div className='left-side-container'>

            <div className='left-side-icon'>
                <Link to={'/login'} className='leftside-arrow'><KeyboardBackspaceOutlinedIcon className='arrow-icon' /> <span>Back</span></Link>
            </div>

            <div className='left-side-img'>
                <img src={signin} alt='' />  
                <p>Access and Share your Health Record with ease</p>
            </div>

            

      </div>
    </div>
  )
}
