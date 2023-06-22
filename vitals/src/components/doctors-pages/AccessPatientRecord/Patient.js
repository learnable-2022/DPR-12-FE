import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Popup from './Popup'
import './Popup.css'
import RecordTop from '../Records/RecordTop';
import patientsData from '../../../patientsData.json'
import '../doctorspages.css'


export default function Patient(props) {

  
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
    // navigate('/patientrecords');
    navigate(`/patientrecords?patientId=${patientsData.PatientID}`);
  }

  return (
    <div className='main-patient'>
      <div className='patient-wrap'>
        <div className='patient-wrapper'>
          <div className='patient-profile-details'>
              <img className='avatar' src={`../../../../images/${props.image}`} alt='' />
              <div className='profile-detailss'>
                  <h6>{props.name}</h6>
                  <p>Age: {props.age} years old  |  Gender: {props.gender}</p>
              </div>
          </div>
          <div className='patient-actions'>
              <div className='patient-btns'>
                  <button onClick={handleNavigate} className='share-btn'>View Medical Records</button>
                  {/* <button onClick={() => setButtonPopup(true)} className='nav-btn'>View Profile</button> */}
              </div>
          </div>
        </div>
      </div>

    {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
      <p className='popup-text'>{props.name} has to give you permission to view and edit their medical records</p>
    </Popup>

    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
      <p className='popup-text'>{props.name} has to give you permission to view and edit their medical records</p>
    </Popup> */}



    </div>
  )
}
