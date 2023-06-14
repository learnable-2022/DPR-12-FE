import React, {useState} from 'react'
import './Popup.css'
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import metamask from '../../../images/metamask.png'
import { Link } from 'react-router-dom';

export default function Popup(props, {onCancel, onRequestAccess}) {

  const [showInputField, setShowInputField] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleRequestAccessClick = () => {
    setShowInputField(true);
  };

  const handleInputFieldChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleCancel = () => {
    setShowInputField(false);
    setWalletAddress('');
    // onCancel();
  };

  // const handleRequestAccess = () => {

  //   Navigate('/records')
  //   console.log(walletAddress)
  //   const apiUrl = `https://api.metamask.io/verify/${walletAddress}`;
  
  // fetch(apiUrl)
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.valid) {
  //       setVerificationStatus('success');
  //     } else {
  //       setVerificationStatus('fail');
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error verifying wallet:', error);
  //     setVerificationStatus('fail');
  //   });
  // };


  return (props.trigger) ? ( 


    <div className='popup'>
    <div className='popup-inner'>

    {showInputField ? (
        <div className='wallet-input'>
          {/* <img className='metamask' src={metamask} alt="metamask logo" /> */}
          <input className='large-inputs' type="text" value={walletAddress} onChange={handleInputFieldChange} placeholder='Enter OTP' />
          <div className='popup-btns'>
            <button onClick={handleCancel} className='close-btn'>Cancel</button>
            <Link to='/records'><button className='access-btn'>Submit</button></Link>
          </div>
        </div>
      ) : (
        <>
        <div className='pop-text'>
        <GppMaybeOutlinedIcon />
        {props.children}
        </div>
    
        <div className='popup-btns'>
            <button onClick={() => {props.setTrigger(false)}} className='close-btn'>Cancel</button>
            <button onClick={handleRequestAccessClick} className='access-btn'>Request Access</button>
        </div>
        </>
          )}
    </div>
    </div>
  
      ): "";
}
  