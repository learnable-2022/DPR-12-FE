import React from 'react'
import './main-records.css'
import '../..//doctors-pages/doctorspages.css'

export default function RecordBRight() {
  return (
    <div>
      <div className='medications-container'>
        <div className='medications'>
            <h3>Lab Results</h3>

            <p className="freq">Frequency</p>
        </div>

        <div className='drug-container'>
            <div className='drug'>              
                <div className='dosage'>
                    <input type='checkbox' className='checkbox' />
                    <div>
                    <p className='drug-name'>Amphetamin 70mmg</p>
                    <p className='dose'>2 tablets a day</p>
                    </div>
                </div>
                <div className='frequency'>
                    <p className='drug-text'>Less Frequent</p><span className='red-label'> • </span>                  
                </div>
            </div>
            <div className='drug'>              
                <div className='dosage'>
                    <input type='checkbox' className='checkbox' />
                    <div>
                    <p className='drug-name'>Amphetamin 70mmg</p>
                    <p className='dose'>2 tablets a day</p>
                    </div>
                </div>
                <div className='frequency'>
                    <p className='drug-text'>Frequent</p><span className='green-label'> • </span>                  
                </div>
            </div>
            <div className='drug'>              
                <div className='dosage'>
                    <input type='checkbox' className='checkbox' />
                    <div>
                    <p className='drug-name'>Amphetamin 70mmg</p>
                    <p className='dose'>2 tablets a day</p>
                    </div>
                </div>
                <div className='frequency'>
                    <p className='drug-text'>Frequent</p><span className='green-label'> • </span>                  
                </div>
            </div>
            <div className='drug'>              
                <div className='dosage'>
                    <input type='checkbox' className='checkbox' />
                    <div>
                    <p className='drug-name'>Amphetamin 70mmg</p>
                    <p className='dose'>2 tablets a day</p>
                    </div>
                </div>
                <div className='frequency'>
                    <p className='drug-text'>Less Frequent</p><span className='red-label'> • </span>                  
                </div>
            </div>
            <div className='drug'>              
                <div className='dosage'>
                    <input type='checkbox' className='checkbox' />
                    <div>
                    <p className='drug-name'>Amphetamin 70mmg</p>
                    <p className='dose'>2 tablets a day</p>
                    </div>
                </div>
                <div className='frequency'>
                    <p className='drug-text'>Less Frequent</p><span className='red-label'> • </span>                  
                </div>
            </div>
            <div className='drug'>              
                <div className='dosage'>
                    <input type='checkbox' className='checkbox' />
                    <div>
                    <p className='drug-name'>Amphetamin 70mmg</p>
                    <p className='dose'>2 tablets a day</p>
                    </div>
                </div>
                <div className='frequency'>
                    <p className='drug-text'>Frequent</p><span className='green-label'> • </span>                  
                </div>
            </div>
            <div className='drug'>              
                <div className='dosage'>
                    <input type='checkbox' className='checkbox' />
                    <div>
                    <p className='drug-name'>Amphetamin 70mmg</p>
                    <p className='dose'>2 tablets a day</p>
                    </div>
                </div>
                <div className='frequency'>
                    <p className='drug-text'>Frequent</p><span className='green-label'> • </span>                  
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}
