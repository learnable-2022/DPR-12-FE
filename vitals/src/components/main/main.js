import React, {useState, useEffect} from 'react'
import './main.css'
import Greeting from './greeting'
import Vitals from './vitals'
import Medications from './medications'
import HospitalHistory from './hospitalhistory'

export default function Main() {

  const token = localStorage.getItem('user');
  // console.log(token);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('https://vitals-8myt.onrender.com/vitals/patients/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Error fetching user details');
        }
        const data = await response.json();
        console.log(data);
        setUserDetails (data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [token]);

  if (!userDetails) {
    return <p>Loading user details...</p>;
  }


  return (
    <div className='main'>
      <Greeting userDetails={userDetails} />
      <Vitals />

        <div className='main-lower'>
            <Medications />
            <HospitalHistory />
            
        </div>
    </div>
    
  )
}
