import './App.css';
import { useState } from "react";
import Axios from "axios";

function HotelPage() {
    let email=localStorage.getItem("Hotelemail");
    const [hotelList,setHotelList]=useState([]);
    const [commentsList,setCommentsList]=useState([]);
    const [cancelList,setCancelList]=useState([]);
    const [bookingList,setBookingList]=useState([]);
    Axios.post('http://localhost:3001/adminhoteldetails', {
        email: email,
      }).then((response) => {
          setHotelList(response.data);
      });
      Axios.post('http://localhost:3001/admincustcomments', {
        email: email,
      }).then((response) => {
          setCommentsList(response.data);
      });
      Axios.post('http://localhost:3001/admincustcancel', {
        email: email,
      }).then((response) => {
          setCancelList(response.data);
      });
      Axios.post('http://localhost:3001/admincustbooking', {
        email: email,
      }).then((response) => {
          setBookingList(response.data);
      });
      const logout = () => {
        localStorage.setItem("Hotelemail", "");
        window.location.href = "http://localhost:3000/login";
    }
  return (
    <div className="App">
      {hotelList.map((value,key)=>{
          let a=["","",""]
          if(value.swim==1)
          {
              a[0]='Swim is there';
          }
          else{
            a[0]='Swim is not there';
          }
          if(value.wifi==1)
          {
              a[1]='Wifi is there';
          }
          else{
            a[1]='Wifi is not there';
          }
          if(value.ac==1)
          {
              a[2]='AC is there';
          }
          else{
              a[2]='AC is not there';
          }
          return<>
          <div class="card container" style={{borderRadius : '30px', padding: '2% 2% 3% 12%', backgroundImage : 'linear-gradient(to right,#ee9ca7,#ffdde1)'}}>
          <div class="row">
          <div class="col-md-8">
          <div id="name" style={{padding: '2% 2% 3% 2%',color: 'navy'}}>{value.Name}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}> ID: {value.ID}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}> location: {value.City}, {value.Area}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}> Phno: {value.PhNo}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}> Price: {value.Price}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}> Ratings: {value.Ratings}</div>
          {/* <div class = "col" id ="loc" style={{paddingTo5: '2%',color: 'black'}}>{value.ID}</div> */}
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>{a[0]}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>{a[1]}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>{a[2]}</div>
          </div> 
          </div>
          </div>
          </>
        })}
        
        <h3 id="name" style={{padding: '2% 2% 3% 2%',color: 'navy'}}>Comments About this Hotel</h3>
        {commentsList.map((value,key)=>{
          return<>
          <div class="card container" style={{borderRadius : '30px', padding: '2% 2% 3% 12%', backgroundImage : 'linear-gradient(to right,#ee9ca7,#ffdde1)'}}>
          <div class="row">
          <div class="col-md-8">
            <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>Comments: {value.comments}</div>
            <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>Ratings: {value.ratings}</div>
            <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>Name of Customer: {value.name}</div>
          </div>
          </div>
          </div>
          </>
        })}
        <h3 id="name" style={{padding: '2% 2% 3% 2%',color: 'navy'}}>Cancel Reasons for your hotel</h3>
        {cancelList.map((value,key)=>{
          return<>
          <div class="card container" style={{borderRadius : '30px', padding: '2% 2% 3% 12%', backgroundImage : 'linear-gradient(to right,#ee9ca7,#ffdde1)'}}>
          <div class="row">
          <div class="col-md-8">
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>Reason: {value.reason}</div>
          </div>
          </div>
          </div>
          <br></br>
          </>
        })}
        <h3 id="name" style={{padding: '2% 2% 3% 2%',color: 'navy'}}>Booking details for your hotel</h3>
        {bookingList.map((value,key)=>{
            let str="";
            if(value.paybyhotel==1)
            {
                str="Pay At Hotel"
            }
            else
            {
                str="Transaction ID : "+value.booking_no;
            }
          return<>
           <div class="card container" style={{borderRadius : '30px', padding: '2% 2% 3% 12%', backgroundImage : 'linear-gradient(to right,#ee9ca7,#ffdde1)'}}>
          <div class="row">
          <div class="col-md-8">
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>Email: {value.email_id}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>status: {str}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>Rooms:{value.rooms}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>Indate:{value.indate}</div>
          <div class = "col" id ="loc" style={{paddingTop: '5%',color: 'black'}}>Outdate:{value.outdate}</div>
          </div>
          </div>
          </div>
          </>
        })}
        <br/>
        <center>
        <button class="btn btn-primary" id="btn" onClick={logout}>Logout</button>
        </center>
    </div>
  );
}

export default HotelPage;