import React from 'react'
import esut from '../../../images/esuth.svg'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Table from './Table';
import '../hcp-pages.css'


export default function MainDashboard({hcpDetails}) {
  return (
      <div className='hcp-container'>
        <div className='hcp-dash-title'>
            <h4>Dashboard</h4>
            <div className='dash-logged-in'>
                <p>Logged in as: <span>{hcpDetails.data.name}</span></p>
                <img src={esut} alt='' />
            </div>    
        </div>
        <div className='hcp-dash-mid'>
            <div className='icon-text'>
                <div className='icontainer'>
                    <GroupOutlinedIcon className='the-icon' />
                </div>
                <div className='text-tainer'>
                    <h3>1000</h3>
                    <p>Doctors</p>
                </div>
            </div>
            <div className='icon-text'>
                <div className='icontainer'>
                    <GroupOutlinedIcon className='the-icon' />
                </div>
                <div className='text-tainer'>
                    <h3>900</h3>
                    <p>Patients</p>
                </div>
            </div>
            <div className='icon-text'>
                <div className='icontainer'>
                    <GroupOutlinedIcon className='the-icon' />
                </div>
                <div className='text-tainer'>
                    <h3>600</h3>
                    <p>Appointments</p>
                </div>
            </div>
            <div className='icon-text'>
                <div className='icontainer'>
                    <GroupOutlinedIcon className='the-icon' />
                </div>
                <div className='text-tainer'>
                    <h3>1900</h3>
                    <p>Documents</p>
                </div>
            </div>
            
        </div>
        <div>
            <Table />
        </div>
        <div></div>
      </div>
  )
}
