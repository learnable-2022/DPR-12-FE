import React, { useState, useRef, useEffect, useContext } from 'react';
import './Profile.css';
import Sidebar from '../../sidebar/sidebar';
import { UserContext } from '../UserContext';




const ProfilePage = () => {

    // const { user } = useContext(UserContext);

    // const { firstName, lastName, email } = user;

    // const name = firstName + ' ' + lastName;
    

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableFields, setEditableFields] = useState({
    address: '',
    phone: '',
    bio: '',
    height:'',
    weight: '',
    bloodGroup:'',
    genotype:''

  });


  const fileInputRef = useRef(null);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setPicture(URL.createObjectURL(file));
  };

  const handleFieldChange = (event) => {
    const { firstName, value } = event.target;
    setEditableFields((prevFields) => ({
      ...prevFields,
      [firstName]: value
    }));
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
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
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
        <div className='profile-container'>
            <Sidebar />
            <div className='main-profile-container'>
                <div className='profile-header-container'>
                    <h4>Profile</h4>
                    <p>Personal Information</p>
                </div>
                <div className="profile-box">
                    <div className="profile-picture">
                        {picture ? (
                            <img src={picture} alt="Profile" />
                        ) : (
                            <div className="empty-picture" style={{ background: getRandomColor() }}>
                            {getInitials()}
                            </div>
                        )}
                        {isEditMode && (
                            <div className='picture-side'>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handlePictureChange}
                              ref={fileInputRef}
                              style={{ display: 'none' }}
                            />
                            <label className="file-input-label" onClick={() => fileInputRef.current.click()}>
                              Choose File
                            </label>
                          </div>
                        )}
                    </div>
                    <div className="profile-details">
                        <label>Name:</label>
                        {isEditMode ? (
                            <input className='non-editable-field' type="text" value={name}  />
                        ) : (
                            <div className="non-editable-field">{name}</div>
                        )}
                        <label>Email:</label>
                        {isEditMode ? (
                            <input type="email" value={email}  />
                        ) : (
                            <div className="non-editable-field">{email}</div>
                        )}
                        <label>Address:</label>
                        {isEditMode ? (
                            <input
                            type="text"
                            name="address"
                            value={editableFields.address}
                            onChange={handleFieldChange}
                            className="editable-field"
                            />
                        ) : (
                            <div className="non-editable-field">{editableFields.address}</div>
                        )}
                        <label>Phone:</label>
                        {isEditMode ? (
                            <input
                            type="text"
                            name="phone"
                            value={editableFields.phone}
                            onChange={handleFieldChange}
                            className="editable-field"
                            />
                        ) : (
                            <div className="non-editable-field">{editableFields.phone}</div>
                        )}
                        <label>Bio:</label>
                        {isEditMode ? (
                            <textarea
                            name="bio"
                            value={editableFields.bio}
                            onChange={handleFieldChange}
                            className="editable-field"
                            />
                        ) : (
                            <div className="non-editable-field">{editableFields.bio}</div>
                        )}

                        <div className='profile-half'>
                            <div className='profile-half-half'>
                                <div className='half-input'>
                                    <label>Height:</label>
                                    {isEditMode ? (
                                        <input
                                        type="text"
                                        name="height"
                                        value={editableFields.height}
                                        onChange={handleFieldChange}
                                        className="editable-field"
                                        />
                                    ) : (
                                        <div className="non-editable-field">{editableFields.height}</div>
                                    )}
                                </div>
                                <div className='half-input'>
                                    <label>Weight:</label>
                                    {isEditMode ? (
                                        <input
                                        type="text"
                                        name="weight"
                                        value={editableFields.weight}
                                        onChange={handleFieldChange}
                                        className="editable-field"
                                        />
                                    ) : (
                                        <div className="non-editable-field">{editableFields.weight}</div>
                                    )}
                                </div>
                            </div>
                            <div className='profile-half-half'>
                                <div className='half-input'>
                                    <label>Blood Group:</label>
                                    {isEditMode ? (
                                        <input
                                        type="text"
                                        name="bloodGroup"
                                        value={editableFields.bloodGroup}
                                        onChange={handleFieldChange}
                                        className="editable-field"
                                        />
                                    ) : (
                                        <div className="non-editable-field">{editableFields.bloodGroup}</div>
                                    )}
                                </div>
                                <div className='half-input'>
                                    <label>Genotype:</label>
                                    {isEditMode ? (
                                        <input
                                        type="text"
                                        name="genotype"
                                        value={editableFields.genotype}
                                        onChange={handleFieldChange}
                                        className="editable-field"
                                        />
                                    ) : (
                                        <div className="non-editable-field">{editableFields.genotype}</div>
                                    )}
                                </div>
                            </div>
                            
                        {isEditMode ? (
                            <button className='nav-btn' onClick={handleSaveClick}>SAVE</button>
                        ) : (
                            <button className='nav-btn' onClick={handleEditClick}>EDIT</button>
                        )}
                        </div>


                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProfilePage;
