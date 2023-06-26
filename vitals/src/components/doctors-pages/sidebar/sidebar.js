import React,{useState} from 'react'

import {Link, NavLink} from 'react-router-dom'


import logo from '../../../images/VitalsLogo.svg'
import ani from '../../../images/dr.ani.svg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './sidebar-doc.css'
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';


export default function Sidebar() {
 
  const [show, setShow] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  const handleLogout = () => {
    // const token = window.localStorage.getItem('user')
    window.localStorage.removeItem('doctor');
    window.location.href = '/doctor-login';
  }

  return (
    <div>

        <main className={show ? 'space-toggle' : null}>
          { !show && 
            <header className={`header ${show ? 'space-toggle-2' : null}`}>
                  {<div className={`header-toggle-2`} onClick={() => {setShow(!show);}}>
                    <MenuIcon />
                  </div>}
            </header>}

          <aside className={`sidebar ${show ? 'show' : null}`}>
              <nav className='nav'>

                <div>
                <div className={`header-toggle`} onClick={() => {setShow(!show);}}>
                  <MenuIcon className='header-toggle' />
                </div>
                  <NavLink to='/' className='nav-logon'>
                    <HomeOutlinedIcon className='nav-logo-icon' />
                    <span className='nav-logo-name'>Homepage</span>
                  </NavLink>

                  <div className='nav-list'>
                    <NavLink to='/doctordashboard' className='nav-link'>
                      <DashboardOutlinedIcon className='nav-link-icon' />
                      <span className='nav-logo-name'>Dashboard</span>
                    </NavLink>
                    <NavLink to='/patients' className='nav-link'>
                      <FolderSharedOutlinedIcon className='nav-link-icon' />
                      <span className='nav-logo-name'>Patients</span>
                    </NavLink>
                  </div>
                </div>

                <div className='details-container'>
                  <div>
                    <Link onClick={handleLogout} className='nav-link'>
                      <LogoutOutlinedIcon className='nav-link-icon' />
                      <span className='nav-logo-name'>Logout</span>
                    </Link>
                    
                  </div>
                </div>

              </nav>
          </aside>
        </main>









      {/* <div className='sidez-container'> 
          <div className='logo-bar'>
            <Link to="/" ><img src={logo} alt='logo' /> </Link>
            
          </div>   
            <form  className='searchbar'>
                <input type="text" placeholder='Search' />
            </form>

            <Links />
      </div> 

      
      
      <div className='details-container'>
        <div className='details'>
            <img src={ani} alt="profile" />
            <div className='details-details'>
                <p className='name'>Dr. Jonathan .A.</p>
                <p className='email'>jon-ani@esuth.com</p>
            </div>
            <Link to={'/doctor-login'}><button><LogoutOutlinedIcon className='logout-icon' /></button></Link>
        </div>
      </div> */}

      
    </div>
  )
}





{/* <div className='menu-icon-container'>
            <button  className='sidebar-btn'><MenuIcon className='menu-icon' style={{color:"#1565c0", float:"right", fontSize:'30px'}} /></button>
          </div> */}