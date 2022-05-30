import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';


let name = "Rahul ";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');
  
  const toggleMode = () => {
    if(mode=="light"){
      console.log("dark mode");
      document.body.style.background = "rgb(54 60 66)";
      setMode("dark")
    }else{
      console.log("light Mode");
      setMode("light");
      document.body.style.background = "white";
    }
  }
  return (
    <Router>

    <Navbar  mode={ mode} toggleMode={toggleMode} />

    <Routes>
      <Route path="/" element={<TextForm mode={ mode } title="Enter your text to preview " />} />
      <Route path="/about" element={<About title="About Us" /> } />
    </Routes>

    {/* <Alert alert="This is an alert" /> */}
    
    
    {/* <About title="About Us" /> */}
    </Router>

  );
}

export default App;
