import React from 'react'
import Topbar from './topbar'
import Body from './body'
import './register.css'

export default function Home() {
  return (
    <div className='home-container'>
        <Topbar />
        <Body />
    </div>
  )
}
