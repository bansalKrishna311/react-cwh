import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import Alert from './components/Alert';

import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const ToggleMode = () => {
   if(mode === 'light')
   {
      setMode('dark');
      document.body.style.backgroundColor ='#313840';
   }
   else {
      setMode('light');
      document.body.style.backgroundColor ='white';
   }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} />
      <Alert Alert = "Ram ram "/>
      <div className="container">
        <TextForm heading="Enter the text to analyze Below" mode={mode} />
      </div>

      <About />
    </>
  );
}

export default App;
