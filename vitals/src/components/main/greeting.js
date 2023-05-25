import React from 'react'
import './main.css'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

export default function Greeting() {
  return (
    <div className='greeting-container'>
      <div className='greeting'>
        <h3>Welcome Sarah <span>&#128075;&#127996;</span></h3>
        <p>Track & control your medical records from this dashboard.</p>
      </div>
      <div className='buttons'>
        <button className='share'> <FileUploadOutlinedIcon />Share</button>
        <button className='download'>Download CSV</button>
      </div>
    </div>
  )
}
