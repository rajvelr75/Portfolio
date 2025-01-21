import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark'); 

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Home theme={theme} />
      <Skills theme={theme}/>
      <Projects theme ={theme}/>
      <Academics theme={theme}/>
      <Contact theme= {theme}/>
    </div>
  );
}

export default App;
