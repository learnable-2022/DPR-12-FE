import { useState } from 'react';
import React from 'react'
import './main.css'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';






export default function Greeting({userDetails}) {


  const ethers = require("ethers")

  const [walletAddress, setWalletAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  async function requestAccount() {
    setMessage('requesting account...')

     // Check if MetaMask exists

    if (window.ethereum){
      console.log('detected MetaMask')

      try{
        const accounts = await window.ethereum.request({
          method : "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
        localStorage.setItem('walletId', JSON.stringify(accounts[0]));
        setMessage("Wallet Connected");
      }catch (error){
        console.log("Error connecting to MetaMask")
      }


    }else{
      setErrorMessage("Need to Install MetaMask")
    }
  }

  async function connectWallet(){
    if (typeof window.ethereum !== 'undefined'){
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);

    }
  }






  return (
    <div className='greeting-container'>
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
  )
}
