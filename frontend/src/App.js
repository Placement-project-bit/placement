import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import CompanyDetails from './components/pages/companydetailes/ComapanyDetails';
import Navbar from './components/Navbar/Navbar';
import Resources from "./components/pages/resources/Resources";
import './App.css';
import Footer from "./components/footer/Footer";

function App() { 
  return (

  <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element = {Home} />
      <Route exact path='/home' element = {<Home />} />
      <Route exact path='/companydetails' element = {<CompanyDetails />} />
      <Route exact path='/resources' element = {<Resources />} />
      <Route exact path='/login' element = {<Login />} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
