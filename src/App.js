// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  // const toggleMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743'
  //     document.body.style.color = 'white'
  //     showAlert('Dark mode has been enabled', 'success');
  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     document.body.style.color = 'black'
  //     showAlert('Light mode has been enabled', 'success');
  //   }
  // }
  const redMode = ()=>{
      setMode('dark');
      document.body.style.backgroundColor = 'red'
      document.body.style.color = 'white'
      showAlert('Red mode has been enabled', 'success');
  }
  const blackMode = ()=>{
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert('Black mode has been enabled', 'success');
  }
  const greenMode = ()=>{
      setMode('dark');
      document.body.style.backgroundColor = 'green'
      document.body.style.color = 'white'
      showAlert('Green mode has been enabled', 'success');
  }
  const lightMode = ()=>{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode has been enabled', 'success');
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
      <Navbar mode={mode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <div className={`form-check form-switch text-${mode === 'dark' ?'light':'dark'}`}>
        <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div> */}
      <Switch>
        <Route exact path="/about"> {/* Its always good to write exact before path */}
          <About/>
        </Route>
        <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode}/>
        </Route>
      </Switch>
      <div className={`form-check text-${mode === 'dark' ?'light':'dark'}`}>
        <input className="form-check-input" onClick={redMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Enable Red Mode
        </label>
      </div>
      <div className={`form-check text-${mode === 'dark' ?'light':'dark'}`}>
        <input className="form-check-input" onClick={blackMode} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Enable Black Mode
        </label>
      </div>
      <div className={`form-check text-${mode === 'dark' ?'light':'dark'}`}>
        <input className="form-check-input" onClick={greenMode} type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Enable Green Mode
        </label>
      </div>
      <div className={`form-check text-${mode === 'dark' ?'light':'dark'}`}>
        <input className="form-check-input" onClick={lightMode} type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
        <label className="form-check-label" htmlFor="flexRadioDefault4">
          Enable Light Mode
        </label>
      </div>
        
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
