//import './App.css';
import './profile.css'
import Axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Profile() {
  let navigate=useNavigate();
      let email=localStorage.getItem("Email");
      let phno=localStorage.getItem("Phno");
      let name=localStorage.getItem("Name");
      const [bookingHistory,setBookingHistory]=useState([]);
    Axios.post('http://localhost:3001/displaybookinghistory', {
      email: email,
    }).then((response) => {
      setBookingHistory(response.data);
    });
    //   const [custList,setCustList]=useState([]);
    //   Axios.post('http://localhost:3001/profile', {
    //   email: email,
    // }).then((response) => {
    //   setCustList(response.data);
    // });
    const logout = () => {
        localStorage.setItem("Email", "");
        localStorage.setItem("Name", "");
        localStorage.setItem("Phno", "");
        window.location.href = "http://localhost:3000";
    }
  return (
    <>
    <div>
    <div class="card container col-10 heck" style={{backgroundImage: 'linear-gradient(to right,#de6262, #ffb88c', borderRadius: '40px'}}>
        <h1 class="head" style={{textAlign : 'center', color: 'navy'}}> Personal Details</h1>
        <br/>
        <p class="container col-3 item" style={{fontFamily: 'Raleway, sans-serif', color: 'black'}}><b style={{fontFamily: 'Poppins, sans-serif', color: 'darkred'}}>Name :</b>     {name} </p>
        <br/>
        <p class="container col-3 item" style={{fontFamily: 'Raleway, sans-serif', color: 'black'}}><b style={{fontFamily: 'Poppins, sans-serif', color: 'darkred'}}>Email ID :</b> {email} </p>
        <br/>
        <p class="container col-3 item" style={{fontFamily: 'Raleway, sans-serif', color: 'black'}}><b style={{fontFamily: 'Poppins, sans-serif', color: 'darkred'}}>Mobile :</b>   {phno} </p>
        <br></br>
        <div class = "container">
          <center>
        <button class="btn btn-primary" id="btn" onClick={logout}>Logout</button>
        </center>
        </div>
        <br/>
        <div class = "container">
          <center>
        {/* <button onClick={chanpassword}>Change Password</button> */}
        <button class="btn btn-primary" id="btn" onClick={()=>{(navigate("/passwordreset"))}}>Change Password</button>
          </center>
        </div>
        </div>  
        <br/>
        <br/>
        <div class="card container col-10 heck" style={{backgroundImage: 'linear-gradient(to right,#de6262, #ffb88c', borderRadius: '40px'}}>
        <h1 class="head2" style={{paddingLeft: '6%'}}>Booking History</h1>
        <br/>
        {bookingHistory.map((value,key)=>{
           const cancelhot =() =>{
            localStorage.setItem("cancelemail",value.email_id);
          localStorage.setItem("cancelID",value.ID);
          window.location.href = "http://localhost:3000/cancelhotels";
          }
          let str;
          if(value.paybyhotel==1)
          {
            str="Pay at Hotel";
          }
          else
          {
            str="Transaction ID : "+value.booking_no;
          }
         
          return<>
          <div class="card container" style={{borderRadius: "30px", backgroundImage: "linear-gradient(to right,#43cea2,#185a9d)"}}>
          <div class="row">
              <div class="col-md-8">
                  <div id="name" style={{padding: '2% 2% 3% 5%',color: 'navy'}}>{value.Name}</div>
              </div>
                  <div class = "col" id ="loc" style={{paddingTop: '2%',color: 'black'}}>{value.Area}, {value.City}</div>
          </div>
          <div class="col-6">
          <h2></h2>
          </div>
          <h2 class="det">Check-In  : <i class="detpara" >{value.indate}</i></h2>
          <h2 class="det">Check-Out : <i class="detpara" >{value.outdate}</i></h2>
          <h2 class="det">{(parseInt(value.Price)*parseInt(value.rooms))}</h2>
          <h2  class="det">{str}</h2>
          <br/>
          <center>
          <button class="btn btn-primary" id="btn" onClick={cancelhot}>Cancel</button>
          </center>
          <br/>
          </div>
          <br/>
          </>
        })}
        </div>
        
    </div>
    <br/>
    </>
  );
}

export default Profile;