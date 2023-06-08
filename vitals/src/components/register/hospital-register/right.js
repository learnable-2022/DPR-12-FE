import React from 'react'
import './hospitalregister.css'
import { Link } from 'react-router-dom'
import logo from '../../../images/VitalsLogoBlue.svg'
import HospitalRegForm from './HospitalRegForm';


export default function Right() {

    



  return (
    <div className='right'>
      <div className='right-container'>

            <div className='right-details'>
                <Link to={'/'}><img src={logo} alt='' /></Link>
                <h4>Sign up as a Hospital</h4>
            </div>

            <div className='right-form'>


                <HospitalRegForm />
            {/* <form>
                    <div className='form-inputs'>
                        <div className='right-large-inputs'>
                            <div className='rightform-inputs'>
                                <p>Hospital Name</p>
                                <div className='large-input'><input className='large-inputs' type="text" name='hospital-name' placeholder='e.g  University Teaching Hospital  Enugu State' /></div>
                            </div>
                            <div className='rightform-inputs'>
                                <p>Hospital Address</p>
                                <div className='large-input'><input className='large-inputs' type="text" name='hospital-address' placeholder='e.g University Teaching Hospital, Ituku-Ozalla, Enugu Nigeria' /></div>
                            </div>
                            <div className='rightform-inputs'>
                                <p>Email address</p>
                                <div className='large-input'><input className='large-inputs' type="email" placeholder='name@example.com' name='email'/></div>
                            </div>
                            
                            <div className='rightform-inputs'>
                                <p>Registration Number</p>
                                <div className='large-input'><input className='large-inputs' type="text" placeholder='e.g 50339AD' name='registration-number' /></div>
                            </div>
                        </div>
                        <div className='password-inputs'>
                            <div className='rightform-inputs'>
                                <p>Password</p>
                                <div className='pass-inputs'><input type="password" placeholder='xxxxxxx' name='password' /> <VisibilityOffOutlinedIcon className='pass-icons' /></div>
                            </div>
                            <div className='rightform-inputs'>
                                <p>Confirm Password</p>
                                <div className='pass-inputs'><input type="password" placeholder='xxxxxxx' name='confirmpassword' /><VisibilityOffOutlinedIcon className='pass-icons' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='form-terms'>
                        <input type='checkbox' name='agree' value='agree' />
                        <p>I accept all <span>Terms and Conditions</span></p>
                    </div>
                    <div className='form-submit'>
                        <button type='submit' onClick={handleFormSubmit}>CREATE ACCOUNT</button>
                    </div>
                </form> */}

            </div>

            <Link to={'/login'} className='back-to-login'>Already have an account? <span> Login</span></Link>

      </div>
    </div>
  )
}
