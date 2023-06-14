import React from 'react'
import RecordTop from './RecordTop'
import Table from './Table'
import RecordBLeft from './RecordBLeft'
import RecordBRight from './RecordBRight'
import '../doctorspages.css'



export default function MainRecords() {
  return (
    <div>

      <div className='main-access'>
      <RecordTop />
      <Table />
      <div className='record-main'>
        <RecordBLeft />
        <RecordBRight />
      </div>

      <button className='add-btn'>ADD TO RECORD</button>

    </div>  
      
    </div>
  )
}
