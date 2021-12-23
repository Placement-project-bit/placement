import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navdiv">
        <div>
          <a className='head' href='https://bit-bangalore.edu.in/'>BIT</a>
          <Link className='navlinks' to='/home'>Home</Link>
          <Link className='navlinks' to='/companydetails'>Company Details</Link>
          <Link className='navlinks' to='/resource'>Resources</Link>
        </div>
        <div>
          <Link className='navlogin' to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;