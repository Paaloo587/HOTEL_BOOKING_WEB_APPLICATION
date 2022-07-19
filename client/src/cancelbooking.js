//import './App.css';
import { useState } from "react";
import Axios from "axios";
import './cancelbooking.css'

function CancelBooking(props) {
    let email=localStorage.getItem("cancelemail");
    let ID=localStorage.getItem("cancelID");
    const cancelhotel = () =>{
        Axios.post('http://localhost:3001/cancelhotel', {
            email: email,
            ID: ID,
            option:canceloption,
          }).then((response) => {
            if(response.data=="Success")
            {
                localStorage.setItem("cancelemail","");
                localStorage.setItem("cancelID","");
                window.location.href = "http://localhost:3000/canceldone";
            }
            else{
                localStorage.setItem("cancelemail","");
                localStorage.setItem("cancelID","");
                window.location.href = "http://localhost:3000/cancelfail";
            }
          });
    }
    const [canceloption,setCanceloption]=useState("");

  return (
    <div className="login-form">
      
      <div class="container card" style={{borderRadius: '30px', backgroundImage: 'linear-gradient(to right,#ff512f, #dd2476 )', paddingLeft: '3%', paddingTop: '2%', paddingBottom: '2%'}}>
      
      <h3 id="headM">Oops! Cancelling the Booking?</h3>
      <h4 id="headm">Tell us the reason why you want to cancel so that we might improve our service</h4>
      <br/>
      <div style={{paddingLeft: '5%'}}>
        <div class="form-check">
      <input type="radio" class="form-check-input" name="canceloption" id="canceloption1" value="Found Better Price"
       onClick={(event)=>{setCanceloption(event.target.value)}}/>
       <label for="canceloption1" class="form-check-label ya">Found better price else ware</label>
       </div>
       <div class="form-check">
      <input type="radio" class="form-check-input" name="canceloption" id="canceloption2" value="Change of Plans"
       onClick={(event)=>{setCanceloption(event.target.value)}}/>
       <label for="canceloption2" class="form-check-label ya">Change of Plans</label>
       </div>
       <div class="form-check">
      <input type="radio" class="form-check-input" name="canceloption" id="canceloption3" value="Personal Reasons"
       onClick={(event)=>{setCanceloption(event.target.value)}}/>
       <label for="canceloption3" class="form-check-label ya">Personal Reasons</label>
       </div>
       <div class="form-check">
       <input type="radio" class="form-check-input" name="canceloption" id="canceloption4" value="Other Reasons"
       onClick={(event)=>{setCanceloption(event.target.value)}}></input>
       <label for="canceloption4" class="form-check-label ya">Other Reasons</label>
       </div>
       </div>
       <br/>
       <div style={{paddingLeft: '8%'}}>
       <button class="btn btn-primary" id="btn" style={{borderRadius: "12px"}} onClick={cancelhotel}>Cancel</button>
       </div>
       </div>
    </div>
  );
}

export default CancelBooking;