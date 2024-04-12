import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NEW from './Component/NEW';
import Navbar from './Component/Navbar';
import Text from './Component/Text';

function App() {
  const [mode, setMode] = useState("white");

  const toggle = () => {
    const newMode = mode === 'white' ? 'dark' : 'white';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? '#031526' : 'white';
  };

  return (
    <Router>
      <Navbar title="sunglass" mode={mode} toggle={toggle} />
      <div className="container">
        <Routes>
          
          <Route exact path="/home" element={<NEW  />} />

          <Route exact path="/about"  element={<Text mode={mode} />} />
  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 