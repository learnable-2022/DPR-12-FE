import React from 'react'
import './main.css'
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';

export default function vitals() {
  return (
    <div className='vitals-container'> 
        <div className='vitals'>
            <h3>Vitals Signs</h3>
            <h3>10/06/2023</h3>
        </div>
        <div className='sign-container'>
            <div className='sign'>
                <div className='icon-container'>
                    <BloodtypeOutlinedIcon />
                </div>
                <div className='description'>
                <p className='weight'>100 / 70 mmg</p>
                <small>Blood pressure</small>
                </div>
            </div>
            <div className='sign'>
                <div className='icon-container'>
                    <MonitorHeartOutlinedIcon />
                </div>
                <div className='description'>
                <p className='weight'>89 bpm</p>
                <small>Heart Rate</small>
                </div>
            </div>
            <div className='sign'>
                <div className='icon-container'>
                    <GasMeterOutlinedIcon />
                </div>
                <div className='description'>
                <p className='weight'>83 mg/d</p>
                <small>Blood Sugar</small>
                </div>
            </div>
            <div className='sign'>
                <div className='icon-container'>
                    <DeviceThermostatOutlinedIcon />
                </div>
                <div className='description'>
                <p className='weight'>36.7</p>
                <small>Temperature</small>
                </div>
            </div>
            <div className='sign'>
                <div className='icon-container'>
                    <BlurOnOutlinedIcon />
                </div>
                <div className='description'>
                <p className='weight'>98%</p>
                <small>Oxygen</small>
                </div>
            </div>
        </div>
    </div>
  )
}
