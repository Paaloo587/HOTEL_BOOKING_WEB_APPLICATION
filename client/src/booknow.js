import './App.css';
import * as React from "react";
import { useState } from 'react';
import Axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//import MonthPicker from '@mui/x-date-pickers-pro/MonthPicker';

function BookNow() {
    const [carddetails,setCarddetails]=useState("");
    const [cardNo,setCardNo]=useState("");
    const [expirydate,setExpirydate]=useState("");
    const [cvc,setCVC]=useState("");
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
        Axios.post('http://localhost:3001/paynow', {
      ID: ID,
      indate: indate,
      outdate: outdate,
      rooms:rooms,
      email:email,
      id: id,
      name:name,
      hotelname:hotelname,
      price:price,
      cvc:cvc,
      expirydate: expirydate+'-01',
      cardno:cardNo,
      carddetails:carddetails,
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
   // const [CardType, setAge] = React.useState('');
  return (
    <main className='Card-Details'>
      <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card" style={{borderRadius: '30px'}}>
                <div class="card-header" style={{borderRadius: '30px'}} id="cardTitle">Enter Card Details</div>
                <div class="card-body" style={{padding: '10% 10% 10% 20%'}}>
      <div class="form-group row container">
      <label class= "col-md-4 col-form-label text-md-right" id="elem">Card Type: </label>
      
      <br/>
      <br/>
      {/* <input type="text" class="form-control" required autofocus
      onChange={(event)=>{setCarddetails(event.target.value)}}></input> */}
      <div class="col-md-6">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Card Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={carddetails}
          label="Card Type"
          onChange= {(event) => {
            setCarddetails(event.target.value);
          }}
        >
          <MenuItem value={'MasterCard'}>MasterCard</MenuItem>
          <MenuItem value={'VISA'}>VISA</MenuItem>
          <MenuItem value={'Rupay'}>Rupay</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
      <br/>
      </div>
      {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, minWidth: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > */}
    <br/>
    <div class='form-group row container'>
    <label class= "col-md-4 col-form-label text-md-right" id="elem">Card Number: </label>
    <div class="col-md-6">
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <TextField id="outlined-basic" label="Card Number" variant="outlined"  onChange={(event)=>{setCardNo(event.target.value)}}/>
      </FormControl>
    </Box>
    </div>
    </div>
    <br/>
    <div class='form-group row container'>
    <label class= "col-md-4 col-form-label text-md-right" id="elem">Expiry Date: </label>
    <div class="col-md-6">
    <input type="month" class="form-control"
      onChange={(event)=>{setExpirydate(event.target.value)}}></input>
    </div>
    </div>
    <br/>
    <div class="form-group row container"  >
    <label class= "col-md-4 col-form-label text-md-right" id="elem">CVC-Code: </label>
    <div class="col-md-6">
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <TextField id="outlined-basic" label="CVC" variant="outlined"  onChange={(event)=>{setCVC(event.target.value)}}/>
      </FormControl>
    </Box>
    </div>
    </div>
      {/* <label>Card Number</label>
      <br></br>
      <input type="number"
      onChange={(event)=>{setCardNo(event.target.value)}}></input>
      <br></br> */}
      {/* <br></br>
      
      <br></br>
      <input type="number"
      onChange={(event)=>{setCVC(event.target.value)}}></input>
      <br></br>
      
      <br></br> */}
      <center>
        <br/>
        <br/>
      <div class="form-group row">
        <div class="col-md-10">
      <Button variant="contained" onClick={paynow}>Pay</Button>
      {/* <button onClick={paynow}>Pay</button> */}
      </div>
      </div>
      </center>
      
      </div>
      </div>
      </div>
      </div></div>
      </main>
  );
}

export default BookNow;