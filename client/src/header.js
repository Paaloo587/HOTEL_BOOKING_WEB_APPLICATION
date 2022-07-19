//import './App.css';
import './header.css'
import {NavLink} from 'react-router-dom';
import Axios from "axios";
import { React, useState } from "react";
function Header() {
  let dis;
  const [custList,setCustList]=useState([]);
  //localStorage.setItem("Email","")
  const storedetails = () =>
  {
    let email=localStorage.getItem("Email");
      
      Axios.post('http://localhost:3001/profile', {
      email: email,
    }).then((response) => {
      // setCustList(response.data);
      let obj=Object.values(response.data);
      console.log(obj[0].mobile_no);
      localStorage.setItem("Phno", obj[0].mobile_no);
      localStorage.setItem("Name", obj[0].name);
    //   {custList.map((value,key)=>{
    //     console.log(value.mobile_no);
    //     localStorage.setItem("Phno", value.mobile_no);
    //     localStorage.setItem("Name", value.name);
    // })}
    });
  }

  if(localStorage.getItem("Email").length>=1)
  {
    dis=<NavLink to='/profile' onClick={storedetails} style={({ isActive }) => ({
      color: isActive ? 'white' : 'gold'
    })}>Profile</NavLink>;
  }
  else{
    dis=<NavLink to='/login' style={({ isActive }) => ({
      color: isActive ? 'white' : 'gold'
    })}>Login</NavLink>;
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <div class="col">
      <NavLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
</svg>
</NavLink>
            </div>
            <div class="collapse navbar-collapse"> 
            <div class = "row justify-content-md-center"> 
            <ul class="navbar-nav">
              <div class="col-md-11">
              <li class="nav-item active">
                {/* <a href="#HOME" id="top-link" class="brdr" >Home</a> */}
                <div><NavLink to="/" style={({ isActive }) => ({
    color: isActive ? 'white' : 'gold'
  })}>Home</NavLink></div>
                </li>
                </div>
                <div class="col-md-11">
                <li class="nav-item">
                {/* <a href="login.js" id="top-link" class="brdr" >LOG IN</a> */}
                {/* style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })} */}
                <NavLink to="/search" onClick={storedetails} style={({ isActive }) => ({
    color: isActive ? 'white' : 'gold'
  })}>Search</NavLink>
              </li></div>
              <div class="col-md-11">
              <li class="nav-item">
                {/* <a href="login.js" id="top-link" class="brdr" >LOG IN</a> */}
                {dis}
                {/* <NavLink to="/login">Login</NavLink> */}
            </li>
            </div>
            {/* hello */}
            </ul>
            </div>
        </div> 
    </div>
    </nav>
  );
}
export default Header;