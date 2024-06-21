import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import CountLogger from './components/CountLogger';
import ThemeToggler from './components/ThemeToggler';

export const ToggleTheme = React.createContext()

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };

  return (
    <ToggleTheme.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Counter />
      <CountLogger />
      <ThemeToggler />
    </ToggleTheme.Provider>
  );
}

export default App;
