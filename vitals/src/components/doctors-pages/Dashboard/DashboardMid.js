import React, { useState } from 'react';
import ani from '../../../images/dr.ani.svg';
import '../../main/main.css'

export default function DashboardMid({ docDetails }) {
  const ethers = require('ethers');
  const [walletAddress, setWalletAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  async function requestAccount() {
    // setMessage('requesting account...')

    // Check if MetaMask exists
    if (window.ethereum) {
      console.log('detected MetaMask');

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        setWalletAddress(accounts[0]);
        setMessage('Wallet Connected');
      } catch (error) {
        console.log('Error connecting to MetaMask');
      }
    } else {
      setErrorMessage('Need to Install MetaMask');
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  // Function to generate random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to get initials from first and last name
  function getInitials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }

  const initials = getInitials(docDetails.data.firstName, docDetails.data.lastName);
  const circleStyle = {
    backgroundColor: getRandomColor(),
  };

  return (
    <div className="dash-mid-container">
      <div className="dash-doc">
        <div className="dash-dash-doc">
          <div className="empty-picture" style={circleStyle}>
            <span className="initials">{initials}</span>
          </div>

          <div className="doctor-details">
            <div className="doc-details">
              <h4>
                Dr. {docDetails.data.firstName} {docDetails.data.lastName}
              </h4>
              <span className="doc-status">
                <span className="dot">•</span>Online
              </span>
            </div>
            <div className="doc-info">
              <div>
                <label>Designation:</label>
                <br />
                <p>{docDetails.data.specialty}</p>
              </div>
              <div>
                <label>Doctor ID:</label>
                <br />
                <p>{docDetails.data._id}</p>
              </div>
              <div>
                <label>License No:</label>
                <br />
                <p>{docDetails.data.licenseNO}</p>
              </div>
            </div>
            <div>
              <p className="wallet-text">
                Wallet Address: <span className="wallet-txt">{walletAddress}</span>
              </p>
              <p className="green">{message}</p>
              <p className="error-text">{errorMessage}</p>
            </div>
          </div>
        </div>

        <div className="dash-mid-button">
          <button className="wallet-btn" onClick={requestAccount}>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
