import React, { useEffect, useState } from 'react'
import MainRecords from './MainRecords'
import Sidebar from '../../doctors-pages/sidebar/sidebar'
import '../../doctors-pages/doctorspages.css'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Records() {

  const docToken = localStorage.getItem('doctor');
  const [docDetails, setDocDetails] = useState(null);
  

  useEffect(() => {
    const fetchDocDetails = async () => {
      try {
        const docResponse = await fetch('https://vitals-8myt.onrender.com/vitals/doctors/', {
          headers: {
            Authorization: `Bearer ${docToken}`,
          },
        });
        if (!docResponse.ok) {
          throw new Error('Error fetching Doc details');
        }
        const docData = await docResponse.json();
        console.log(docData);
        setDocDetails(docData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocDetails();
  }, [docToken]);

  

  if (!docDetails) {
    return <Box sx={{ display: 'flex', margin: 'auto', left:'50%' }}>
    <CircularProgress />
  </Box>;
  }
  return (
    <div>
      <div className='access-patients-main'>
        <Sidebar />
        <MainRecords docDetails={docDetails} />
        
        </div>
    </div>
  )
}
