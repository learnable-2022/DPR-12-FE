import React from 'react';
import '../register/patient-register/patientregister.css';
import './register.css';
import { Link } from 'react-router-dom';
import check from '../../images/check-icon-green.svg'


const SignupFormSuccess = () => {
  return (
    <div className='success-container'>
        <div className='success-wrapper'>
            <div className='success'>
                <img className='check-icon' src={check} alt='' />
                <h1 className='success-text'>Account Created Successfully!</h1>
            </div>
            
            <Link to={'/patient-login'}><button className='nav-btn'>PROCEED TO LOGIN</button></Link>
        </div>
    </div>
  )
}

export default SignupFormSuccess
