import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Popup from './Popup'
import './Popup.css'
import RecordTop from '../Records/RecordTop';
import patientsData from '../../../patientsData.json'
import '../doctorspages.css'
import user from '../../../images/avatar-icon.jpeg'
import profile from '../../../images/avatar-icon.jpeg'
import './patient.css'


export default function Patient(props, {patients}) {

  
  const handleCancel = () => {
    console.log('Cancel button clicked');
    // Perform cancel logic here
  };

  const handleRequestAccess = (walletAddress) => {
    console.log('Request Access button clicked');
    console.log('Wallet Address:', walletAddress);
    // Perform request access logic here
  };

  
  // const [buttonPopup, setButtonPopup] = useState(false)
  const navigate = useNavigate();

  const handleNavigate =() => {
    navigate(`/patientrecord?patient_id=${props.patient._id}`);

  }

  return (
    <div className='main-patient-container'>
      <div className='doc-pat'>
        <img src={profile} alt='' />
      </div>
      <div className='doc-pat-text'>
        <h4>{props.patient.firstName} {props.patient.lastName}</h4>
        <div className='doc-pat-details'>
          <p>Patient ID: <br /> <span>{props.patient._id}</span> </p>
          <p>Allergies: <br /> <span>{props.patient.allergies}</span> </p>
          <p>Gender: <span></span>{props.patient.gender}</p>
        </div>
      </div>
      <button onClick={handleNavigate} className='doc-pat-btn'>VIEW PATIENT RECORD</button>
    </div>
  )
}
