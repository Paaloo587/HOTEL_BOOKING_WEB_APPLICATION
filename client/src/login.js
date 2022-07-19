//import './App.css';
import { useState } from "react";
import Axios from "axios";
import {Route,Routes, NavLink} from 'react-router-dom';
import Signup from './signup';
import './login.css';

function Login() {
    let obj;
    const [capctha,setCaptcha]=useState(Math.random().toString(36).substring(2,8));
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [custList,setCustList]=useState([]);
    const [message, setMessage]=useState("");
    const [capcthaEntered, setcapcthaEntered]=useState("");
    const changecaptcha = () =>{
      setCaptcha("");
    setCaptcha(Math.random().toString(36).substring(2,8))
    }
    const logincheck = () => {
        Axios.post('http://localhost:3001/custlogin', {
      email: email,
      password: password,
    }).then((response) => {
    // setCustList(response.data);
    obj=Object.values(response.data);
    console.log(obj);
    if(obj.length===1&&capctha===capcthaEntered)
    {
        localStorage.setItem("Email", email);
        localStorage.setItem("Phno", obj[0].mobile_no);
      localStorage.setItem("Name", obj[0].name);
        window.location.href = "http://localhost:3000";
    }
    else{
        setMessage("Login Failed");
    }
    });
    }
  return (
    <>
        <main className="login-form">
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card">
                <div class="card-header" id="cardTitle">Login</div>
                <div class="card-body">
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Email : </label>
        <div class="col-md-6">
        <input type="text" class="form-control" required autofocus
        onChange={(event)=>{setEmail(event.target.value)}}></input>
        </div>
        </div>
        <br/>
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Password : </label>
        <div class="col-md-6">
        <input type="password" class="form-control" required
        onChange={(event)=>{setPassword(event.target.value)}}></input>
        </div>
        </div>
        <br></br>
        <br/>
        
        <div class="form-group row">
        <div class="col-md-12">
        <center>
        <div id="captcha-string">{capctha}</div>
        <br/>
        <button class="btn btn-outline-primary" onClick={changecaptcha} id='btn'>Change Captcha</button>
        </center>
        </div>
        </div>
        <br></br>
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Enter Captcha : </label>
        <div class="col-md-6">
        <input type="text" class="form-control"
        onChange={(event)=>{setcapcthaEntered(event.target.value)}}></input>
        </div>
        </div>
        <br/>
        <br/>
        <div class="form-group row">
        
        <center>

        <button id="btn" onClick={logincheck} class="btn btn-primary" >Login</button>

        </center>
        </div>
        <br/>

        <div class="form-group row">
        <button class="btn btn-link" id="elem"><NavLink to="/signup">New? Signup Up Right Now</NavLink></button>
        </div>
        <div class="form-button row">
        <button class="btn btn-link" id="elem"><NavLink to="/forgotpassword">Forgot Password</NavLink></button>
        </div>
        {/* <Routes>
          <Route to="/signup" element={<Signup />}></Route>
        </Routes> */}
        <div class="form-button row">
        <button class="btn btn-link" id="elem"><NavLink to="/adminlogin">Admin Login</NavLink></button>
        </div>
        {message}
        </div>
        </div>
        </div>
        </div>
        </div>
      </main>
    </>
  );
}

export default Login;