import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  // const [btnText, setBtnText] = useState("Enable light Mode")
  const [mode, setMode] = useState('light')
  // const [bg, setbg] = useState('blue')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#4d509b'
      // showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode"
      // setBtnText("Enable LightMode")
    }
    else if (mode === 'dark') {
      setMode('light');
      // setBtnText("Enable DarkMode")
      document.body.style.backgroundColor = '#fff'
      // showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route exact path="/" element={
          <>
            <div className="container">
              <Alert alert={alert} />
            </div>
            <div className="container my-3">
              <Text showAlert={showAlert} title="Enter The Text To analyze Below" mode={mode} />
            </div>
          </>
        }>
        </Route>

        <Route exact path="/about" element={
          <About mode={mode} />
        }></Route>
      </Routes>
    </Router>
  );
}

export default App;
