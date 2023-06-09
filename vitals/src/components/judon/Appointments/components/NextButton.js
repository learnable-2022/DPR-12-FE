import React from 'react';
import image from './images/Icon2.png'

const NextButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      
      <div className="nxt-btn">
        Next
      </div>
      
      <img src={image} />
    
    </button>
  );
};

export default NextButton;