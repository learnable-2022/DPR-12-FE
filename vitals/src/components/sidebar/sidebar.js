import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import Links from './links.js'
import logo from '../../images/VitalsLogo.svg'
import usericon from '../../images/profile-icon.svg'
import sarah from '../../images/sarah.svg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './sidebar-pat.css'


export default function Sidebar() {

  const navigate = useNavigate();

  const token = localStorage.getItem('user');
  // console.log(token);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('https://vitals-8myt.onrender.com/vitals/patients/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Error fetching user details');
        }
        const data = await response.json();
        console.log(data);
        setUserDetails (data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [token]);

  if (!userDetails) {
    return <p>Loading user details...</p>;
  }
  
    function Logout(){
    localStorage.removeItem('user');
    navigate("/patient-login");
}

  
  return (
    <div className='patient-main-sidebar'>

    
      <div className='the-sidebar'>

        <Link to="/" ><img src={logo} alt='logo' /> </Link>

        <div className='side-container'>    
              <form  className='searchbar'>
                  <input type="text" placeholder='Search' />
                  {/* <button type='submit'>Search</button> */}
              </form>
        </div> 

        <Links />      
      </div>


      <div className='details-container'>
          <div className='details'>
              <img src={usericon} alt="profile" />
              <div>
                  <p className='name'>{userDetails.data.firstName + " " || "Seyi"}{userDetails.data.lastName}</p>
                  <p className='email'>{userDetails.data.email || "seyi@gmail.com"}</p>
              </div>
              <button onClick={Logout} ><LogoutOutlinedIcon /></button>
          </div>
      </div>

    </div>
  )
}
