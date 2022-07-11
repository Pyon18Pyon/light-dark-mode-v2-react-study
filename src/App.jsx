import React, { useState } from 'react';
import DarkModeSwitch from './components/DarkModeSwitch';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './theme.css';
import './App.css';

function App() {

  const [theme, setTheme] = useState('light');

  function handleChange(event) {
    if (event.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div id="app" className={`App ${theme}`}>
      <DarkModeSwitch theme={theme} onChanged={handleChange} />
      <Navigation />
      <Home />
      <About theme={theme} />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;

/*
 1. Create a component and css for each section
 2. Add event listener to change the color theme from light to dark
 3. Set up the Local Storage
*/