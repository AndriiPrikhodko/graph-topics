import React, { useState } from 'react';
import './Toggle.css'
import './Menu.css'

const ToggleStatistics = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='menu-item'>
      <label className='toggle-label'>
        { isToggled ?  'Statistical insights:': 'Graph view:'}</label>
      <label className="switch"> 
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleStatistics