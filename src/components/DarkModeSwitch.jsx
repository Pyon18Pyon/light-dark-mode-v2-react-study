import React from 'react';
import './DarkModeSwitch.css';

function DarkModeSwitch({ onChanged, theme }) { 

  return (
    <div className="theme-switch-wrapper">
      <span>
        <span className="toggle-text">{theme === 'dark' ? `Dark Mode` : `Light Mode`}</span>
        <i className={theme === 'dark' ? `fas fa-moon` : `fas fa-sun`}></i>
        <label className="theme-switch">
          <input type="checkbox" onChange={onChanged}/>
          <div className="slider round"></div>
        </label>
      </span>
    </div>
  )
}

export default DarkModeSwitch;
