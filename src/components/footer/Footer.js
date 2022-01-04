import React from 'react'
import "./Footer.css";
import { FaFacebookSquare ,FaTwitterSquare} from "react-icons/fa";
import {GrInstagram,GrYoutube} from "react-icons/gr";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <div className='left'>
        © 2021 BIT. All rights reserved.<br/>
        Bangalore Institute of Technology (BIT)
        </div>
        <div className='center'>
            
          <a  className='icons'> <FaFacebookSquare size="35" /></a>
          <a className='icons'> <GrInstagram size="35"/></a>
          <a className='icons'> <FaTwitterSquare size="35"/> </a>
          <a className='icons' ><GrYoutube size="40"/></a>
        

        </div>
        <div className='right'>
            <h3>Contact us</h3>
        BANGALORE INSTITUTE OF TECHNOLOGY<br/>
        K.R. ROAD, V V PURA,<br/>
        BENGALURU-560004<br/>
        INDIA<br/>
        Email:-<br/>
        principalbit4@gmail.com
        </div>
        
      
    </div>
  )
}

export default Footer
