import React, { useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import '../../login/patient-login/patientlogin.css'
import { useNavigate } from 'react-router-dom';






const HospitalLoginForm = () => {


    const navigate = useNavigate();
    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/patientdashboard")
    //     }

    // },[]);

  const [registrationNo, setRegistrationNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


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


  const signIn = async (e) => {
    e.preventDefault();

    if (!registrationNo && !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://vitals-8myt.onrender.com/vitals/hcps/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ registrationNo, password }),
      });

      const data = await response.json();

    //   console.log(data);

      if (data.token) {
        // Authentication successful, customize user experience
        console.log(data);
        setMessage('Login Successful')
        localStorage.setItem("hcp-token", JSON.stringify(data.token));
        navigate("/hcp-dashboard")

      } else {
        setError('User does not exist');
      }
    } catch (error) {
      setError(error.message);
    }


};



        return(
        <div>
            {message && <p className='error-success'>{message}</p>}
            {error && <p className='error-text'>{error}</p>}
            <form onSubmit={signIn} className='login-form'>
            
                    <div className='right-input'>
                        <p>Registration Number</p>
                        <div className='rightside-input'>
                            <input
                                type="text" 
                                placeholder='e.g 440392'
                                onChange={(e) => setRegistrationNo(e.target.value)}
                            /> 
                                 
                            <EmailOutlinedIcon/>
                            
                        </div>
                    </div>
                    
                    <div className='right-input'>
                        <p>Password</p>
                        <div className='rightside-input'>
                            <input
                                type={passwordVisible ? 'text' : 'password'}  
                                placeholder='xxxxxxxx' 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <VisibilityOffOutlinedIcon onClick={handlePasswordVisibility} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={inputStyle} /></div>
                    </div>
                    <div className='right-box' >
                        <div className='right-checkbox'>
                            <input type="checkbox" value='remember' />
                            <p>Remember Me</p>
                        </div>
                        <p>Forgot Password?</p>

                    </div>

                    <button onClick={signIn} type='submit' >LOGIN</button>
                    
                </form>
        </div>
        )
  };


  


  export default HospitalLoginForm;