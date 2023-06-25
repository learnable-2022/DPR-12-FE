import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RecordTop from './RecordTop';
import Table from './Table';
import RecordBLeft from './RecordBLeft';
import RecordBRight from './RecordBRight';
import Vitals from './vitals';
import '../doctorspages.css';

export default function MainRecords({ docDetails }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const patient_id = searchParams.get('patient_id');
  const doctorId = docDetails.data._id;
  const token = localStorage.getItem('doctor');
  const [patientRecords, setPatientRecords] = useState([]);

  useEffect(() => {
    
    fetchPatientRecords();
  }, [doctorId, patient_id]);

  const fetchPatientRecords = async () => {
    try {
      const response = await fetch(
        `https://vitals-8myt.onrender.com/vitals/doctors/hcps/6496dbca3286be350e7fdd34/healthRecord/patients/${patient_id}/healthRecord`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Error fetching patient records');
      }

      const data = await response.json();
      console.log(data);
      setPatientRecords(data);
    } catch (error) {
      console.log('Error fetching patient records:', error);
    }
  };

  return (
    <div className='the-dashboard'>
      <div className='main-access'>
        <RecordTop docDetails={docDetails} />
        <div className='main-access-vitals'>
          <Vitals patientRecords={patientRecords} />
        </div>
        <Table patientRecords={patientRecords} />
        <div className='record-main'>
          <RecordBLeft patientRecords={patientRecords} />
          <RecordBRight patientRecords={patientRecords} />
        </div>
      </div>
    </div>
  );
}
