import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useDarkMode from "use-dark-mode"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
 
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
 
  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={darkMode.value}
      onChange={darkMode.toggle}
      size={24}
    />
  );
};

export default DarkModeToggle;