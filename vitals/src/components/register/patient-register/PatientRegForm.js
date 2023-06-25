import React, { useEffect, useState, useContext } from 'react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { UserContext } from '../../patient-pages/UserContext';
import SignUpFormSuccess from '../SignupFormSuccess';

const PatientRegForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const inputStyle = {
    background: 'none',
    transition: 'all 0.5s ease-in-out',
    // Set different styles when hovered
    ...(isHovered && {
      background: 'none',
      color: '#1565C0',
    }),
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signUp = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirm_password
    ) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirm_password) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch(
        'https://vitals-8myt.onrender.com/vitals/patients/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            confirm_password,
          }),
          redirect: 'follow',
        }
      );

      const data = await response.json();

      if (data.success === true) {
        console.log(data.message);
        setMessage('Account Created Successfully... Proceed to Login');
        
        setIsSignedUp(true);
      } else {
        setMessage('User already registered');
      }
    } catch (error) {
      setError(error.message);
    }
  };
      





  return (
    <div>
      {message ? (
        <SignUpFormSuccess />
      ) : (
        <div>
          {message && <p className='error-success'>{message}</p>}
          {error && <p className='error-text'>{error}</p>}
          <form onSubmit={signUp} className='reg-form' id='reg-form'>
                    <div className='form-inputs'>
                        <div className='name-inputs'>
                            <div className='rightform-inputs'>
                                <p>First Name</p>
                                <div className='small-input'>
                                    <input 
                                        className='small-inputs' 
                                        type="text" 
                                        placeholder='e.g Jermie' 
                                        name='firstName' 
                                        value={firstName} 
                                        onChange={(e) => setFirstName(e.target.value)} 
                                    />
                                    
                                    <span> </span>
                                </div>
                                {/* {errors.firstName && <p className="error-text" >{errors.firstName}</p>} */}
                            </div>
                            <div className='rightform-inputs'>
                                <p>Last Name</p>
                                <div className='small-input'>
                                    
                                    <input
                                        className='small-inputs'
                                        type="text" 
                                        placeholder='e.g Jermie' 
                                        name='lastName' 
                                        value={lastName} 
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    
                                    <span> </span>
                                </div>
                                {/* {errors.lastName && <p className="error-text" >{errors.lastName}</p>}  */}
                            </div>
                        </div>
                        <div className='right-large-inputs'>
                            <div className='rightform-inputs'>
                                <p>Email address</p>
                                <div className='large-input'>
                                    <input
                                        className='large-inputs' 
                                        type="email" 
                                        placeholder='name@example.com' 
                                        name='email' value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                    {/* {errors.email && <p className="error-text" >{errors.email}</p>} */}
                            </div>
                            
                        </div>
                        <div className='right-large-inputs'>
                            <div className='rightform-inputs'>
                                <p>Phone Number</p>
                                <div className='large-input'>
                                    <input
                                        className='large-inputs' 
                                        type="tel" 
                                        placeholder='e.g +2348102345678' 
                                        name='phoneNumber' value={phoneNumber} 
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                    {/* {errors.phoneNumber && <p className="error-text" >{errors.phoneNumber}</p>} */}
                            </div>
                            
                        </div>
                        <div className='password-inputs'>
                            <div className='rightform-inputs'>
                                <p>Password</p>
                                <div className='pass-inputs'>
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder='xxxxxxx'
                                        name='password' 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    
                                        <VisibilityOffOutlinedIcon onClick={handlePasswordVisibility} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={inputStyle} className='pass-icons' />
                                </div>
                                    {/* {errors.password && <p className="error-text" >{errors.password}</p>} */}
                            </div>
                                        
                            <div className='rightform-inputs'>
                                <p>Confirm Password</p>
                                <div className='pass-inputs'>
                                    <input 
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder='xxxxxxx'
                                        name='confirm_password'
                                        value={confirm_password}
                                        onChange={(e) => setConfirm_Password(e.target.value)}
                                    />
                                    
                                            <VisibilityOffOutlinedIcon onClick={handlePasswordVisibility} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={inputStyle} className='pass-icons' />
                                </div>
                                            {/* {errors.confirm_password && <p className="error-text" >{errors.confirm_password}</p>} */}
                            </div>
                        </div>
                    </div>
                    <div className='form-terms'>
                        <input type='checkbox' name='agree' value='agree' />
                        <p>I accept all <span>Terms and Conditions</span></p>
                    </div>
                    <div className='form-submit'>
                        <button type='submit'>
                            {/* <Link style={{textDecoration:"none", color:"#fff"}} to={'/patient-login'}> */}
                                CREATE ACCOUNT
                            {/* </Link> */}
                            </button>
                    </div>
                </form>
                </div>
      )}
    </div>
  );
};



    export default PatientRegForm;
   

    







