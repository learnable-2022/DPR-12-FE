import React, {useState} from 'react'
import './Notifications.css';
import Sidebar from '../../sidebar/sidebar';
import kemi from '../../../images/kemi.svg';
import ani from '../../../images/dr.ani.svg';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';

export default function Notifications() {

    const [notifications, setNotifications] = useState([]);

        // Function to add a new notification
        const addNotification = (message) => {
            setNotifications([...notifications, message]);
        };


  return (
    <div>
       <div className='notification-container'>
            <Sidebar />
            <div className='main-notification'>
                <div className='notification-header-container'>
                    <div className='notification-header'>
                        <h4>Notifications</h4><span>3</span>
                    </div>
                    <p>You have 3 unread messages</p>
                </div>
                {
                    // <ul>
                    // {notifications.map((notification, index) => (
                    //     <li key={index}>{notification}</li>
                    //     ))}
                    // </ul>
                    // ||
                    <div>
                        <ul className='notification-list-container'>
                            <li >
                                <div className='notification-list'>
                                    
                                    <div className='notification-message'> 
                                        <span className='label'>•</span>  
                                        <img src={kemi} alt="" />
                                        <p className='notification-content'><span>Dr. Kemi Wilkinson</span> requests access to view medical files.</p>
                                    </div>
                                    <p className='notification-time'>2:06pm</p>
                                </div>
                                <div className='notification-date'>
                                    <span >June 16, 2023</span>
                                </div>
                            </li>
                            <li >
                                <div className='notification-list'>
                                    
                                    <div className='notification-message'> 
                                        <span className='label'>•</span>  
                                        <CalendarMonthOutlinedIcon/>
                                        <p className='notification-content'><span>Next appointment</span> is in 3 days.</p>
                                    </div>
                                    <p className='notification-time'>2:06pm</p>
                                </div>
                                <div className='notification-date'>
                                    <span >June 16, 2023</span>
                                </div>
                            </li>
                            <li >
                                <div className='notification-list'>
                                    
                                    <div className='notification-message'> 
                                        <span className='label'>•</span>  
                                        <img src={kemi} alt="" />
                                        <p className='notification-content'><span>Dr. Kemi Wilkinson</span> viewed your medical files</p>
                                    </div>
                                    <p className='notification-time'>2:06pm</p>
                                </div>
                                <div className='notification-date'>
                                    <span >June 16, 2023</span>
                                </div>
                            </li>
                            <li >
                                <div className='notification-list'>
                                    
                                    <div className='notification-message'> 
                                        <span className='label'>•</span>  
                                        <MedicationLiquidOutlinedIcon />
                                        <p className='notification-content'><span>Medication Refill</span> is in the next 7 days.</p>
                                    </div>
                                    <p className='notification-time'>2:06pm</p>
                                </div>
                                <div className='notification-date'>
                                    <span >June 16, 2023</span>
                                </div>
                            </li>
                            <li >
                                <div className='notification-list'>
                                    
                                    <div className='notification-message'> 
                                        <span className='label'>•</span>  
                                        <MedicalInformationOutlinedIcon />
                                        <p className='notification-content'><span>Prescription is ready,</span> pickup at the pharmacy.</p>
                                    </div>
                                    <p className='notification-time'>2:06pm</p>
                                </div>
                                <div className='notification-date'>
                                    <span >June 16, 2023</span>
                                </div>
                            </li>
                            <li >
                                <div className='notification-list'>
                                    
                                    <div className='notification-message'> 
                                        <span className='label'>•</span>  
                                        <img src={ani} alt="" />
                                        <p className='notification-content'><span>You have successfully</span> revoked Dr. Jonathan Ani's access.</p>
                                    </div>
                                    <p className='notification-time'>2:06pm</p>
                                </div>
                                <div className='notification-date'>
                                    <span >June 16, 2023</span>
                                </div>
                            </li>
                            <li >
                                <div className='notification-list'>
                                    
                                    <div className='notification-message'> 
                                        <span className='label'>•</span>  
                                        <img src={kemi} alt="" />
                                        <p className='notification-content'><span>Dr. Kemi Wilkinson</span> requests access to view medical files</p>
                                    </div>
                                    <p className='notification-time'>2:06pm</p>
                                </div>
                                <div className='notification-date'>
                                    <span >June 16, 2023</span>
                                </div>
                            </li>
                            <li >
                                <div className='notification-list'>
                                    
                                    <div className='notification-message'> 
                                        <span className='label'>•</span>  
                                        <img src={kemi} alt="" />
                                        <p className='notification-content'><span>Dr. Kemi Wilkinson</span> requests access to view medical files</p>
                                    </div>
                                    <p className='notification-time'>2:06pm</p>
                                </div>
                                <div className='notification-date'>
                                    <span >June 16, 2023</span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                }
            </div>
            
        </div> 
    </div>
  )
}
