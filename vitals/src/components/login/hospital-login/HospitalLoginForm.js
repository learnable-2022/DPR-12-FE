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
        console.log(data.message);
        console.log("Success");
        setMessage('Login Successful')
        localStorage.setItem("user-info", JSON.stringify(data));
        navigate("/hospitaldashboard")

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
                                 
                            <EmailOutlinedIcon/></div>
                    </div>
                    
                    <div className='right-input'>
                        <p>Password</p>
                        <div className='rightside-input'>
                            <input
                                type="password" 
                                placeholder='xxxxxxxx' 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <VisibilityOffOutlinedIcon /></div>
                    </div>
                    <div className='right-box' >
                        <div className='right-checkbox'>
                            <input type="checkbox" value='remember' />
                            <p>Remember Me</p>
                        </div>
                        <p>Forgot Password?</p>

                    </div>

                    <button type='submit' >LOGIN</button>
                    
                </form>
        </div>
        )
  };


  


  export default HospitalLoginForm;