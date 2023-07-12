import React from 'react';
import "../scss/Index.scss";
import DarkModeToggle from './DarkModeToggle';

function Dark() {
  return (
    <div className="darkMode">
      <DarkModeToggle />
    </div>
  );
}

export default Dark;