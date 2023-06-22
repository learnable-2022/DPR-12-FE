import React, { useState, useEffect } from 'react';
import './main.css';
import Greeting from './greeting';
import Vitals from './vitals';
import Medications from './medications';
import HospitalHistory from './hospitalhistory';
import NewMultiForm from '../doctors-pages/NewRecord/NewMultiForm';

export default function Main() {
  const token = localStorage.getItem('user');
  const [userDetails, setUserDetails] = useState(null);
  const [healthRecord, setHealthRecord] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('https://vitals-8myt.onrender.com/vitals/patients/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error fetching user details');
        }
        const data = await response.json();
        console.log(data);
        setUserDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [token]);

  useEffect(() => {
    const fetchHealthRecord = async () => {
      try {
        const healthResponse = await fetch('https://vitals-8myt.onrender.com/vitals/patients/healthRecords', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!healthResponse.ok) {
          throw new Error('Error fetching health record');
        }
        const healthData = await healthResponse.json();
        console.log(healthData);
        setHealthRecord(healthData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHealthRecord();
  }, [token]);

  if (!userDetails || !healthRecord) {
    return <p>Loading...</p>;
  }

  return (
    <div className='main'>
      <Greeting userDetails={userDetails} />
      <Vitals healthRecord={healthRecord} />

      <div className='main-lower'>
        <Medications />
        <HospitalHistory />
      </div>
    </div>
  );
}
