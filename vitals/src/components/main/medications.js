import React from 'react';
import './main.css';

export default function Medications({ healthRecord }) {
  console.log(healthRecord); // Check the structure of the healthRecord object

  const hasMedicalHistory =
    healthRecord && healthRecord.HealthRecords && healthRecord.HealthRecords.length > 0;

  return (
    <div>
      <div className='medications-container'>
        <div className='medications'>
          <h3>Medications</h3>
          <button className='today'>Today</button>
        </div>

        {hasMedicalHistory ? (
          healthRecord.HealthRecords
            .filter(record => record.medicationName !== '' && record.dosage !== '') // Filter out records with empty medicationName or dosage
            .map((record, index) => {
              console.log(record); // Check each record object in the HealthRecords array
              return (
                <div className='drug-container' key={index}>
                  <div className='drug'>
                    <div className='dosage'>
                      <input type='checkbox' className='checkbox' />
                      <div>
                        <p className='drug-name'>{record.medicationName}</p>
                        <p className='dose'>{record.dosage}</p>
                      </div>
                    </div>
                    <div className='radio-group'>
                      <label>
                        <input
                          type='radio'
                          value='dose'
                          name={`dosage${index}`}
                          className='radio'
                        />
                        <span></span>
                      </label>
                      <label>
                        <input
                          type='radio'
                          value='no-dose'
                          name={`dosage${index}`}
                          className='radio'
                        />
                        <span></span>
                      </label>
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          <p className='light-text'>No Medical History</p>
        )}
      </div>
    </div>
  );
}
