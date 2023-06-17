import React from 'react';
import { BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom';
import Login from './component/Login';
import Welcome from './component/Welcome';
import { useNavigate } from 'react-router-dom'
const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Welcome" element={<Welcome/>} />
        </Routes>
   </Router>
  );
};

export default App;
