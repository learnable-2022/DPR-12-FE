import React from 'react'
import './patientlogin.css'
import logo from '../../../images/VitalsLogoBlue.svg'
import { Link } from 'react-router-dom';
import PatientLoginForm from './PatientLoginForm';

export default function Rightside() {



  return (
    <div>
      <div className='rightside-container'>
            <div className='rightside-details'>

                <Link to={'/'} ><img className='rightside-logo' src={logo} alt='' /></Link>

                <h4>Login as a Patient</h4>

                <PatientLoginForm />

                <Link to={'/register'}><p>Don't have an account? <span>Register</span></p></Link>


            </div>
      </div>
    </div>
  )
}
