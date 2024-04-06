import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({  
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#001e49'
      showAlert("Dark mode has been enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled","success")
    }
    
  }
  return (
    <>
      <Router>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} ></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      <Routes>
            <Route path="/about" element={<About mode={mode} />}>        
          </Route>
          <Route path="/" element={<TextForm showAlert ={showAlert} heading="Enter the text to analyze below" mode={mode}></TextForm>}>   
          </Route>
      </Routes>
      </div>
      </Router>
      </>
  );
}
export default App;
