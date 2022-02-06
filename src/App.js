//mport logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
//import React from "react";
//import { Routes ,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  let showAlert = (message, type)=>{
    setAlert({
      msg:message, 
      type:type
    })
    setTimeout(() =>{
        setAlert(null);
    },2000);
  }

  let toggleMode = ()=>{
    if(mode === 'light'){
        setMode('dark')
        document.body.style.background = 'grey';
        showAlert("Dark mode has been enabled","Success");
        document.title = "TextManipulator - DarkMode";
        setInterval(() =>{
          document.title = "TextManipulator is user - friendly";
      },2000);
      setInterval(() =>{
        document.title = "Install TextManipulator ";
    },1500);

    }
    else{
        setMode('light')
        document.body.style.background = 'white';
        showAlert("Light mode has been enabled","Success");
        document.title = "TextManipulator - LightMode";
    }
}
  return (
    <>
    <Navbar title = 'TextManipulator' about = 'About it' mode ={mode} toggleMode ={toggleMode}/>
      <Alert alert={alert}/>
    <Router>
      <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/" element={<TextForm heading = 'Email address : Mandatory to enter' showAlert={showAlert} mode={mode} />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
