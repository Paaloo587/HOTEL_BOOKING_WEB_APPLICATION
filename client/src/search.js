//import './App.css';
import { useState } from "react";
import Axios from "axios";
import Display from "./display";
import './search.css';


function Search() {
  const [city,setCity]=useState("");
  const [indate,setIndate]=useState("");
  const [outdate,setoutdate]=useState("");
  const [noOfRooms, setNoOfRooms]=useState(0);
  const [hotelList,setHotelList]=useState([]);
  const [areaList,setAreaList]=useState([]);
  const [sortOption,setSortOption]=useState("");
  const [message,setMessage]=useState("");
  let [wifi,setWifi]=useState(0);
  let [ac,setAC]=useState(0);
  let [swim,setSwim]=useState(0);
  const Wifi = () =>{
    if(wifi==0)
    {
      setWifi(wifi+1);
    }
    else{
      setWifi(wifi-1);
    }
  }
  const AC = () =>{
    if(ac==0)
    {
      setAC(ac+1);
    }
    else{
      setAC(ac-1);
    }
  }
  const Swim =()=>{
    if(swim==0)
    {
      setSwim(swim+1);
    }
    else{
      setSwim(swim-1);
    }
  }
  const [userinfo, setUserInfo] = useState({
    areas: [],
    areascheck: [],
  });
  const applyfilters =() =>{
    let w=wifi;
    let a=ac;
    let s=swim;
    console.log(wifi);
    if(wifi==0&&ac==0&&swim==0)
    {
      wifi=1;
      //setWifi(1);
      ac=1;
      swim=1;
    }
    console.log(wifi);
    Axios.post('http://localhost:3001/searchfilter', {
      city: city,
      indate: indate,
      outdate: outdate,
      areas: userinfo.areascheck,
      wifi: wifi%2,
      ac: ac%2,
      swim: swim%2,
      sortOption: sortOption,
    }).then((response) => {
        setHotelList(response.data);
    });
    // console.log(wifi);
    if(w==0&&s==0&&a==0)
    {
    wifi=0;
      ac=0;
      swim=0;
    }
    else{
      wifi=w;
      ac=a;
      swim=s;
    }
  }
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { areas } = userinfo;
    // console.log(`${value} is ${checked}`);
    if (checked) {
      setUserInfo({
        
        areas: [...areas, value],
        areascheck: [...areas, value],
      });
      
    }
    else {
      
      setUserInfo({
        areas: areas.filter((e) => e !== value),
        areascheck: areas.filter((e) => e !== value),
      });
    }
    
  };
  let area=[];
  let areaCheck=[];
  const showdetail = () => {
    Axios.post('http://localhost:3001/hotels', {
      city: city,
      indate: indate,
      outdate: outdate,
    }).then((response) => {
      setHotelList(response.data);
    });
    Axios.post('http://localhost:3001/hotelsarea', {
      city: city,
    }).then((response) => {
      setAreaList(response.data);
      areaList.map((value,key)=>{
        area.push(value.AREA);
        areaCheck.push(0);
      })
    });
    setUserInfo({
      areas: area,
      areascheck: area,
    });
  }
  return (
    <div id="App">
      <div class="card container" style={{padding: '1%', backgroundColor: 'navy', borderRadius: '30px'}}>
        <div class="row container">
            <center>
            <p class="Enjoy_text">Book Your Ideal Holiday Home</p>
            </center>
        </div>
        <div class="row container">
        <div class="col input-group mb 3">
            <span class="input-group-text" id="basic-addon1" style={{fontFamily: "Poppins"}}>City</span>
            <input type="text" class="form-control" id="floatingInput" placeholder="Bangalore" onChange={(event)=>{setCity(event.target.value)}}/>
        </div>
            <div class="col input-group mb 3">
            <span class="input-group-text" id="basic-addon1" style={{fontFamily: "Poppins"}}>Check In Date</span>
            <input type="date" class="form-control" placeholder='Check In Date' onChange={(event)=>{setIndate(event.target.value)}}/>
            </div>
            <div class="col input-group mb 3">
            <span class="input-group-text" id="basic-addon1" style={{fontFamily: "Poppins"}}>Check Out Date</span>
            <input type="date" class="form-control" placeholder='Check Out Date' onChange={(event)=>{setoutdate(event.target.value)}}/>
            </div>
            <div class="col input-group mb 3">
            <span class="input-group-text" id="basic-addon1" style={{fontFamily: "Poppins"}}>No.of Rooms</span>
            <input type="number" class="form-control" placeholder='No .of Rooms' onChange={(event)=>{setNoOfRooms(event.target.value)}}/>
            </div>
            
        </div>
        <br/>
    </div>
      <br></br>
      <div class="form-group row">
      <center>
      <button id="btn" class="btn btn-primary"  onClick={showdetail}>Show Available Hotels</button>
      </center>
      </div>

      <br />
      <div class="card container" style={{backgroundImage: 'linear-gradient(to right, #ffafbd , #ffc3a0)', borderRadius: '40px'}}>
        <div>
          <center>
            <br/>
        <h2 id="head">Filters</h2>
        <br/>
        </center>
        <div class="row">
        <div class="card container col-2"  style={{padding: '2% 2% 1% 2%', borderRadius: '30px', backgroundColor: 'navy'}}>
        <div>
          <center>
        <h2 id="subHead">Facilities</h2>
        </center>
        <br/>
        {/* <br/> */}
        <center>
        <ul class="list-unstyled" style={{color: 'white'}}>
          <li>
            <div class="form-check">
        <input class= "form-check-input" type="checkbox" name="filter1" value="swim" onClick={Wifi} id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">WIFI Connectivity</label>
          </div>
        </li>
        <br/>
        <li>
            <div class="form-check">
        <input class= "form-check-input" type="checkbox" name="filter2" value="wifi" onClick={Swim} id="2"/>
        <label class="form-check-label" for="2">Swimming Pools</label>
        </div>
        </li>
        <br/>
        <li>
        <div class="form-check">
        <input class= "form-check-input" type="checkbox" name="filter3" value="ac" onClick={AC} id="3"/>
        <label class="form-check-label" for id="3">Air Conditioning</label>
        </div>
        </li>
        </ul>
        </center></div>
        {/* <br></br> */}
        </div>
        <div class="card container col-2"  style={{padding: '2% 2% 1% 2%', borderRadius: '30px', backgroundColor: 'navy', color: 'white'}}>
          <center>
        <h2 id="subHead">Area</h2>
        </center>
        <br/>
        <ul class="list-unstyled" style={{color: 'white'}}>
          <center>
        {areaList.map((value,key)=>{
          return<>
          <li>
          <div class="form-check">
          <input onChange={handleChange} class= "form-check-input" type="checkbox" name="filter1" value={value.AREA} id="4"/>
          <label class="form-check-label" for id="4">{value.AREA}</label>
          </div>
          </li>
          <br/>
          </>
        })}
        </center>
        </ul>
        </div>
        <div class="card container col-2" style={{padding: '2% 2% 1% 2%', borderRadius: '30px', backgroundColor: 'navy', color: 'white'}}>
          <center>
          <h2 id="subHead">Filter by</h2>
          </center>
          <br/>
          <ul class="list-unstyled" style={{color: 'white'}}>
            <center>
              <li>
                <div class="form-check">
                  <input type="radio" class="form-check-input" name="sortoption" id="sortoption1" value="ORDER BY PRICE DESC" 
                  onClick={(event)=>{setSortOption(event.target.value)}}></input>
                  <label for="sortoption1">Price High to Low</label>
                </div>
              </li>
              <br/>
              <li>
                <div class="form-check">
                  <input type="radio" class="form-check-input" name="sortoption" id="sortoption2" value="ORDER BY PRICE ASC" 
                  onClick={(event)=>{setSortOption(event.target.value)}}></input>
                  <label for="sortoption2">Price Low to High</label>
                </div>
              </li>
              <br/>
              <li>
                <div class="form-check">
                <input type="radio" class="form-check-input" name="sortoption" id="sortoption3" value="ORDER BY RATINGS DESC"
                onClick={(event)=>{setSortOption(event.target.value)}}></input>
                <label for="sortoption3">By Ratings</label>
                </div>
              </li>
              <br/>
              <li>
                <div class="form-check">
                <input type="radio" class="form-check-input" name="sortoption" id="sortoption4" value=""
                onClick={(event)=>{setSortOption(event.target.value)}}></input>
                <label for="sortoption4">No Sorting Filter</label>
                </div>
              </li>
            </center>
          </ul>
        </div>
        </div>
        </div>
        <br/>
        <br/>
        </div>
        <br/>
        <div class="form-group-row">
        <center>
        <button id="btn" class="btn btn-primary" onClick={applyfilters}>Apply Filters</button>
        </center>
        </div>
        {/* {message} */}
  <br/>
  <div class="card container" style={{padding: '3%', backgroundImage: 'linear-gradient(to right, #2193b0 , #6dd5ed)', borderRadius: '40px'}}>
      {hotelList.map((value,key)=>{
          if(value.MIN_ROOMS>=noOfRooms)
          {
            return <>
            <br/>
            <Display ID={value.HOTEL_ID} Name={value.NAME} Area={value.AREA} PhNo={value.PHNO} City={value.CITY} 
            Price={value.PRICE} indate={indate} outdate={outdate}
            noOfRooms={noOfRooms} ratings={value.RATINGS}/>
            <br/>
            </>
          }
        })}
    </div>
    </div>

  );
}
export default Search;