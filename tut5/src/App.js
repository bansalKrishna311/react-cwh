import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import {useState} from 'react';


// import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const ToggleMode = () => {
   if(mode === 'light')
   {
      setMode('dark');
      document.body.style.backgroundColor ='#313840';
      showAlert('Dark Mode has been enabled',"success");
   }
   else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('Light Mode has been enabled',"success");

   }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} />
     <Alert alert = {alert}/>
      <div className="container">
        <TextForm heading="Enter the text to analyze Below" mode={mode}  showAlert= {showAlert} />
      </div>

      <About />
    </>
  );
}

export default App;
