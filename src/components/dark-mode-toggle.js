import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useDarkMode from "use-dark-mode"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
 
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  if (typeof window === 'undefined') {
    // Never server-side render this, since we can't determine
    // the correct initial state until we get to the client.
    return null;
  }

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