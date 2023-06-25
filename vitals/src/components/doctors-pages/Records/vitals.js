import React from 'react';
import '../../main/main.css';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';

export default function Vitals({patientRecords}) {
  return (
    <div className='vitals-container'>
      <div className='vitals'>
        <h3>Vital Signs</h3>
      </div>
      <div className='sign-container'>
        <div className='sign'>
          <div className='icon-container'>
            <BloodtypeOutlinedIcon />
          </div>
          <div className='description'>
            <p className='weight'>
              {patientRecords && patientRecords.HealthRecords?.length > 0
                ? patientRecords.HealthRecords[0].bloodPressure
                : 'N/A'}
            </p>
            <small>Blood pressure</small>
          </div>
        </div>
        <div className='sign'>
          <div className='icon-container'>
            <MonitorHeartOutlinedIcon />
          </div>
          <div className='description'>
            <p className='weight'>
              {patientRecords && patientRecords.HealthRecords?.length > 0
                ? patientRecords.HealthRecords[0].heartRate
                : 'N/A'}
            </p>
            <small>Heart Rate</small>
          </div>
        </div>
        <div className='sign'>
          <div className='icon-container'>
            <GasMeterOutlinedIcon />
          </div>
          <div className='description'>
            <p className='weight'>
              {patientRecords && patientRecords.HealthRecords?.length > 0
                ? patientRecords.HealthRecords[0].bloodSugar
                : 'N/A'}
            </p>
            <small>Blood Sugar</small>
          </div>
        </div>
        <div className='sign'>
          <div className='icon-container'>
            <DeviceThermostatOutlinedIcon />
          </div>
          <div className='description'>
            <p className='weight'>
              {patientRecords && patientRecords.HealthRecords?.length > 0
                ? patientRecords.HealthRecords[0].temperature
                : 'N/A'}
            </p>
            <small>Temperature</small>
          </div>
        </div>
        <div className='sign'>
          <div className='icon-container'>
            <BlurOnOutlinedIcon />
          </div>
          <div className='description'>
            <p className='weight'>
              {patientRecords && patientRecords.HealthRecords?.length > 0
                ? patientRecords.HealthRecords[0].oxygenLevel
                : 'N/A'}
            </p>
            <small>Oxygen</small>
          </div>
        </div>
      </div>
    </div>
  );
}
