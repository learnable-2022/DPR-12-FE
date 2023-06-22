// Handle each form submission separately
    switch (currentPage) {
      case 1:
        // Submit Vitals Form
        // Call the smart contract function to store vital signs
        await contract.updateVitalSigns(
          formData.bloodPressure,
          formData.bloodSugar,
          formData.temperature,
          formData.heartRate,
          formData.oxygenLevel,
          formData.respiratoryRate
        );
        break;
      case 2:
        // Submit Disease Form
        // Call the smart contract function to store disease information
        await contract.updateDiseaseInfo(
          formData.disease,
          formData.diseaseDetails,
          formData.signsAndSymptoms,
          formData.doctorsName,
          formData.doctorsWalletAddress,
          formData.patientWalletAddress
        );
        break;
      case 3:
        // Submit Medication Form
        // Call the smart contract function to store medication information
        await contract.updateMedicationInfo(
          formData.medicationName,
          formData.dosage
        );
        break;
      case 4:
        // Submit Lab Form
        // Call the smart contract function to store lab test information
        await contract.updateLabTests(formData.labTest);
        break;
      case 5:
        // Submit Lab Result Form
        // Call the smart contract function to store lab test result
        await contract.updateLabResults(formData.labResult);
        break;
      default:
        break;

















        const connectToContract = async () => {

  if (window.ethereum && window.ethereum.isMetaMask) {


    // Connect to the Ethereum network using MetaMask provider
    try {
      
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      
      // Get the signer (account) for sending transactions
      const signer = provider.getSigner();

      // Initialize the contract instance using the ABI and contract address
      const contractABI = ContractABI.abi
      const contractAddress = '0x9F67e09bd19A1c826A34caD48e5d9c7A42aeeaAB';
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      console.log(contract);

      return contract;
    } catch (error) {
      console.log('Failed to connect to MetaMask:', error);
      return null;
    }
  } else {
    console.log('MetaMask extension not detected.');
    return null;
  }
};