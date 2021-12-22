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
    <Routes>
            
        
    <Route path="/" element={<Home/>}/>
    <Route path="/Login"  element={<Login/>}/>
    <Route path="/CompanyDetails"  element={<CompanyDetails/>}/>
    <Route path="/Resources"  element={<Demo/>}/>
    
    </Routes>
    
    </Router>
    
            
            
  );
}

export default App;
