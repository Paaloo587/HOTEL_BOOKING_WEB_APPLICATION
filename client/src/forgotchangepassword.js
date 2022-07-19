import './App.css';
import { useState } from "react";
import Axios from "axios";

function FCP() {
  let email=localStorage.getItem("ChnEmail");
  const [newPassword,setNewPassword]=useState("");
  const [reNewPassword,setReNewPassword]=useState("");
  const [message,setMessage]=useState("");
  const passwordchange = () =>{
    if(newPassword==reNewPassword)
    {
      Axios.post('http://localhost:3001/changepasswordemail', {
            email: email,
            password:newPassword,
    }).then((response) => {
       if(response.data=='SUCCESS')
       {
        setMessage("Sucsess");
       }
       else
       {
        setMessage("Failure");
       }
    });
    }
    else{
      setMessage("Failure");
    }
      }
      
  return (
    <main>
       <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card">
                <div class="card-header" id="cardTitle">New Password Setting</div>
                <div class="card-body">
                <div class="form-group row">            
      <label class="col-md-4 col-form-label text-md-right" id="elem">Enter New Password</label>
      <div class="col-md-6">
      <input type="text" class="form-control" required autoFocus
       onChange={(event)=>{setNewPassword(event.target.value)}}></input>
       </div>
       </div>
      <br/>
      <div class="form-group row">            
      <label class="col-md-4 col-form-label text-md-right" id="elem">Enter Again Password</label>
      <div class="col-md-6">
      <input type="text" class="form-control" required autoFocus
       onChange={(event)=>{setReNewPassword(event.target.value)}}></input>
       </div>
       </div>
      <br/>
      <div class = "form-group row">
        <center>
      <button class="btn btn-primary" id="btn" onClick={passwordchange}>Submit</button>
      </center>
      </div>
      {message}
      </div>
      </div>
      </div>
      </div>
      </div>
    </main>
  );
}

export default FCP;