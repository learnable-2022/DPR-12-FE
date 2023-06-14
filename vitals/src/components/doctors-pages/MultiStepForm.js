import React, { useState } from 'react';
import './doctorspages.css'
import { Navigate, useNavigate } from 'react-router-dom';

export default function MultiStepForm (){

  const navigate = useNavigate();


  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    bloodPressure: '',
    bloodSugar: '',
    temperature: '',
    heartRate: '',
    oxygenLevel: '',
    respiratoryRate: '',
    disease:'',
    diseaseDetails: '',
    doctorsName: '',
    doctorsWalletAddress: '',
    patientWalletAddress: '',
    signsAndSymptoms: '',
    medicationName: '',
    dosage: '',
    labTest: '',
    labResult: '',
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

  const handleCancel = () => {
    navigate('/patients')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle SMART CONTRACT FUNCTIONS
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
                    <label>Blood Pressure</label><br/>
                    <input
                    type="text"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleInputChange}
                    // placeholder="Blood Pressure"
                    />
                  </div>

                  <br/>
                  <div className='v-sign'>
                    <label>Blood Sugar</label><br/>
                    <input
                      type="text"
                      name="bloodSugar"
                      value={formData.bloodSugar}
                      onChange={handleInputChange}
                      // placeholder="Blood Sugar"
                    />
                  </div>
                  <br />


                  <div className='v-sign'>
                    <label>Temperature</label><br/>
                    <input
                      type="text"
                      name="temperature"
                      value={formData.temperature}
                      onChange={handleInputChange}
                      // placeholder="Temperature"
                    />
                  </div>
                  <br />
                </div>
                <br />


                <div className='vitalsigns-1'>
                  <div className='v-sign'>
                    <label>Heart Rate</label><br/>
                    <input
                      type="text"
                      name="heartRate"
                      value={formData.heartRate}
                      onChange={handleInputChange}
                      // placeholder="Blood Pressure"
                    />
                  </div>
                  <br />

                  <div className='v-sign'>
                    <label>Oxygen Level</label><br/>
                    <input
                      type="text"
                      name="oxygenLevel"
                      value={formData.oxygenLevel}
                      onChange={handleInputChange}
                      // placeholder="Blood Sugar"
                    />
                  </div>
                  <br />

                  <div className='v-sign'>
                    <label>Respiratory Rate</label><br/>
                    <input
                      type="text"
                      name="respiratoryRate"
                      value={formData.respiratoryRate}
                      onChange={handleInputChange}
                      // placeholder="Blood Sugar"
                    />
                  </div>
                  <br />
                </div>
              </div><br /> 

            <div className='vitalsigns-btn'>

              <button className='van-btn' onClick={handleCancel}>CANCEL</button>
              <button className='nav-btn' onClick={nextPage}>NEXT</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='diseases-container'>
            {/* <h2 className="step-heading">Step 2: Contact Information</h2> */}
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
                // placeholder="e.g Malaria Parasite"
              />
            </div>
            <div className='disease-2'>
              <label>Signs and Symptoms</label>
              <textarea
                type="text"
                name="signsandsymptoms"
                value={formData.signsAndSymptoms}
                onChange={handleInputChange}
                // placeholder="e.g Malaria Parasite"
              />
            </div>
            <div className='disease-1'>
              <label>Doctor's Name</label>
              <input
                type="text"
                name="doctorsName"
                value={formData.doctorsName}
                onChange={handleInputChange}
                placeholder="e.g Jermaine Jenkins"
              />
            </div>
            <div className='disease-1'>
              <label>Doctor's Wallet Address</label>
              <input
                type="text"
                name="doctorsWalletAddress"
                value={formData.doctorsWalletAddress}
                onChange={handleInputChange}
                placeholder="000xx.....................................aa"
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
            <div className='vitalsigns-btn'>

              <button className='van-btn' onClick={prevPage}>PREVIOUS</button>
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

              <button className='van-btn' onClick={prevPage}>PREVIOUS</button>
              <button className='nav-btn' onClick={nextPage}>NEXT</button>

            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div className='disease-2'>
              <label>Lab Test</label>
              <textarea
                type="text"
                name="labTest"
                value={formData.labTest}
                onChange={handleInputChange}
                placeholder=
                "e.g Blood Smear Examination"
              />
            </div>
            <div className='vitalsigns-btn'>

              <button className='van-btn' onClick={prevPage}>PREVIOUS</button>
              <button className='nav-btn' onClick={nextPage}>NEXT</button>

            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <div className='disease-2'>
              <label>Lab Result</label>
              <textarea
                type="text"
                name="labResult"
                value={formData.labResult}
                onChange={handleInputChange}
                placeholder=
                ""
              />
            </div>
            <div className='vitalsigns-btn'>

              <button className='van-btn' onClick={prevPage}>PREVIOUS</button>
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
            <div className={`step ${currentPage === 1 ? 'active' : ''}`}>Vital Signs</div>
            <div className={`step ${currentPage === 2 ? 'active' : ''}`}>Disease Information</div>
            <div className={`step ${currentPage === 3 ? 'active' : ''}`}>Medical Information</div>
            <div className={`step ${currentPage === 4 ? 'active' : ''}`}>Lab Test</div>
            <div className={`step ${currentPage === 5 ? 'active' : ''}`}>Lab Result</div>
          </div>
          {renderForm()}
        </div>
      </form>
    </div>
  );
};

