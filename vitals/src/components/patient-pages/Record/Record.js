import React, { useState, useEffect} from 'react'
import Sidebar from '../../sidebar/sidebar'
import MainRecord from './MainRecord'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

export default function Record() {

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
    return <Box sx={{ display: 'flex', margin: 'auto' }}>
    <CircularProgress />
  </Box>
  }



  return (
    <div>
      <div className='hcp-main'>
        <Sidebar />
        <MainRecord  userDetails={userDetails} healthRecord={healthRecord}/>
      </div>
    </div>
  )
}
