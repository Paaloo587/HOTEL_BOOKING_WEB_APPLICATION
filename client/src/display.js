//import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import More from './more';
import './display.css'

function Display(props) {
  const hotelidset = () =>{
    localStorage.setItem("ID",props.ID);
    localStorage.setItem("indate",props.indate);
    localStorage.setItem("outdate",props.outdate);
    localStorage.setItem("noofrooms",props.noOfRooms)
    localStorage.setItem("hotelname",props.Name);
    localStorage.setItem("price",props.Price);
  }
  return (
    <div class="card container" style={{borderRadius : '30px', padding: '2% 2% 3% 12%', backgroundImage : 'linear-gradient(to right,#ee9ca7,#ffdde1)'}}>
      <div class="row">
        <div class="col-md-8">
            <div id="name" style={{padding: '2% 2% 3% 2%',color: 'navy'}}>{props.Name}</div>
            </div>  
          <div class = "col" id ="loc" style={{paddingTop: '2%',color: 'black'}}>{props.Area}, {props.City}</div>
      </div>
      <br/>
      <div class="row">
      <h2 id="cont" class="col-md-2">Contact :</h2>
        <h2 id ="cont" class="col-md-3">+91 {props.PhNo}</h2>
        <h2 id ="cont" class="col-md-3">₹{props.Price}</h2>
        <h2 id ="cont" class="col-md-3">Ratings {props.ratings}</h2>
        </div>
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col">
        <button class="btn btn-primary"><NavLink onClick={hotelidset} to="/more" style={{ textDecoration: 'none', color: 'white'}}>More</NavLink></button>
        </div>
        <Routes>
          <Route to="/more" element={<More />}></Route>
        </Routes>
        </div>
        </div>
  );
}

export default Display;