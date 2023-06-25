import { useState } from 'react';
import React from 'react';
import './main.css';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import profile from '../../images/avatar-icon.jpeg';

export default function Greeting({ userDetails }) {
  const ethers = require("ethers");
  const [walletAddress, setWalletAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const getRandomColor = () => {
    const colors = [
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#3f51b5',
      '#2196f3',
      '#03a9f4',
      '#00bcd4',
      '#009688',
      '#4caf50',
      '#8bc34a',
      '#cddc39',
      '#ffc107',
      '#ff9800',
      '#ff5722',
      '#795548',
      '#607d8b'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getInitials = (firstName, lastName) => {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    return initials;
  };

  async function requestAccount() {
    setMessage('requesting account...');

    // Check if MetaMask exists
    if (window.ethereum) {
      console.log('detected MetaMask');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
        localStorage.setItem('walletId', JSON.stringify(accounts[0]));
        setMessage("Wallet Connected");
      } catch (error) {
        console.log("Error connecting to MetaMask");
      }
    } else {
      setErrorMessage("Need to Install MetaMask");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <div className='greeting-container'>
      <div className='greeting-img'>
        {userDetails && userDetails.data.firstName && userDetails.data.lastName && (
          <div
            className='empty-picture'
            style={{ background: getRandomColor() }} // Set the background color using getRandomColor()
          >
            {getInitials(userDetails.data.firstName, userDetails.data.lastName)} {/* Render the initials using getInitials() */}
          </div>
        )}
      </div>
      <div className='greeting'>
        <h3>Welcome {userDetails.data.firstName}  <span>&#128075;&#127996;</span></h3>
        <p>Track & control your medical records from this dashboard.</p>
        <br />
        <div>
          <p>Patient ID: {userDetails.data._id}</p>
          <p>Wallet Address: <span className='wallet-txt'>{walletAddress}</span></p>
          <p className='green wallet-text'>{message}</p>
          <p className='error-text'>{errorMessage}</p>
        </div>
      </div>
      <div className='buttons'>
        <button className='share'> <FileUploadOutlinedIcon />Share</button>
        <button onClick={requestAccount} className='new-btn'>Connect Wallet</button>
      </div>
    </div>
  );
}
