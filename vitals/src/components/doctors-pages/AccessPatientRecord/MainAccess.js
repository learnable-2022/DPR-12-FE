import React, {useState, useEffect} from 'react'
import Patient from './Patient'
import AccessTop from './AccessTop'
import '../doctorspages.css'
import { Link } from 'react-router-dom'

export default function MainAccess(props) {

  const [patients, setPatients] = useState([]);

    useEffect(() => {
      fetchPatients();
    }, []);

    const fetchPatients = async () => {
      try {
        const response = await fetch('/api/doctors/patients'); // Replace with your API endpoint
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.log('Error fetching patients:', error);
      }
    };

  
  return (
    <div className='the-dashboard'>
        
        <div className='main-accesss'>
            <AccessTop />

            <p className='access-directory'>Dashboard - Patient Profile</p> 

            <div className='main-access-patient'>

            {patients.map((patient) => (
               
              <li key={patient.id}>
                {patient.name}
                <Patient image="chioma.svg" name="Jennifer Muofunanya" age={37} gender="Female" />
              </li>
            ))}

              <Patient image="chioma.svg" name="Jennifer Muofunanya" age={37} gender="Female" /> 
              {/* <Patient image="uchenna.svg" name="Uchenna Mayowa" age={4} gender="Male" /> 
              <Patient image="sarah.svg" name="Sarah Umeh" age={28} gender="Female" /> 
              <Patient image="emmanuella.svg" name="Emmanuella Simon" age={10} gender="Female" /> 
              <Patient image="valentina.svg" name="Valentina Chidumeh" age={34} gender="Female" /> 
              <Patient image="ifeanyi.svg" name="Ifeanyi Okafor" age={26} gender="Male" /> 
              <Patient image="christian.svg" name="Christian Ndukwe" age={21} gender="Male" />  */}
  
            </div>   
            <br /><br />
            <Link to="/newrecord"><button className='nav-btn'>CREATE HEALTH RECORD</button></Link> <br />        
        </div>
        
      
    </div>
  )
}
