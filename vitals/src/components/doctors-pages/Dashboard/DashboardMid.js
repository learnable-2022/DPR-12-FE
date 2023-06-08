import React, {useState} from 'react'
import ani from '../../../images/dr.ani.svg'


export default function DashboardMid() {

  const ethers = require("ethers")

    const [walletAddress, setWalletAddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function requestAccount() {
      console.log('requesting account')

       // Check if MetaMask exists

      if (window.ethereum){
        console.log('detected MetaMask')

        try{
          const accounts = await window.ethereum.request({
            method : "eth_requestAccounts",
          });

          setWalletAddress(accounts[0]);
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
    <div className='dash-mid-container'>
      <div className='dash-doc'>
        <img className='doc-img' src={ani} alt=''/>
        <div className='doctor-details'>    
            <div className='doc-details'>
                <h4>Dr. Jonathan Ani. S <span className='doc-status'> • Resident Doctor</span></h4>
                
            </div>
            <div className='doc-info'>
                <div>

                    <label>Designation:</label><br />
                    <p>Paediatrics</p>
                </div>
                <div>

                    <label>Resident ID:</label><br />
                    <p>SPKND-JANI</p>
                </div>
                <div>

                    <label>HMO:</label><br />
                    <p>Enugu State University Teaching Hospital (Parklane)</p>
                </div>
            </div>
            <div>
              <p className='wallet-text'>Wallet Address: <span className='wallet-txt'>{walletAddress}</span></p>
              <p className='error-text'>{errorMessage}</p>
            </div>
        </div>
      </div>
      <div>
        <button
        className='nav-btn'
        onClick={requestAccount}
        
        >Connect Wallet</button>
      </div>
    </div>
  )
}
