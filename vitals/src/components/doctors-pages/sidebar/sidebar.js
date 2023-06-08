import React from 'react'

import {Link} from 'react-router-dom'

import Links from './links.js'
import logo from '../../../images/VitalsLogo.svg'
import ani from '../../../images/dr.ani.svg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './sidebar.css'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Link to="/" ><img src={logo} alt='logo' /> </Link>

      <div className='side-container'>    
            <form  className='searchbar'>
                <input type="text" />
                <button type='submit'>Search</button>
            </form>
      </div> 

      <Links />
      
      <div className='details-container'>
        <div className='details'>
            <img src={ani} alt="profile" />
            <div className='details-details'>
                <p className='name'>Dr. Jonathan .A.</p>
                <p className='email'>jon-ani@esuth.com</p>
            </div>
            <button><LogoutOutlinedIcon className='logout-icon' /></button>
        </div>
      </div>

      
    </div>
  )
}
