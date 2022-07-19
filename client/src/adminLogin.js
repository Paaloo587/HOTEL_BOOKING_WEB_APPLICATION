import './App.css';
import { useState } from "react";
import Axios from "axios";

function AdminLogin() {
    const [capctha,setCaptcha]=useState(Math.random().toString(36).substring(2,8));
    const [email,setEmail]=useState("");
    const [capcthaEntered, setcapcthaEntered]=useState("");
    const [code,setCode]=useState(Math.floor(1000 + Math.random() * 9000));
    const [codeEntered,setCodeEntered]=useState("");
    let dis;
    const changecaptcha = () =>{
        setCaptcha("");
      setCaptcha(Math.random().toString(36).substring(2,8))
      }
      const checkcode = () =>{
          console.log(codeEntered);
          console.log(code);
          if(codeEntered==code)
          {
              localStorage.setItem("Hotelemail", email);
              window.location.href="http://localhost:3000/hotelpage";
          }
          else
          {
            //   alert("Fail");
          }
      }
      const logincheck = () => {
          Axios.post('http://localhost:3001/hotellogin', {
        email: email,
        code: code,
      }).then((response) => {
      if(capctha===capcthaEntered&&response.data=='Success')
      {
          alert("Code Sent to your email");
      }
      else
      {
          alert("Retry Again");
      }
      });
      }
  return (
  
    <main className="login-form">
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card">
                <div class="card-header" id="cardTitle">Admin-Login</div>
                <div class="card-body" style={{padding: '10%'}}>
                <div class="form-group row">
                <label  class="col-md-4 col-form-label text-md-right" id="elem">Email : </label>
                <div class="col-md-6">
                  <input type="text" class="form-control" required autofocus
                  onChange={(event)=>{setEmail(event.target.value)}}></input>
                </div>
                </div>
                <br/>
                <div class="form-group row">
                  <center>
                <div id="captcha-string">{capctha}</div>
                </center>
                <center>
                  <br/>
                <button class="btn btn-primary" id="btn" onClick={changecaptcha}>Change Captcha</button>
                </center>
                </div>
                <br/>
                <br/>
                <div class="form-group row">
                <label class="col-md-4 col-form-label text-md-right" id="elem">Enter Captcha : </label>
                <div class="col-md-6">
                <input type="text" class="form-control" required autofocus
                onChange={(event)=>{setcapcthaEntered(event.target.value)}}></input>
                </div>
                </div>
                <div class="form-group row">
                  <center>
                    <br/>
                <button class="btn btn-primary" id="btn" onClick={logincheck}>Send Gmail</button>
                </center>
                </div>
                <br/>
                <br/>
                <div class="form-group row">
                <label class="col-md-4 col-form-label text-md-right" id="elem">Code : </label>
                <div class="col-md-6">
                <input type="text" class="form-control" required autofocus
                onChange={(event)=>{setCodeEntered(event.target.value)}}></input>
                </div>
                </div>
                <br/>
                <center>
                <button class="btn btn-primary" id="btn" onClick={checkcode}>Login</button>
                
                </center>
                </div></div></div>
                </div>
                </div>
              </main>  
    
  );
}

export default AdminLogin;