import React from 'react'
import ani from '../../../images/dr.ani.svg'

export default function DashboardMid() {
  return (
    <div className='dash-mid-container'>
      <div className='dash-doc'>
        <img className='doc-img' src={ani} alt=''/>
        <div className='doctor-details'>    
            <div className='doc-details'>
                <h4>Dr. Jonathan Ani. S <span className='doc-status'>Resident Doctor</span></h4>
                
            </div>
            <div className='doc-info'>
                <div>

                    <label>Designation:</label><br />
                    <p>Paediatrics</p>
                </div>
                <div>

                    <label>Resident ID:</label><br />
                    <p>SPKND-JANI</p>
                </div>
                <div>

                    <label>HMO:</label><br />
                    <p>Enugu State University Teaching Hospital (Parklane)</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
