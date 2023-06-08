import React,{useState} from 'react'
import SignupFormSuccess from '../SignupFormSuccess'
import { Link } from 'react-router-dom'
import logo from '../../../images/VitalsLogoBlue.svg'
import './patientregister.css'
import PatientRegForm from './PatientRegForm';


export default function Right(firstName, lastName, email, phoneNumber, password, confirm_password) {
     
    const[formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
      console.log(firstName, lastName, email, phoneNumber, password, confirm_password)
      setFormIsSubmitted(true);
    }

  return (
    <div className='right'>
      <div className='right-container'>

            <div className='right-details'>
                <Link to={'/'}><img src={logo} alt='' /></Link>
                <h4>Sign up as a Patient</h4>
            </div>

            <div className='right-form'>
                {!formIsSubmitted ? 
                <PatientRegForm submitForm={submitForm} /> 
                : <SignupFormSuccess />}
            </div>

            <Link to={'/login'} className='back-to-login'>Already have an account?<span> Login</span></Link>

      </div>
    </div>
  )
}
