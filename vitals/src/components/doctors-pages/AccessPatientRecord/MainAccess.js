import React, { useState, useEffect } from 'react';
import Patient from './Patient';
import AccessTop from './AccessTop';
import '../doctorspages.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function MainAccess(props) {
  const token = localStorage.getItem('doctor');
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('https://vitals-8myt.onrender.com/vitals/doctors/hcps/64878d5317fe4084f0d80049/healthRecord/patients', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching patients');
      }

      const data = await response.json();
      console.log(data.totalPatients)
      setPatients(data.totalPatients);
    } catch (error) {
      console.log('Error fetching patients:', error);
    }
  };

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
        // console.log(docData);
        setDocDetails(docData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocDetails();
  }, [docToken]);

  

  if (!docDetails) {
    return <Box sx={{ display: 'flex', margin: 'auto' }}>
    <CircularProgress />
  </Box>;
  }

  return (
    <div className='the-dashboard'>
      <div className='main-accesss'>
        <AccessTop docDetails={docDetails} />

        <p className='access-directory'>Dashboard - Patient Profile</p>

        <div className='main-access-patientt'>
          {patients.length === 0 ? (
            <p>You have no patient history.</p>
          ) : (
            patients.map((patient) => (
              <Patient patients={patients} key={patient._id} patient={patient} />
            ))
          )}
        </div>
        <br />
        <br />
        {/* <Link to='/newrecord'>
          <button className='nav-btn'>CREATE HEALTH RECORD</button>
        </Link> */}
        <br />
      </div>
    </div>
  );
}
