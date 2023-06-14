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

              <Patient image="chioma.svg" name="Jennifer Muofunanya" age={37} gender="Female" /> 
              <Patient image="uchenna.svg" name="Uchenna Mayowa" age={4} gender="Male" /> 
              <Patient image="sarah.svg" name="Sarah Umeh" age={28} gender="Female" /> 
              <Patient image="emmanuella.svg" name="Emmanuella Simon" age={10} gender="Female" /> 
              <Patient image="valentina.svg" name="Valentina Chidumeh" age={34} gender="Female" /> 
              <Patient image="ifeanyi.svg" name="Ifeanyi Okafor" age={26} gender="Male" /> 
              <Patient image="christian.svg" name="Christian Ndukwe" age={21} gender="Male" /> 
  
            </div>
            
        </div>
        
      
    </div>
  )
}
