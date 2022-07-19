import './App.css';
import { useState } from "react";
import Axios from "axios";
import { FaSwimmingPool } from 'react-icons/fa'
import './moredetatils.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/base/TextareaAutosize';

function MoreDeatils(props) {
    let email=localStorage.getItem("Email");
    let ID=parseInt(localStorage.getItem("ID"));
    let rat=props.tings;
    let i=1;
    const [ratings,setRatings]=useState(0);
    const [comments,setComments]=useState("");
    const [message,setMessage]=useState("");
    const [commentsList,setCommentsList]=useState([]);

    Axios.post('http://localhost:3001/commentsdisplay', {
        ID: ID,
      }).then((response) => {
        setCommentsList(response.data);
      });
    const addcomments = () =>{
      if(localStorage.getItem("Email").length>=1)
    {
        Axios.post('http://localhost:3001/addcomments', {
            email:email,
            id:ID,
            comments:comments,
            ratings:ratings,
    }).then((response) => {
        if(response.data=="Success")
        {
            setMessage("Comments Added sucessfully");
        }
        else if(response.data=="Changed")
        {
            setMessage("Comment Changed Successfully");
        }
        else{
            setMessage("Failure");
        }
    });
    }  
    else{
        setMessage("Please Login first");
    }
    }
    const star1 = () =>{
        setRatings(1);
    }
    const star2 = () =>{
        setRatings(2);
    }
    const star3 = () =>{
        setRatings(3);
    }
    const star4 = () =>{
        setRatings(4);
    }
    const star5 = () =>{
        setRatings(5);
    }
    let swim="";
    let wifi="";
    let ac="";
    if(props.swim===1)
    {
        swim="  Swimming pool";
    }
    else
    {
      swim="Swimming pool Not there";
    }
    if(props.wifi===1)
    {
        wifi="High Speed WiFi";
    }
    else{
      wifi="High Speed WiFi not there"
    }
    if(props.ac===1)
    {
        ac="   Air Conditioning"    ;
    }
    else
    {
      ac=" Air Conditioning is not there"
    }



    const [value, setValue] = React.useState(props.tings);

  return (
<>
        <div className="card container" style={{borderRadius: '40px', backgroundImage: 'linear-gradient(to right,#56ab2f,#a8e063'}}>
        <br/>
        <div class="row">
        <div class="col-md-8">
        <div class="card container" id = "head" style={{paddingLeft: '6%', border: 'none', color:'navy', backgroundImage: 'linear-gradient(to right,#56ab2f,#a8e063',borderRadius: '40px'}}>{props.Name}</div>
            </div>  
          <div class = "col" id ="loc" style={{paddingTop: '2%',color: 'black', backgroundImage: 'linear-gradient(to right,#56ab2f,#a8e063'}}>{props.Area}, {props.City}</div>
      </div>
      <br></br>
      <div class="row">
        <div class="card container" id = "loc" style={{paddingLeft: '8%', border: 'none', color:'black', backgroundImage: 'linear-gradient(to right,#56ab2f,#a8e063'}}>Contact : {props.phno}</div>
      </div>
      <br/>
        <h2 id="name" class="card container" style={{paddingLeft: '8%', border: 'none', color:'black', fontSize: '190%', backgroundImage: 'linear-gradient(to right,#56ab2f,#a8e063'}}>Features Available</h2>
        <br/>

        <div class="container">
        <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
        <div class="row align-items-start">
        
        <div class="col" style={{backgroundColor: 'navy', padding :"1%", borderRadius :"30px"}}>
            <center>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="Gold" class="bi bi-water" viewBox="0 0 16 16">
        <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z"/>
        </svg></center><center><p id="attr1">{swim}</p></center>
        </div>     
   
        <div class="col" style={{backgroundColor: 'navy', padding :"1%", borderRadius :"30px"}}>
            <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="Gold" class="bi bi-wind" viewBox="0 0 16 16">
            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </center>
            <center>
                <p id="attr1">
                {ac}
                </p>
            </center>
        </div>
        <div class="col" style={{backgroundColor: 'navy', padding :"1%", borderRadius :"30px"}}>
            <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="gold   " class="bi bi-wifi" viewBox="0 0 16 16">
            <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
            <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
            </svg>
            </center>
            <center>
                <p id="attr1">
                {wifi}
                </p>
            </center>
        </div>
        </div>
        <br />
        <h2 id="name" class="card container" style={{paddingLeft: '5%', border: 'none', color:'black', fontSize: '160%', backgroundImage: 'linear-gradient(to right,#56ab2f,#a8e063'}}>Rating</h2>
        <div class="container card" style={{border: 'none', paddingLeft:'5%', backgroundImage: 'linear-gradient(to right,#56ab2f,#a8e063'   }}>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography align="center" component="legend"><div>Ratings</div></Typography> */}
      <Rating name="read-only" size="large" value={rat} readOnly /> 
      <br></br>
      {rat}
      
    </Box>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    </div>
    <br/>
    <br/>
    <div class="card container" style={{borderRadius: '40px', padding: '2%',backgroundImage: 'linear-gradient(to right,#eecda3,#ef629f'}}>
    <h2 id="name" class="card container" style={{padding: '3%', border: 'none', color:'black', fontSize: '210%',backgroundImage: 'linear-gradient(to right,#eecda3,#ef629f'}}>Customer Feedback</h2>
    <br></br>
    {/* Customer feedbacks */}
    <div class="card container" style={{backgroundColor: 'navy', padding :"1%", borderRadius :"30px", color: 'white'}}>
    {commentsList.map((value,key)=>(
      <>
      <center>
      <div>
            <b><u>Comment {i}</u></b>
          <br></br>
          Ratings by Customer : {value.RATINGS}
          <br></br>
          Name of Customer : {value.NAME}
          <br></br>
          <br></br>
          Comment : {value.COMMENTS}
          <br></br>
          <div style={{visibility: 'hidden'}}>{i=i+1}</div>
          </div>
          <div>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </div>
      </center>
     
      </>   
      ))}
      </div>
      <br/>
    <br/>
      <div style={{paddingLeft: '7%'}}>
    <label class="cmt">Ratings</label>
    <br/>
    <br/>
    
    <Rating
        name="simple-controlled"
        size="large"
        // value={value}\
        style={{color: 'gold'}}
        onChange={(event, newValue) => {
          setRatings(newValue);
        }}
      />
      </div>
    {/* <br></br>
    <span class="fa fa-star ratingschecked" onClick={star1}></span>
    <i id="hide-elements">i</i>
    <span class="fa fa-star ratingschecked" onClick={star2}></span>
    <i id="hide-elements">i</i>
    <span class="fa fa-star ratingschecked" onClick={star3}></span>
    <i id="hide-elements">i</i>
    <span class="fa fa-star ratingschecked" onClick={star4}></span>
    <i id="hide-elements">i</i>
    <span class="fa fa-star ratingschecked" onClick={star5}></span>
    <i id="hide-elements">i</i>
    <br></br> */}
    <br/>
    <br/>
    <div style={{paddingLeft: '7%'}}>
    <label class="cmt">Comments</label>
    <br/>
    <br/>
    <TextareaAutosize
      maxRows={10}
      aria-label="maximum height"
      placeholder="Enter Your Comments Here (Max 10 Rows)"
      style={{ width: '50%' ,backgroundImage: 'linear-gradient(to left,#eecda3,#ef629f'}}
      onChange={(event)=>{setComments(event.target.value)}}
    />
    <br/>
    <br></br>
    {/* <textarea onChange={(event)=>{setComments(event.target.value)}}>
    </textarea> */}
    <button class="btn btn-primary" id="btn" onClick={addcomments}>Add</button>
    {/* <br></br>
    {comments}
    <br>
    </br> */}
    </div>
    {/* {ratings}
    <br></br>
    {message} */}
    <br />
    </div>
</>
  );
}

export default MoreDeatils;