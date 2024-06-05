// src/components/ThemeProject.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeProject = () => {
  const { themeStyles, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={themeStyles}>
      <h1>Theme Context Example</h1>
      <button onClick={toggleTheme} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeProject;
