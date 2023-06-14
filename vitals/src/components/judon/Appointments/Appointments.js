import './Appointments.css';
import React, { useState } from 'react';
/*import AppointmentButton from './components/button';*/
import AppointmentTable from './components/AppointmentTable';
/*import Pagination from './components/Pagination';*/
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';
import image1 from './components/images/Icon3.png';
import Calendar from './components/calendar';

const ITEMS_PER_PAGE = 5; 

export default function App() {
  
  const [appointments, setAppointments] = useState([]);

  const handleSetAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(appointments.length / ITEMS_PER_PAGE);

  // Get the appointments to display for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedAppointments = appointments.slice(startIndex, endIndex);
  
  return (
    <div className="container">

      <div className="body">
        <div className="title">
          <h3>Appointments</h3>
        </div>
        
        <div className="subtitle">
          <h4>Here's your next appointment schedule</h4>
        </div>

        <div className="block1">

          <div className="right">
            
            <div className="title1">
              <h3>Next appointment</h3>
            </div>
  
            <div className="innerb1">
              
              <div className="rt1">
              
              </div>
  
              <div className="lt1">
                
                <div className="date">
                  
                  <div className="day">
                    <h4>Wednesday June</h4>
                  </div>

                  <div className="year">
                    <h4>30th, 2023 / 9am</h4>
                  </div>
                  
                </div>
  
                <div className="date-btn">
  
                  <div className="google-icon">
                    <img src={image1} />
                  </div>
  
                  <div className="btn-title">
                    <h4>Add to calendar</h4>
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>

          <div className="left">
            {/*<AppointmentButton
              doctor={{ name: 'Dr. John Doe' }}
        onSetAppointment={handleSetAppointment}
            />*/}

            <Calendar />
          </div>
          
          
        </div>

        <div className="block2">

          <div className="head-text">

            <div className="title2">
              <h3>Appointment History</h3>
            </div>

            <div className="title-date">
              <h4>last 30days</h4>
            </div>
            
          </div>

          <div className="table">

            <AppointmentTable appointments={appointments}/>
          </div>

            
          </div>
          
          <div className="pagination">
            
            <div className="previous">
              <PrevButton onClick={handlePrevPage} disabled={currentPage === 1} />
            </div>

            <div className="numbers">
              <div className="btn-cont">
                            <button className="no1">1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
              </div>

            </div>

            <div className="next">
              <NextButton onClick={handleNextPage} disabled={currentPage === totalPages} />
            </div>
          
          </div>
        
      </div>
      
    </div>
  )
}
