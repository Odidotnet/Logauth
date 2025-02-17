import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup/signup';
import Login from './Login/login';

function App() {

  return (
    
    <div className="App">
  
       <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
