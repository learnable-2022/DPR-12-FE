import React, { useState } from 'react';
import './doctorspages.css'; // Import CSS file for styling
import { Navigate, useNavigate } from 'react-router-dom';

const MultiStepForm = () => {

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    patientID: "",
    patientWalletAddress: "",
    doctorsID: "",
    bloodPressure: "",
    oxygenLevel: "",
    heartRate: "",
    bloodSugar: "",
    respiratoryRate: "",
    diseaseName: "",
    diseaseDetails: "",
    signsAndSymptoms: "",
    medicationName: "",
    dosage: "",
    labTest: "",
    labResults: "" 
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const navigateToStep = (step) => {
    setCurrentPage(step);
  };

  const handleCancel = () => {
    navigate('/patients');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const renderForm = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className='vitalsigns-container'>
            <div className='vitalsigns'>
              <div className='vitalsigns-1'>
                <div className='v-sign'>
                  <label>Blood Pressure</label><br />
                  <input
                    type="text"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className='v-sign'>
                  <label>Blood Sugar</label><br />
                  <input
                    type="text"
                    name="bloodSugar"
                    value={formData.bloodSugar}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className='v-sign'>
                  <label>Temperature</label><br />
                  <input
                    type="text"
                    name="temperature"
                    value={formData.temperature}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
              </div>
              <br />
              <div className='vitalsigns-1'>
                <div className='v-sign'>
                  <label>Heart Rate</label><br />
                  <input
                    type="text"
                    name="heartRate"
                    value={formData.heartRate}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className='v-sign'>
                  <label>Oxygen Level</label><br />
                  <input
                    type="text"
                    name="oxygenLevel"
                    value={formData.oxygenLevel}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div className='v-sign'>
                  <label>Respiratory Rate</label><br />
                  <input
                    type="text"
                    name="respiratoryRate"
                    value={formData.respiratoryRate}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
              </div>
            </div>
            <br />
            <div className='vitalsigns-btn'>
              <button className='van-btn' onClick={handleCancel}>CANCEL</button>
              <button className='nav-btn' onClick={nextPage}>NEXT</button>
            </div>
          </div>
        );
      case 2:
        return (
      <div className='diseases-container'>
        <div className='disease-1'>
          <label>Disease</label>
          <input
            type="text"
            name="disease"
            value={formData.disease}
            onChange={handleInputChange}
            placeholder="e.g Malaria"
          />
        </div>
        <div className='disease-2'>
          <label>Disease Details</label>
          <textarea
            type="text"
            name="diseaseDetails"
            value={formData.diseaseDetails}
            onChange={handleInputChange}
          />
        </div>
        <div className='disease-2'>
          <label>Signs and Symptoms</label>
          <textarea
            type="text"
            name="signsAndSymptoms"
            value={formData.signsAndSymptoms}
            onChange={handleInputChange}
          />
        </div>
        <div className='disease-1'>
              <label>Doctor's ID </label>
              <input
                type="text"
                name="doctorsID"
                value={formData.doctorsID}
                onChange={handleInputChange}
                placeholder="e.g 1234567890"
              />
            </div>

        <div className='disease-1'>
          <label>Patient's Wallet Address</label>
          <input
            type="text"
            name="patientWalletAddress"
            value={formData.patientWalletAddress}
            onChange={handleInputChange}
            placeholder="000xx.....................................aa"
          />
        </div>
        <div className='disease-1'>
          <label>Patient's ID</label>
          <input
            type="text"
            name="patientID"
            value={formData.patientID}
            onChange={handleInputChange}
            placeholder="e.g 1234567890"
          />
        </div>
        <div className='vitalsigns-btn'>
        <button className='van-btn' onClick={prevPage}>PREV</button>
          <button className='nav-btn' onClick={nextPage}>NEXT</button>
        </div>
      </div>
        );
      case 3:
        return (
      <div className='diseases-container'>
          <div className='disease-2'>
            <label>Medication Name</label>
            <textarea
              type="text"
              name="medicationName"
              value={formData.medicationName}
              onChange={handleInputChange}
              placeholder="e.g Amphetamin 70mmg"
            />
          </div>
          <div className='disease-1'>
            <label>Dosage</label>
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleInputChange}
              placeholder="e.g 2 tablets a day"
            />
          </div>
          <div className='vitalsigns-btn'>
            <button className='van-btn' onClick={prevPage}>PREV</button>
            <button className='nav-btn' onClick={nextPage}>NEXT</button>
          </div>
      </div>
        );
      case 4:
        return (
    <div className='diseases-container'>
      <div className='disease-2'>
        <label>Lab Test</label>
        <textarea
          type="text"
          name="labTest"
          value={formData.labTest}
          onChange={handleInputChange}
          placeholder="e.g Blood Smear Examination"
        />
      </div>
      <div className='vitalsigns-btn'>
        <button className='van-btn' onClick={prevPage}>PREV</button>
        <button className='nav-btn' onClick={nextPage}>NEXT</button>
      </div>
  </div>
        );
      case 5:
        return (
      <div className='diseases-container'>
    
          <div className='disease-2'>
            <label>Lab Result</label>
            <textarea
              type="text"
              name="labResult"
              value={formData.labResults}
              onChange={handleInputChange}
            />
          </div>
          <div className='vitalsigns-btn'>
            <button className='van-btn' onClick={handleCancel}>CANCEL</button>
            <button className='nav-btn' onClick={handleSubmit}>UPDATE RECORD</button>
          </div>
      </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="step-indicator">
            <div className={`step ${currentPage === 1 ? 'akctive' : ''}`} onClick={() => navigateToStep(1)}>Vital Signs</div>
            <div className={`step ${currentPage === 2 ? 'akctive' : ''}`} onClick={() => navigateToStep(2)}>Disease Information</div>
            <div className={`step ${currentPage === 3 ? 'akctive' : ''}`} onClick={() => navigateToStep(3)}>Prescription</div>
            <div className={`step ${currentPage === 4 ? 'akctive' : ''}`} onClick={() => navigateToStep(4)}>Lab Test</div>
            <div className={`step ${currentPage === 5 ? 'akctive' : ''}`} onClick={() => navigateToStep(5)}>Lab Result</div>
          </div>
          {renderForm()}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
