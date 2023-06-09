import React, { useState } from 'react';
import image from './images/Icon2.png';



const Diagnosis = () => {
  const diagnosisHistory = [
    {
      id: 1,
      fileName: 'Tuberculosis type II',
      hmo: 'FMC Jabi',
      physician: 'Dr. Mariam Abdulateff',
      lastAppointment: 'Jan 4, 2022'
    },
    {
      id: 2,
      fileName: 'Malaria & Typhoid',
      hmo: 'New Hope General Hospital',
      physician: 'Dr. Emeka Ogbo',
      lastAppointment: 'Jan 4, 2022'
    },
    {
      id: 3,
      fileName: 'Measles stage II',
      hmo: 'FMC Jabi',
      physician: 'Dr. Jane Nnaji',
      lastAppointment: 'Jan 2, 2022'
    },
    {
      id: 4,
      fileName: 'Malaria & Typhoid',
      hmo: 'FMC Ikeja',
      physician: 'Dr. Adeyemi Adesina',
      lastAppointment: 'Dec 20, 2021'
    },
    {
      id: 5,
      fileName: 'Measles stage I',
      hmo: 'FMC Jabi',
      physician: 'Dr. Ahmed Yaneth',
      lastAppointment: 'Dec 3, 2021'
    },
    {
      id: 6,
      fileName: 'Measles stage I',
      hmo: 'Kentucky State Research Hospital',
      physician: 'Dr. Shyla Medmoore',
      lastAppointment: 'Nov 20, 2022'
    },
    {
      id: 7,
      fileName: 'Amphysiation & Blocked Thorax',
      hmo: 'Kentucky State Research Hospital',
      physician: 'Dr. Bernard Shaw',
      lastAppointment: 'Aug 2, 2021'
    },
    
  ];
  
  return (
    <>
      <table>
        <thead>
          <tr className="headers">
            <th className="header">
              <input type="checkbox" className="check" />
            </th>

            <th className="header1">
              File name
            </th>

            <th className="header2">
              HMO
            </th>

            <th className="header3">
              Physician
            </th>

            <th className="header4">
              Last appointment
            </th>

            <th className="header5">
              
            </th>
            
          </tr>
          
        </thead>

        <tbody>
          {diagnosisHistory.map((diagnosis, index) => (
            <tr key={diagnosis.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                  
                  <td>
                    <input type="checkbox" className="check2" />
                  </td>
      
                  <td className="fn">
                    {diagnosis.fileName}
                  </td>
      
                  <td className="hmo">
                    {diagnosis.hmo}
                  </td>
      
                  <td className="pname">
                    {diagnosis.physician}
                  </td>
      
                  <td className="date">
                    {diagnosis.lastAppointment}
                  </td>
      
                  <td className="icon">
                    <img src={image} />
                  </td>
                
                </tr>
      
          ))}
          
          
        </tbody>
        
      </table>
    </>
  );
  
};

export default Diagnosis;
