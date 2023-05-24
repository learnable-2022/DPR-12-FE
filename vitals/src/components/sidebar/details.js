import React from 'react'
import sarah from '../../images/sarah.svg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import './details.css'

export default function Details() {
  return (
    <div className='details-container'>
        <div className='details'>
            <img src={sarah} alt="profile" />
            <div>
                <p className='name'>Sarah</p>
                <p className='email'>omaasa@team12.com</p>
            </div>
            <button><LogoutOutlinedIcon /></button>
        </div>
    </div>
  )
}
