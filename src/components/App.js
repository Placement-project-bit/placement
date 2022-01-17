import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CompanyDetails from './pages/ComapanyDetails';
import Demo from './pages/Resources';
import Navbar from './Navbar/Navbar';
import Resources from "./pages/Resources";
import './App.css';
import Footer from "./footer/Footer";

function App() { 
  return (

  <Router>
    <Navbar/>
    <Routes>
      <Route path='/home' element = {
        <Home>
          <Routes>
            
          </Routes>
        </Home>
      }></Route>
      <Route path='/' element = {<CompanyDetails />}></Route>
      <Route path='/' element = {<Resources />}></Route>
      <Route path='/' element = {<Login />}></Route>
    </Routes>
    <Footer/>
    
    
    </Router>
    
            
            
  );
}

export default App;
