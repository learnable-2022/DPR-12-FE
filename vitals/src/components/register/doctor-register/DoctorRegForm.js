import React, { useState, useEffect } from 'react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const DoctorRegForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [licenseNO, setLicenseNO] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const inputStyle = {
    background: 'none',
    transition: 'all 0.5s ease-in-out',
    // Set different styles when hovered
    ...(isHovered && {
      background: 'none',
      color: '#1565C0',
    }),
  };

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch(
          'https://vitals-8myt.onrender.com/vitals/hcps/all'
        );
        const data = await response.json();
        setHospitals(data.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, []);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signUp = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !licenseNO ||
      !specialty ||
      !password ||
      !confirm_password
    ) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirm_password) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (licenseNO.length > 11) {
      setError('License number must be less than or equal to 11 characters long');
      return;
    }

    try {
      const response = await fetch(
        'https://vitals-8myt.onrender.com/vitals/doctors/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            licenseNO,
            specialty,
            password,
            confirm_password,
            hospital: selectedHospital
          }),
          redirect: 'follow',
        }
      );

      const data = await response.json();

      if (data.Success) {
        setMessage('Account Created Successfully... Proceed to Login');
      } else {
        setError('Account creation failed');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {message && <p className="error-success">{message}</p>}
      {error && <p className="error-text">{error}</p>}
      <form className="reg-form" id="reg-form">
        <div className="form-inputs">
          <div className="name-inputs">
            <div className="rightform-inputs">
              <p>First Name</p>
              <div className="small-input">
                <input
                  className="small-inputs"
                  type="text"
                  placeholder="e.g Jermie"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <span> </span>
              </div>
            </div>
            <div className="rightform-inputs">
              <p>Last Name</p>
              <div className="small-input">
                <input
                  className="small-inputs"
                  type="text"
                  placeholder="e.g Jermie"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <span> </span>
              </div>
            </div>
          </div>
          <div className="right-large-inputs">
            <div className="rightform-inputs">
              <p>Email address</p>
              <div className="large-input">
                <input
                  className="large-inputs"
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="right-large-inputs">
            <div className="rightform-inputs">
              <p>License Number</p>
              <div className="large-input">
                <input
                  className="large-inputs"
                  type="text"
                  placeholder="e.g 5000230901"
                  name="licenseNO"
                  value={licenseNO}
                  onChange={(e) => setLicenseNO(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="right-large-inputs">
            <div className="rightform-inputs">
              <p>Specialty</p>
              <div className="large-input">
                <input
                  className="large-inputs"
                  type="text"
                  placeholder="e.g Dentist"
                  name="specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="right-large-inputs">
            <div className="rightform-inputs">
              <p>Select Hospital</p>
              <div className="large-inputt">
                <select
                  className="large-inputs"
                  name="hospital"
                  value={selectedHospital}
                  onChange={(e) => setSelectedHospital(e.target.value)}
                >
                  <option value="">-- Select Hospital --</option>
                  {hospitals?.map((hospital) => (
                    <option key={hospital._id} value={hospital._id}>
                      {hospital.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="password-inputs">
            <div className="rightform-inputs">
              <p>Password</p>
              <div className="pass-inputs">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="xxxxxxx"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <VisibilityOffOutlinedIcon
                  onClick={handlePasswordVisibility}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={inputStyle}
                  className="pass-icons"
                />
              </div>
            </div>
            <div className="rightform-inputs">
              <p>Confirm Password</p>
              <div className="pass-inputs">
                <input
                  type="password"
                  placeholder="xxxxxxx"
                  name="confirm_password"
                  value={confirm_password}
                  onChange={(e) => setConfirm_Password(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <button className="nav-btn" type="submit" onClick={signUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorRegForm;
