import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/VitalsLogoBlue.svg'
import './landing.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }


  return (
    < >
        <nav className='navbar'>
            <img className='nav-logo' src={logo} alt='' />

            <div>
                <ul className='nav-links'>
                    {/* <li className='nav-link'><Link to='/' className='nav-item'>Home</Link></li>x */}
                    <li className='nav-link'><Link to='/' className='nav-item'>Products & Solutions</Link></li>
                    <li className='nav-link'><Link to='/' className='nav-item'>Resources</Link></li>
                    <li className='nav-link'><Link to='/' className='nav-item'>Pricing</Link></li>
                    <li className='nav-link'><Link to='/' className='nav-item'>Our Company</Link></li>
                </ul>
            </div>

            <Link to={'/register'} className='nav-btn'>LOGIN/REGISTER</Link>

                <button  onClick={showNavBar} style={{color:"white", float:'right',fontSize:'50px'}} className='menu-btn'><MenuIcon onClick={showNavBar} className='menu-icon' /></button>
            <div>

                <ul className='menu-links' ref={navRef}>
                    <button onClick={showNavBar} style={{color:"white", float:'right'}} className='close-btn'><CloseIcon className='close-icon'  /></button>
                    {/* <li className='menu-link'><Link to='/' className='menu-item'>Home</Link></li> */}
                    <li className='menu-link'><Link to='/' className='menu-item'>Products & Solutions</Link></li>
                    <li className='menu-link'><Link to='/' className='menu-item'>Resources</Link></li>
                    <li className='menu-link'><Link to='/' className='menu-item'>Pricing</Link></li>
                    <li className='menu-link'><Link to='/' className='menu-item'>Our Company</Link></li>
                    <Link to={'/register'} className='nav-btn'>LOGIN/REGISTER</Link>
                </ul>
            </div>
            
        </nav>
    </>
  )
}
