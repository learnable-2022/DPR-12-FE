import React, { useState } from 'react';
import image from './images/icon3.png';
import image1 from './images/Avatar.png';
import image2 from './images/Icon5.png';
import image3 from './images/Icon6.png';
import image4 from './images/Up1.png';
import image5 from './images/Up2.png';
// import image6 from './images/Icon4.png';





const AccessTable = () => {
  /*The function to populate the access controls table. this, as well as the grant and revoke access functionality button lies below*/
  const [accessTable, setAccessTable] = useState([]);

  const handleGrantAccess = (index) => {
    const updatedAccessTable = [...accessTable];
    updatedAccessTable[index].status = 'granted';
    setAccessTable(updatedAccessTable);
  };

  const handleDenyAccess = (index) => {
    const updatedAccessTable = [...accessTable];
    updatedAccessTable[index].status = 'denied';
    setAccessTable(updatedAccessTable);
  };

  const handleRequestAccess = () => {
    // Handle the request from the doctor's side here
    // You can use an API call or any other method to handle the request
    // Once the request is received, update the accessTable accordingly
    const newRequest = {
      doctorName: 'Dr. John Doe',
      doctorPicture: 'doctor-picture.jpg',
      status: 'pending',
    };
    setAccessTable([...accessTable, newRequest]);
  };

  /*Below is the hard coded data that is populating the access control table*/
  
  const Access = [
    {
      id: 1,
      pname: 'Dr. Olivia Rhye',
      hmo: 'FMC Jabi',
      status: 'Pending',
      date: '10/28/12'
    },
    {
      id: 2,
      pname: 'Dr. Phoenix Baker',
      hmo: 'New Hope General Hospital',
      status: 'Pending',
      date: '05/07/16'
    },
    {
      id: 3,
      pname: 'Dr. Lana Steiner',
      hmo: 'FMC Jabi',
      status: 'Denied',
      date: '10/28/12'
    },
    {
      id: 4,
      pname: 'Dr. Kemi Wilkinson',
      hmo: 'FMC Ikeja',
      status: 'Granted',
      date: '06/17/14'
    },
    {
      id: 5,
      pname: 'Dr. Candice Wu',
      hmo: 'FMC Jabi',
      status: 'Granted',
      date: '01/18/12'
    },
  ]
  
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
              HMO 
            </th>

            <th className="header3"> 
              Access 

              <img src={image} className="down"/>
            </th>
            
            <th className="header4">
              Status
              
              {/* <img src={image6} className="down"/> */}
              
            </th>
    
            <th className="header5">
              Date
            </th>

            <th className="header6">
              
            </th>

            <th className="header7">
              
            </th>
      
          </tr>
    
        </thead>

        <tbody>
          {Access.map((access, index) => (
           <tr>
            
                    <td >
                      <input type="checkbox" className="check2" />
                    </td>
            
                    <td className="pimage">
                      <img src={image1} />
                      
                      <div className="pname">
                        {access.pname}
                      </div>
                    </td>
    
                    <td className="hmo">
                      {access.hmo}
                    </td>
    
                    <td className="access">
                      <img src={image4} />
                      
                      <img src={image5} className="down"/>
                    </td>
            
                    <td className="pstatus">
                      {access.status}
                    </td>
            
                    <td className="pdate">
                       {access.date}
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
}

export default AccessTable;