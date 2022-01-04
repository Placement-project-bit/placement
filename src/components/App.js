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
    <Home/>
    <Routes>
      <Route path='/' >{Home }</Route>
      <Route path='/login' >{Login}</Route>
      <Route path='/resource'>{Resources }</Route>
    </Routes>
    <Footer/>
    
    
    </Router>
    
            
            
  );
}

export default App;
