import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  // const [btnText, setBtnText] = useState("Enable light Mode")
  const [mode, setMode] = useState('light')
  const [bg, setbg] = useState('blue')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#4d509b'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
      // setBtnText("Enable LightMode")
    }
    else if(mode === 'dark'){
      setMode('light');
      // setBtnText("Enable DarkMode")
      document.body.style.backgroundColor = '#fff'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
    else if(mode === 'green'){
      setMode('blue');
      document.body.style.backgroundColor = 'rgb(73 39 195)'
      showAlert("Blue theme has been enabled", "success")
      // setBtnText("Enable LightMode")
    }
    else if(mode === 'blue'){
      setMode('green');
      // setBtnText("Enable DarkMode")
      document.body.style.backgroundColor = 'rgb(28 144 131)'
      showAlert("Green theme has been enabled", "success")
    }
  }
  const backChange = () =>{
    if(bg === 'light'){
      setbg('dark');
      document.body.style.backgroundColor = '#4d509b'
      showAlert("Dark mode has been enabled", "success")
      // setBtnText("Enable LightMode")
    }
    else if(bg === 'dark'){
      setbg('light');
      // setBtnText("Enable DarkMode")
      document.body.style.backgroundColor = '#fff'
      showAlert("Light mode has been enabled", "success")
    }
    else if(bg === 'green'){
      setbg('blue');
      document.body.style.backgroundColor = 'rgb(735 39 195)'
      showAlert("Blue theme has been enabled", "success")
      // setBtnText("Enable LightMode")
    }
    else if(bg === 'blue'){
      setMode('green');
      // setBtnText("Enable DarkMode")
      document.body.style.backgroundColor = 'rgb(28 144 131)'
      showAlert("Green theme has been enabled", "success")


    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} bg = {bg} toggleMode={toggleMode} backChange={backChange}/>
      <div className="container">
      <Alert alert = {alert}/>
      </div>
      <div className="container my-3">
        <Text showAlert = {showAlert}title = "Enter The Text To analyze Below" mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
