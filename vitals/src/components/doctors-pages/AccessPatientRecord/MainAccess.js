import React from 'react'
import Patient from './Patient'
import AccessTop from './AccessTop'

export default function MainAccess(props) {
  return (
    <div>
        
        <div className='main-access'>
            <AccessTop />

             <p className='access-directory'>Dashboard - Patient Profile</p> 

            <div className='main-access-patient'>

              <Patient image="chioma.svg" name="Chioma Asadu" age={67} gender="Female" /> 
              <Patient image="uchenna.svg" name="Uchenna Mayowa" age={4} gender="Male" /> 
              <Patient image="emmanuella.svg" name="Emmanuella Simon" age={28} gender="Female" /> 
              <Patient image="emmanuella.svg" name="Emmanuella Simon" age={28} gender="Female" /> 
              <Patient image="emmanuella.svg" name="Emmanuella Simon" age={28} gender="Female" /> 
              <Patient image="emmanuella.svg" name="Emmanuella Simon" age={28} gender="Female" /> 
            </div>
            
        </div>
        
      
    </div>
  )
}
