import React, {useState, useEffect} from 'react'
import Table from './Table'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import PeopleIcon from '@mui/icons-material/People';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';

export default function DashboardBottom() {

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
      console.log(data)
      setPatients(data);
    } catch (error) {
      console.log('Error fetching patients:', error);
    }
  };

  const handleClick = () => {
    window.location.href =('/newrecord');
  }


  return (
    <div className='create-container'>
      <div onClick={handleClick} className='create-record'>
        <AddCircleOutlinedIcon className='new-record-icon' />
        <span className='new-record-text'>
          <p>Create New Health Record</p>
          <AddchartOutlinedIcon />
        </span>
      </div>     
      <div className='totale'>
        <PeopleIcon className='new-record-icon' />
        <span className='new-rec'>
          <h4>{patients.totalNo}</h4>
          <span className='new-record-text-2'>
            <p>Patients Treated</p>
            <HealingOutlinedIcon />
          </span>  
        </span>
      </div>         
      <div className='totale'>
        <LayersOutlinedIcon className='new-record-icon' />
        <span className='new-rec'>
          <h4>291</h4>
          <span className='new-record-text-2'>
            <p>Health Records Created</p>
            <MedicalInformationOutlinedIcon />
          </span>  
        </span>
      </div>         
    </div>
  )
}
