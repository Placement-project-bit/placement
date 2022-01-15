import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="topnav" >  
      <a href="https://bit-bangalore.edu.in/" >
        <img  className="topnavimg" src="https://upload.wikimedia.org/wikipedia/en/d/d7/Bangalore_Institute_of_Technology_logo.png" alt="logo" />
        <p>Bangalore Institute of Technology</p>
        <span>Placement Cell</span> 
      </a>
      </div> 

      <div className="nav">
        <Link className='navlinks' to='/'>Home</Link>
        <Link className='navlinks' to='/companydetails'>Company Details</Link>
        <Link className='navlinks' to='/resource'>Resources</Link>
      </div>

      <div className="login">
        <Link className='navlogin' to='/login'>Login</Link>
      </div>

    </div>
  );
};

export default Navbar;