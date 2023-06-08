import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/VitalsLogoBlue.svg'
import './landing.css'

export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <img className='nav-logo' src={logo} alt='' />

            <div>
                <ul className='nav-links'>
                    <li className='nav-link'><Link to='/' className='nav-item'>Home</Link></li>
                    <li className='nav-link'><Link to='/' className='nav-item'>Products & Solutions</Link></li>
                    <li className='nav-link'><Link to='/' className='nav-item'>Resources</Link></li>
                    <li className='nav-link'><Link to='/' className='nav-item'>Our Company</Link></li>
                    <li className='nav-link'><Link to='/' className='nav-item'>Contact</Link></li>
                </ul>
            </div>

            <Link to={'/register'} className='nav-btn'>LOGIN/REGISTER</Link>
            
        </nav>
    </>
  )
}
