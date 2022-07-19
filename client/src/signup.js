import './App.css';
import { useState } from "react";
import {Route,Routes, NavLink} from 'react-router-dom';
import Axios from "axios";
import Login from './login';

function Signup() {
    let message=""
    
    const [capctha,setCaptcha]=useState(Math.random().toString(36).substring(2,8));
    const [result,setResult]=useState("Already Have an Account? Login Here");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setRePassword]=useState("");
    const [name,setName]=useState("");
    const [phNo,setPhNo]=useState("");
    const [capcthaEntered, setcapcthaEntered]=useState("");
    const [message1,setMessage]=useState("");
    const changecaptcha = () =>{
      setCaptcha("");
    setCaptcha(Math.random().toString(36).substring(2,8))
    }
    const signup = () =>{
        if(password===repassword && phNo.length===10 &&capctha===capcthaEntered)
        {
            Axios.post('http://localhost:3001/signup', {
      email: email,
      password: password,
      phno:phNo,
      name:name,
    }).then((response) => {
    //   setMessage(response.data);
    message=response.data;
      console.log(message);
      if(message==="Successful")
    {
        //window.location.href = "http://localhost:3000";
        setMessage(response.data);
        localStorage.setItem("Email", email);
        localStorage.setItem("Name", name);
       setResult("Now Login");
    }
    else{
        setMessage("Unsuccessful");
        localStorage.setItem("Name", "");
        localStorage.setItem("Email", "");
        message="Unsuccessful";
        setResult("Signup before Login");
    }
    });
    
        }
        
    }
  return (
    <>
        <main className="signup-form">
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card">
                <div class="card-header" id="cardTitle">Sign Up</div>
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
        <label class="col-md-4 col-form-label text-md-right" id="elem">Name : </label>
        <div class="col-md-6">
        <input type="text" class="form-control" required
        onChange={(event)=>{setName(event.target.value)}}></input>
        </div>
        </div>
        <br/>
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Phno : </label>
        <div class="col-md-6">
        <input type="text" class="form-control" required
        onChange={(event)=>{setPhNo(event.target.value)}}></input>
        </div>
        </div>
        <br/>
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Set Password : </label>
        <div class="col-md-6">
        <input type="password" class="form-control" required
        onChange={(event)=>{setPassword(event.target.value)}}></input>
        </div>
        </div>
        <br/>
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Re-Enter Password : </label>
        <div class="col-md-6">
        <input type="password" class="form-control" required
        onChange={(event)=>{setRePassword(event.target.value)}}></input>
        </div>
        </div>
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
        <br/>
        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Enter Captcha : </label>
        <div class="col-md-6">
        <input type="text" class="form-control"
        onChange={(event)=>{setcapcthaEntered(event.target.value)}}></input>
        </div>
        </div>
        <br/>
        <br/>
        <center>
        <button id="btn" class="btn btn-primary" onClick={signup}>Signup</button>
        </center>
        <br></br>
        {message1}
        <br></br>
        <center>
        <button class="btn btn-link" id="elem"><NavLink to="/login">{result}</NavLink></button>
       <Routes>
         <Route to="/login" element={<Login />}></Route>
       </Routes>
       </center>
       </div>
        </div>
        </div>
       </div>
        </div>
       </main>
    </>
  );
}

export default Signup;