import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/VitalsLogoBlue.svg'
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DoctorRegForm from './DoctorRegForm';


export default function Right() {



  return (
    <div className='right'>
      <div className='right-container'>

            <div className='right-details'>
                <Link to={'/'}><img src={logo} alt='' /></Link>
                <h4>Sign up as a Doctor</h4>
            </div>

            <div className='right-form'>


                <DoctorRegForm />
                {/* <form>
                    <div className='form-inputs'>
                        <div className='name-inputs'>
                            <div className='rightform-inputs'>
                                <p>Surname</p>
                                <div className='small-input'><input className='small-inputs' type="text" placeholder='e.g Jermie' name='surname' /><span> </span></div>
                            </div>
                            <div className='rightform-inputs'>
                                <p>First Name</p>
                                <div className='small-input'><input className='small-inputs' type="text" placeholder='e.g Jermie' name='firstname' /><span> </span></div>
                            </div>
                        </div>
                        <div className='right-large-inputs'>
                            <div className='rightform-inputs'>
                                <p>Email address</p>
                                <div className='large-input'><input className='large-inputs' type="email" placeholder='name@example.com' name='email'/></div>
                            </div>
                            <div className='rightform-inputs'>
                                <p>License Number</p>
                                <div className='large-input'><input className='large-inputs' type="text" placeholder='e.g 5011DA3' name='license-number' /></div>
                            </div>
                            <div className='rightform-inputs'>
                                <p>Specialty</p>
                                <div className='large-input'><input className='large-inputs' type="text" placeholder='e.g Dentist' name='specialty' /></div>
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
