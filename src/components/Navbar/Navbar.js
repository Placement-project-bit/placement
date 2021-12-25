import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (<>
    <div>
      <div className="topnav" >  
        <img  className="topnavimg" src="https://upload.wikimedia.org/wikipedia/en/d/d7/Bangalore_Institute_of_Technology_logo.png" alt="" />

        <div className="h1topnav" >
        <h2> <strong>Bangalore Institute of Technology</strong> </h2>
        </div>
       
        </div> 

    </div>
    <div className="nav">
      <div className="navdiv">
        <div>
          
          <Link className='navlinks' to='/'>Home</Link>
          <Link className='navlinks' to='/companydetails'>Company Details</Link>
          <Link className='navlinks' to='/resource'>Resources</Link>
        </div>
        <div>
          <Link className='navlogin' to='/login'>Login</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;