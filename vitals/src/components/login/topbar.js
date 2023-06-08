import React from 'react'
import logo from '../../images/VitalsLogo.svg'
import './login.css'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <div>
      <div className='top-bar'>
        <Link to='/' ><img className='topbar-img' src={logo} alt='' /></Link>
      </div>
    </div>
  )
}
