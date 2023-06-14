import React, { useState } from 'react';
import image from './images/Icon.png';
import image1 from './images/Icon4.png';
import image2 from './images/Icon5.png';
import image3 from './images/Icon6.png';
import image4 from './images/badge.png';
import image5 from './images/Avatar.png';


const AppointmentTable = ({ appointments }) => {
  

  return (
    <>
      <table>
        <thead>
          <tr className="headers">
            <th className="header">
              <input type="checkbox" className="check" />
            </th>
            
            <th className="header1"> 
              Physician's Name  
            </th>
            
            <th className="header2">
              Status
              
              <img src={image1} className="down"/>
              
            </th>
    
            <th className="header2">
              Date
            </th>

            <th className="header3">
              
            </th>

            <th className="header4">
              
            </th>
    
            
          </tr>
    
        </thead>
  
        <tbody>
          {appointments.map(appointment => (
  
            <tr key={appointment.date}>
        
                <td >
                  <input type="checkbox" className="check2" />
                </td>
        
                <td className="pimage">
                  <img src={image5} />
                  
                  <div className="pname">
                    {appointment.doctor.name}
                  </div>
                </td>
        
        
                <td className="pstatus">
                  <img src={image4} />
                </td>
        
                <td className="pdate">
                  10/28/12
                </td>
        
                <td className="pdelete">
                  <img src={image2} />
                </td>
        
                <td className="pedit">
                  <img src={image3} />
                </td>
                
              </tr>
              
          ))}
          
          
        </tbody>
        
        
      </table>
      
    </>
    
            
  );

};

export default AppointmentTable;