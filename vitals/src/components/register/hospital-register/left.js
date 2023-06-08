import React from 'react'
import './hospitalregister.css'
import { Link } from 'react-router-dom'
import signup from '../../../images/patient-signup.svg'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';




export default function Left() {
  return (
    <div>
      <div className='left-container'>

            <div className='left-icon'>
                <Link to={'/register'} className='leftside-arrow'><KeyboardBackspaceOutlinedIcon className='arrow-icon' /> <span>Back</span></Link>
            </div>

            <div className='left-img'>
                <img src={signup} alt='' />  
                <p>Have access to your medical Records with you on the go!</p>
            </div>
      </div>
    </div>
  )
}
