import React, { useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Sidebar from '../sidebar/sidebar'
import MainDashboard from '../Dashboard/MainDashboard'
import '../hcp-pages.css'


export default function Dashboard() {

  const hcpToken = localStorage.getItem('hcp-token');
  const [hcpDetails, setHcpDetails] = useState(null);
  

  useEffect(() => {
    const fetchHcpDetails = async () => {
      try {
        const hcpResponse = await fetch('https://vitals-8myt.onrender.com/vitals/hcps/', {
          headers: {
            Authorization: `Bearer ${hcpToken}`,
          },
        });
        if (!hcpResponse.ok) {
          throw new Error('Error fetching Doc details');
        }
        const hcpData = await hcpResponse.json();
        console.log(hcpData);
        setHcpDetails(hcpData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHcpDetails();
  }, [hcpToken]);

  

  if (!hcpDetails) {
    return <Box sx={{ display: 'flex', margin: 'auto', left:'50%' }}>
    <CircularProgress />
  </Box>;
  }

  return (
    <div>
      <div className='hcp-main'>
        <Sidebar />
        <MainDashboard hcpDetails={hcpDetails} />
      </div>
    </div>
  )
}
