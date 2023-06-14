import React from 'react';
import image from './images/Icon.png'

const PrevButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      <img src={image} />
      <div className="prev-btn">
        Previous
      </div>
      
    </button>
  );
};

export default PrevButton;