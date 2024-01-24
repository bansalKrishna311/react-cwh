// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const ToggleMode = () => {
   if(mode === 'light')
   {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
   }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={Mode} ToggleMode={ToggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze Below" />
      </div>
      <About />
    </>
  );
}

export default App;
