import React from 'react'
import './main-records.css'
import '../..//doctors-pages/doctorspages.css'
import greenchart from '../../../images/green-chart.svg'
import redchart from '../../../images/red-chart.svg'

export default function RecordBRight() {
  return (
    <div>
            <div className='medicationzz-container'>
                <div className='medications'>
                    <h3>Lab Results</h3>

                    <p className="freq">Frequency</p>
                </div>

                <div className='drug-container'>
                    
                    <div className='drug'>              
                        <div className='dosage'>
                            {/* <input type='checkbox' className='checkbox' /> */}
                            <div>
                            <p className='drug-name'>Potassium</p>
                            {/* <p className='dose'>2 tablets a day</p> */}
                            </div>
                        </div>
                            <p className='drug-name'>0.7%</p>
                        <div className='frequency'>
                            <img src={greenchart} alt='' />
                            {/* <p className='drug-text'>Frequent</p><span className='green-label'> • </span>                   */}
                        </div>
                    </div>
                    
                    <div className='drug'>              
                        <div className='dosage'>
                            {/* <input type='checkbox' className='checkbox' /> */}
                            <div>
                            <p className='drug-name'>Sensitivity</p>
                            {/* <p className='dose'>2 tablets a day</p> */}
                            </div>
                        </div>
                            <p className='drug-name'>0.33%</p>
                        <div className='frequency'>
                            <img src={redchart} alt='' />
                            {/* <p className='drug-text'>Frequent</p><span className='green-label'> • </span>                   */}
                        </div>
                    </div>
                    
                    <div className='drug'>              
                        <div className='dosage'>
                            {/* <input type='checkbox' className='checkbox' /> */}
                            <div>
                            <p className='drug-name'>Specificity</p>
                            {/* <p className='dose'>2 tablets a day</p> */}
                            </div>
                        </div>
                            <p className='drug-name'>0.21%</p>
                        <div className='frequency'>
                            <img src={greenchart} alt='' />
                            {/* <p className='drug-text'>Frequent</p><span className='green-label'> • </span>                   */}
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}
