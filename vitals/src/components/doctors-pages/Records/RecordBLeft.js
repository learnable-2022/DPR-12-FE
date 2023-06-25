import React, { useState, useEffect } from 'react';
import './main-records.css';
import '../..//doctors-pages/doctorspages.css';

export default function RecordBLeft({ patientRecords }) {
  const [isCheckedMap, setIsCheckedMap] = useState({});
  const [showUndo, setShowUndo] = useState(false);
  const [undoIndex, setUndoIndex] = useState(null);

  const handleCheckboxChange = (index) => {
    setIsCheckedMap((prevMap) => ({
      ...prevMap,
      [index]: !prevMap[index],
    }));

    setUndoIndex(index);
    setShowUndo(true);
  };

  useEffect(() => {
    if (undoIndex !== null) {
      const timer = setTimeout(() => {
        setIsCheckedMap((prevMap) => ({
          ...prevMap,
          [undoIndex]: !prevMap[undoIndex],
        }));
        setShowUndo(false);
        setUndoIndex(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [undoIndex]);

  return (
    <div>
      <div className='medicationz-container'>
        <div className='medications'>
          <h3>Medications</h3>
          <p className="freq">Frequency</p>
        </div>

        <div className='drug-container'>
          {patientRecords.HealthRecords?.slice(0, 5).map((record, index) => {
            if (!record.medicationName || !record.dosage) {
              return null; // Skip rendering if medicationName or dosage is empty
            }

            const isChecked = isCheckedMap[index] || false;
            const isUndoIndex = undoIndex === index;

            return (
              <div className={`drug${isUndoIndex ? ' undo' : ''}`} key={index}>
                <div className='dosage'>
                  <input
                    type='checkbox'
                    className='checkbox'
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div>
                    <p className='drug-name'>{record.medicationName}</p>
                    <p className='dose'>{record.dosage}</p>
                  </div>
                </div>
                {isChecked && !isUndoIndex && (
                  <div className='frequency'>
                    <p className='drug-text'>Frequent</p>
                    <span className='green-label'> • </span>
                  </div>
                )}
                {isUndoIndex && (
                  <div className='undo-container'>
                    <p className='undo-text'>Undo</p>
                    <button className='undo-button' onClick={() => handleCheckboxChange(index)}>
                      Undo
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
