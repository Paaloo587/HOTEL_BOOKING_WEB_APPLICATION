//import './App.css';
import { useState } from "react";
import Axios from "axios";
import {NavLink} from 'react-router-dom';
import './bookhotel.css';

function Bookhotel() {
    let email=localStorage.getItem("Email");
    let indate=localStorage.getItem("indate");
    let outdate=localStorage.getItem("outdate");
    let rooms=localStorage.getItem("noofrooms");
    let ID=localStorage.getItem("ID");
    let id=Date.now();
    let name=localStorage.getItem("Name");
    let hotelname=localStorage.getItem("hotelname");
    let price=localStorage.getItem("price");
    const paynow = () =>{
        Axios.post('http://localhost:3001/payathotel', {
      ID: ID,
      indate: indate,
      outdate: outdate,
      rooms:rooms,
      email:email,
      id: id,
      name:name,
      hotelname:hotelname,
      price:price,
    }).then((response) => {
        if(response.data=="Successful")
        {
            localStorage.setItem("indate","");
            localStorage.setItem("outdate","");
            localStorage.setItem("noofrooms", "");
            localStorage.setItem("price","");
            window.location.href = "http://localhost:3000/bookdone";
        }
        else
        {
            localStorage.setItem("indate","");
            localStorage.setItem("outdate","");
            localStorage.setItem("noofrooms", "");
            localStorage.setItem("price","");
            window.location.href = "http://localhost:3000/bookfailed";
        }
    });
    }
  return (
      <main className="login-form">
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card" style={{borderRadius: '30px'}}>
                <div class="card-header" id="cardTitle" style={{borderRadius: '30px'}}>Choose Method of Payment</div>
                <div class="card-body">
                <center>
      <div class="form-group col">
        
      <div class="form-group row">
      <button class="btn btn-primary" id="elem2" onClick={paynow} style={{borderRadius: '30px'}}><div id="elem1">Pay at Hotel</div></button>
      </div>
      <br/>
      <div class="form-group row">
      <button class="btn btn-primary" id="elem" style={{borderRadius: '30px'}}>
      <NavLink to="/booknow" style={{textDecoration: 'none', color:'white'}} >Pay now</NavLink>
      </button>
      </div>
      </div>
      </center>
      <br/>
    </div>
    </div>
    </div>
    </div>
    </div>
    </main>
  );
}

export default Bookhotel;