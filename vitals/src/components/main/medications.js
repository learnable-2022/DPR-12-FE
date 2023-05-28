import React from 'react'
import './main.css'

export default function medications() {
  return (
    <div>
      <div className='medications-container'>
        <div className='medications'>
            <h3>Medications</h3>
            <button className='today'>Today</button>
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
                <div className='radio-group'>
                    <label>
                        <input type='radio' value='dose' name='dosage1' className='radio' /><span></span>
                    </label>
                    <label>
                        <input type='radio' value='no-dose' name='dosage1' className='radio'/><span></span>
                    </label>                   
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
                <div className='radio-group'>
                    <label>
                        <input type='radio' value='doses' name='dosage2' className='radio' /><span></span>
                    </label>
                    <label>
                        <input type='radio' value='no-dose' name='dosage2' className='radio'/><span></span>
                    </label>                   
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
                <div className='radio-group'>
                    <label>
                        <input type='radio' value='dose' name='dosage3' className='radio' /><span></span>
                    </label>
                    <label>
                        <input type='radio' value='no-dose' name='dosage3' className='radio'/><span></span>
                    </label>                   
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
                <div className='radio-group'>
                    <label>
                        <input type='radio' value='dose' name='dosage4' className='radio' /><span></span>
                    </label>
                    <label>
                        <input type='radio' value='no-dose' name='dosage4' className='radio'/><span></span>
                    </label>                   
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
                <div className='radio-group'>
                    <label>
                        <input type='radio' value='dose' name='dosage5' className='radio' /><span></span>
                    </label>
                    <label>
                        <input type='radio' value='no-dose' name='dosage5' className='radio'/><span></span>
                    </label>                   
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
                <div className='radio-group'>
                    <label>
                        <input type='radio' value='dose' name='dosage6' className='radio' /><span></span>
                    </label>
                    <label>
                        <input type='radio' value='no-dose' name='dosage6' className='radio'/><span></span>
                    </label>                   
                </div>
            </div>
            <div className='drug last-item'>              
                <div className='dosage'>
                    <input type='checkbox' className='checkbox' />
                    <div>
                    <p className='drug-name'>Amphetamin 70mmg</p>
                    <p className='dose'>2 tablets a day</p>
                    </div>
                </div>
                <div className='radio-group'>
                    <label>
                        <input type='radio' value='dose' name='dosage7' className='radio' /><span></span>
                    </label>
                    <label>
                        <input type='radio' value='no-dose' name='dosage7' className='radio'/><span></span>
                    </label>                   
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
