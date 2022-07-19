import './App.css';
import { useState } from "react";
import Axios from "axios";
import MoreDeatils from './moredetails';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

function More() {
    let ID=parseInt(localStorage.getItem("ID"));
    let indate=localStorage.getItem("indate");
    let outdate=localStorage.getItem("outdate");
    const [hotelList,setHotelList]=useState([]);
    const [commentsList,setCommentsList]=useState([]);
    
    Axios.post('http://localhost:3001/hotelsmore', {
      ID: ID,
      indate: indate,
      outdate: outdate,
    }).then((response) => {
      setHotelList(response.data);
    });
    let dis;
    if(localStorage.getItem("Email").length>=1)
    {
      dis=<NavLink to='/bookhotel' style={{color: 'white'}}>Book</NavLink>;
    }
    else{
      dis=<div></div>;
    }
  return (
    <>
     <div className="App">
      
      {hotelList.map((value,key)=>(
          
          <div>
          <MoreDeatils ID={value.ID} Name={value.Name} City={value.City} Area={value.Area}
          phno={value.PhNo} Price={value.Price} swim={value.swim} wifi={value.wifi}
          restaurant={value.restaurant} ac={value.ac} tings={value.Ratings} />
          </div>
          
      ))}
      <br/>
        <center>
      <button class="btn btn-primary" id="elem" style={{borderRadius: '12px'}}>
         {dis}
      </button>
      </center>
  </div>
    </>
   
  );
}

export default More;