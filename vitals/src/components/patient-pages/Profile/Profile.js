import React, { useState, useRef, useEffect } from 'react';
import './Profile.css';
import Sidebar from '../../sidebar/sidebar';

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#607d8b'
];

const ProfilePage = () => {
  const token = localStorage.getItem('user');
  const [picture, setPicture] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableFields, setEditableFields] = useState({
    address: '',
    phoneNumber: '',
    bio: '',
    height: '',
    weight: '',
    bloodGroup: '',
    genotype: ''
  });
  const [userDetails, setUserDetails] = useState(null);
  const [updatedUserDetails, setUpdatedUserDetails] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('https://vitals-8myt.onrender.com/vitals/patients/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user details');
        }

        const data = await response.json();
        console.log(data);
        setUserDetails(data);
        setUpdatedUserDetails(data); // Set the updated user details
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [token]);

  const fileInputRef = useRef(null);

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setPicture(URL.createObjectURL(file));
  };

  const handleSaveClickk = async () => {
    try {
      const response = await fetch('https://vitals-8myt.onrender.com/vitals/patients/', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editableFields),
      });

      if (!response.ok) {
        throw new Error('Error updating user details');
      }

      setUpdateSuccess(true);
      setUpdateError(null);

      // Fetch the updated user details
      const userDetailsResponse = await fetch('https://vitals-8myt.onrender.com/vitals/patients/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!userDetailsResponse.ok) {
        throw new Error('Error fetching updated user details');
      }

      const updatedData = await userDetailsResponse.json();
      setUpdatedUserDetails(updatedData);
    } catch (error) {
      setUpdateSuccess(false);
      setUpdateError(error.message);
    }

    setIsEditMode(false);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditableFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const getInitials = (name) => {
    if (!name) {
      return '';
    }

    const nameParts = name.split(' ');

    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }

    const [firstName, lastName] = nameParts;
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const fullName = userDetails?.data?.firstName + ' ' + userDetails?.data?.lastName; // Replace with user's full name
  const emailAddress = userDetails?.data?.email; // Replace with user's email address

  return (
    <div>
      <div className='profile-container'>
        <Sidebar />
        <div className='main-profile-container'>
          <div className='profile-header-container'>
            <h4>Profile</h4>
            <p>Personal Information</p>
          </div>
          <div className='profile-box'>
            <div className='profile-picture'>
              {picture ? (
                <img src={picture} alt='Profile' />
              ) : (
                <div className='empty-picture' style={{ background: getRandomColor() }}>
                  {getInitials(fullName)}
                </div>
              )}
              {isEditMode && (
                <div className='picture-side'>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handlePictureChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                  />
                  <label className='file-input-label' onClick={() => fileInputRef.current.click()}>
                    Choose File
                  </label>
                </div>
              )}
            </div>
            <div className='profile-details'>
              <label>Full Name:</label>
              <div className='non-editable-field'>{fullName}</div>
              <label>Email Address:</label>
              <div className='non-editable-field'>{emailAddress}</div>
              <label>Address:</label>
              {isEditMode ? (
                <input
                  type='text'
                  name='address'
                  value={editableFields.address}
                  onChange={handleFieldChange}
                  className='editable-field'
                />
              ) : (
                <div className='non-editable-field'>{updatedUserDetails?.data?.address || ''}</div>
              )}
              <label>Phone:</label>
              {isEditMode ? (
                <input
                  type='text'
                  name='phoneNumber'
                  value={editableFields.phoneNumber}
                  onChange={handleFieldChange}
                  className='editable-field'
                />
              ) : (
                <div className='non-editable-field'>{updatedUserDetails?.data?.phoneNumber || ''}</div>
              )}
              <label>Bio:</label>
              {isEditMode ? (
                <textarea
                  name='bio'
                  value={editableFields.bio}
                  onChange={handleFieldChange}
                  className='editable-field'
                />
              ) : (
                <div className='non-editable-field'>{updatedUserDetails?.data?.bio || ''}</div>
              )}

              <div className='profile-half'>
                <div className='profile-half-half'>
                  <div className='half-input'>
                    <label>Height:</label>
                    {isEditMode ? (
                      <input
                        type='text'
                        name='height'
                        value={editableFields.height}
                        onChange={handleFieldChange}
                        className='editable-field'
                      />
                    ) : (
                      <div className='non-editable-field'>{updatedUserDetails?.data?.height || ''}</div>
                    )}
                  </div>
                  <div className='half-input'>
                    <label>Weight:</label>
                    {isEditMode ? (
                      <input
                        type='text'
                        name='weight'
                        value={editableFields.weight}
                        onChange={handleFieldChange}
                        className='editable-field'
                      />
                    ) : (
                      <div className='non-editable-field'>{updatedUserDetails?.data?.weight || ''}</div>
                    )}
                  </div>
                </div>
                <div className='profile-half-half'>
                  <div className='half-input'>
                    <label>Blood Group:</label>
                    {isEditMode ? (
                      <input
                        type='text'
                        name='bloodGroup'
                        value={editableFields.bloodGroup}
                        onChange={handleFieldChange}
                        className='editable-field'
                      />
                    ) : (
                      <div className='non-editable-field'>{updatedUserDetails?.data?.bloodGroup || ''}</div>
                    )}
                  </div>
                  <div className='half-input'>
                    <label>Genotype:</label>
                    {isEditMode ? (
                      <input
                        type='text'
                        name='genotype'
                        value={editableFields.genotype}
                        onChange={handleFieldChange}
                        className='editable-field'
                      />
                    ) : (
                      <div className='non-editable-field'>{updatedUserDetails?.data?.genotype || ''}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='profile-actions'>
              {!isEditMode && (
                <button className='nav-btn' onClick={handleEditClick}>
                  EDIT
                </button>
              )}
              {isEditMode && (
                <div>
                  <button className='nav-btn' onClick={handleSaveClickk}>
                    SAVE
                  </button>
                  <button className='nav-btn' onClick={() => setIsEditMode(false)}>
                    CANCEL
                  </button>
                </div>
              )}
              {updateSuccess && <p className='success-message'>User details updated successfully!</p>}
              {updateError && <p className='error-message'>Error updating user details: {updateError}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
