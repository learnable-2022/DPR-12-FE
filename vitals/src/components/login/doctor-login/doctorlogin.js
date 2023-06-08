import React from 'react'
import Leftside from './leftside'
import Rightside from './rightside'
import './doctorlogin.css'

export default function doctorlogin() {
  return (
    <div className='container'>
      <div className='main-container'>

        <Leftside />
        <Rightside />
      </div>
    </div>
  )
}
