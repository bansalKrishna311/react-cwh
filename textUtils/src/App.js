import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import {useState} from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


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
     <Router>
      <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} />
      <Alert alert={alert} />

      <Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={<TextForm heading="Enter the text to analyze Below" mode={mode} showAlert={showAlert} />} />
</Routes>

        </Router>
    </>
  );
}

export default App;
