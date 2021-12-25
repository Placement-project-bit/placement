import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CompanyDetails from './pages/ComapanyDetails';
import Demo from './pages/Resources';
import Navbar from './Navbar/Navbar';
import './App.css';

function App() {
  return (

  <Router>
    
    <Navbar/>
    <Home/>
    
    </Router>
    
            
            
  );
}

export default App;
