import React from 'react'
import Topbar from './topbar'
import Body from './body'
import './login.css'

export default function Login() {
  return (
    <div className='login-body'>
      <Topbar />
      <Body />
    </div>
  )
}
