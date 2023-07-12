import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('modoOscuro') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkMode');
      localStorage.setItem('modoOscuro', true);
    } else {
      document.body.classList.remove('darkMode');
      localStorage.setItem('modoOscuro', false);
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleModeClear = () => {
    localStorage.removeItem('modoOscuro');
    localStorage.clear();
  };

  return (
    <div>
      <button onClick={handleDarkModeToggle}>Toggle Dark Mode</button>
      <button onClick={handleModeClear}>Clear Mode</button>
    </div>
  );
}

export default DarkModeToggle;