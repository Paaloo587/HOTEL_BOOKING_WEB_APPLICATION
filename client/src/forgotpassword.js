//import './App.css';
import { useState } from "react";
import Axios from "axios";
import {Route,Routes, NavLink} from 'react-router-dom';
import './forgotpassword.css'

function ForgotPassword() {
    const [email,setEmail]=useState("");
    const [code,setCode]=useState(Math.floor(1000 + Math.random() * 9000));
    const [codeEntered,setCodeEntered]=useState("");
    const codecheck = () =>{
      console.log(code);
      console.log(codeEntered);
      if(code==codeEntered)
      {
        localStorage.setItem("ChnEmail",email);
        window.location.href = "http://localhost:3000/forgotchangepassword";
      }
      else
      {
        window.location.href = "http://localhost:3000/forgotpassword";
        console.log('Error');
      }
    }
    const sendemail = () =>{
        Axios.post('http://localhost:3001/forgotpassword', {
      email: email,
      code: code,
    }).then((response) => {
        console.log(response.data);
    });
    
    }
  return (

        <main className="forgot-form">
          <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card">
                <div class="card-header" id="cardTitle">Forgot Password</div>
                <div class="card-body">
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Enter Email : </label>
        <div class="col-md-6">
        <input type="text" class="form-control" required autoFocus
        onChange={(event)=>{setEmail(event.target.value)}}></input>
        </div>
        </div>
        <br/>
        <div class="form-group row">
          <center>
        <button class="btn btn-primary" id="btn" onClick={sendemail}>Send Email</button>
        </center>
        </div>
        <br/>
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Enter Code</label>
        <div class="col-md-6">
        <input type="text" class="form-control" required autoFocus onChange={(event)=>{setCodeEntered(event.target.value)}}></input>
        </div>
        </div>
        <br/>
        <div class="form-group row">
          <center>
        <button class="btn btn-primary" id="btn" onClick={codecheck}>Check Code</button>
        </center>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </main>
   
  );
}

export default ForgotPassword;