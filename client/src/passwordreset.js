import './App.css';
import { useState } from "react";
import Axios from "axios";
function PasswordReset() {
    let message="";
    let email=localStorage.getItem("Email");
    //const [result,setResult]=useState("Already Have an Account? Login Here");
    const [password,setPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [reNewPassword,setReNewPassword]=useState("");
    const passwordchange = () =>{
        Axios.post('http://localhost:3001/custlogin', {
      email: email,
      password: password,
    }).then((response) => {
    const obj=Object.values(response.data);
    console.log(obj);
    if(obj.length===1 && newPassword===reNewPassword)
    {
        Axios.post('http://localhost:3001/changepassword', {
      email: email,
      password: password,
      newpassword: newPassword,
    }).then((response) => {
        console.log(response.data);
        if(response.data==="Success")
        {
            window.location.href = "http://localhost:3000/profile";
        }
        
    });
         
    }
    else{
        message="ReTry Again";
    }
    });
    }
  return (
    <main className="login-form">
    <div class="container">
    <div class="row justify-content-center">
    <div class="col-md-8">
    <div class="card">
                <div class="card-header" id="cardTitle">Change Password</div>
                <div class="card-body">
      <div class="form-group row">
      <label class="col-md-4 col-form-label text-md-right" id="elem">Enter old Password :</label>
      <div class="col-md-6">
      <input type="password" class="form-control" required autofocus
       onChange={(event)=>{setPassword(event.target.value)}}></input>
       </div>
       </div>
      <br></br>
      <br></br>
      <div class="form-group row">
      <label class="col-md-4 col-form-label text-md-right" id="elem">Enter New Password :</label>
      <div class="col-md-6">
      <input type="password" class="form-control" required autofocus
       onChange={(event)=>{setNewPassword(event.target.value)}}></input>
      </div>
      </div>
      <br></br>
      <br></br>
      <div class="form-group row">
      <label class="col-md-4 col-form-label text-md-right" id="elem">Enter Again Password :</label>
      <div class="col-md-6">
      <input type="password" class="form-control" required autofocus
       onChange={(event)=>{setReNewPassword(event.target.value)}}></input>
      </div>
      </div>
      <br></br>
      <br></br>
      <div class="form-group row">
      <center>
      <button class="btn btn-primary" id="btn" onClick={passwordchange}>Submit</button>
      </center>
      </div>
      <br></br>
      {message}
      </div>
      </div>
      </div>
      </div>
    </div>
    </main>
  );
}

export default PasswordReset;