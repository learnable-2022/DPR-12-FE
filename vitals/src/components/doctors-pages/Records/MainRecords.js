import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import RecordTop from './RecordTop'
import Table from './Table'
import RecordBLeft from './RecordBLeft'
import RecordBRight from './RecordBRight'
import Vitals from '../../main/vitals'
import '../doctorspages.css'


// const navigate = useNavigate();


// const handleNavigate = () => {
//   navigate('/updaterecord')
// }


export default function MainRecords() {
  return (
    <div className='the-dashboard'>

      <div className='main-access'>
        <RecordTop />
        <div className='main-access-vitals'>
          <Vitals />
        </div>
        <Table />
        <div className='record-main'>
          <RecordBLeft />
          <RecordBRight />
        </div>

        <Link to={'/updaterecords'}><button className='add-btn' style={{right:'0'}}>UPDATE</button></Link>
      </div>  
      
    </div>
  )
}
