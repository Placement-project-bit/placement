import React, { Fragment, useRef, useState } from 'react';
import "./Login.css";
import Loader from '../../Loader/Loader';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {clearErrors, login} from '../../../actions/userAction';
import { useAlert } from 'react-alert';

const usnicon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
  <path d="M0 0h24v24H0V0z" fill="none"/>
  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z"/>
</svg>

const lockicon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
  <path d="M0 0h24v24H0V0z" fill="none"/>
  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
</svg>

const Login = () => {

  const dispatch = useDispatch();
  const studentTab = useRef(null);
  const facultyTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginUSN, setLoginUSN] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const switchTabs = (e, tab) => {
      if(tab==='student'){
        switcherTab.current.classList.add("shiftToNeutral");
        switcherTab.current.classList.remove("shiftToRight");
        facultyTab.current.classList.remove("shiftToNeutralForm");
        studentTab.current.classList.remove("shiftToLeft");
      }
      if(tab==='faculty'){
        switcherTab.current.classList.add("shiftToRight");
        switcherTab.current.classList.remove("shiftToNeutral");
        facultyTab.current.classList.add("shiftToNeutralForm");
        studentTab.current.classList.add("shiftToLeft");
      }
  };

  const StdloginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginUSN, loginPassword));
  };

  const FcltloginSubmit = () => {
    console.log('Form Submitted');
  };

  return (
  <Fragment>
    <div className='LoginContainer'>
      <div className='LoginBox'>
        <div>
          <div className='Login_toggle'>
            <p onClick={(e) => switchTabs(e, "student")}>STUDENT</p>
            <p onClick={(e) => switchTabs(e, "faculty")}>FACULTY</p>
          </div>
          <button ref={switcherTab}></button>
        </div>
        <form className='Studentform' ref={studentTab} onSubmit={StdloginSubmit}>
          <div className='loginUSN'>
            {usnicon}
            <input 
              type="text"
              placeholder='USN'
              required
              value={loginUSN}
              onChange={(e)=> setLoginUSN(e.target.value)}
            />
          </div>
          <div className='loginPassword'>
            {lockicon}
            <input 
              type='password'
              placeholder='Password'
              required
              value={loginPassword}
              onChange={(e)=> setLoginPassword(e.target.value)}
            />
          </div>
          <Link to='password/forgot'>Forgot Password?</Link>
          <input 
            type='submit'
            value='Login'
            className='SloginBtn'
          />
        </form>
        <form className='Facultyform' ref={facultyTab} onSubmit={FcltloginSubmit}>
          <div className='loginID'>
            {usnicon}
            <input 
              type="text"
              placeholder='ID'
              required
              value={loginUSN}
              onChange={(e)=> setLoginUSN(e.target.value)}
            />
          </div>
          <div className='loginPassword'>
            {lockicon}
            <input 
              type='password'
              placeholder='Password'
              required
              value={loginPassword}
              onChange={(e)=> setLoginPassword(e.target.value)}
            />
          </div>
          <Link to='password/forgot'>Forgot Password?</Link>
          <input 
            type='submit'
            value='Login'
            className='TloginBtn'
          />
        </form>
      </div>
    </div>
  </Fragment>
  );
};

export default Login;
