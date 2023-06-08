import React from 'react'
import Leftside from '../hospital-login/leftside'
import Rightside from '../hospital-login/rightside'


export default function hospitallogin() {
  return (
    <div className='container'>
      <div className='main-container'>

        <Leftside />
        <Rightside />
      </div>
    </div>
  )
}
