import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const Calendar1 = () => {

  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
  
};

export default Calendar1;

/*install react calendar for this, just contact me let me tell you the exact library i used*/