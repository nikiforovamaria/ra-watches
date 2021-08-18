import React, { useState } from 'react';
import ClockItem from './ClockItem.js';
import FormAddClock from './FormAddClock.js';

export default function WorldClocks() {
  const [clocks, setClocks] = useState([]);

  const handleSbmit = (addClocks) => {
    setClocks((prevClocks) => ([...prevClocks, addClocks]));
  };

  const handleClose = (id) => {
    setClocks((prevClocks) => (prevClocks.filter((item) => item.id !== id)));
  };

  return (
    <React.Fragment>
      <FormAddClock onFormSubmit={handleSbmit} />
      <div className='clock-list'>
        {clocks.map((item) => (
          <ClockItem key={item.id} clocksSetup={item} onClose={handleClose} />
        ))}
      </div>
    </React.Fragment>
  );
}
