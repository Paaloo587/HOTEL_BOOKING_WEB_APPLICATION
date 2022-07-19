//import './App.css';
// import { useState } from "react";
// import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import {Routes, Route} from 'react-router-dom';
import NoMatch from "./nomatch";
import Home from'./home';
import Search from './search';
import More from './more';
import Login from './login';
import Signup from './signup';
import Profile from './profile';
import PasswordReset from './passwordreset';
import Covid19 from "./covid19";
import Privacy from "./privacy";
import Forgot from './forgotpassword';
import ForgotPassword from './forgotchangepassword';
import BookFailed from "./bookfailed";
import Bookhotel from "./bookhotel";
import BookNow from "./booknow";
import BookDone from './bookdone';
import CancelBooking from './cancelbooking';
import CancelDone from './canceldone';
import CancelFail from './cancelfail';
import AdminLogin from './adminlogin';
import HotelPage from './hotelpage';

function App() {
  // const [city,setCity]=useState("");
  // const [indate,setIndate]=useState("");
  // const [outdate,setoutdate]=useState("");
  // const [hotelList,setHotelList]=useState([]);
  // const showdetail = () => {
  //   Axios.post('http://localhost:3001/hotels', {
  //     city: city
  //   }).then((response) => {
  //     setHotelList(response.data);
  //   });
  // }
  
  return (
    <>
    <div id="App">
      <Header />
      <br></br>
      <br></br>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NoMatch />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/more" element={<More />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/profile" element={<Profile />}></Route> 
      <Route path="/passwordreset" element={<PasswordReset />}></Route>
      <Route path="/covid19" element={<Covid19 />}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      <Route path="/forgotpassword" element={<Forgot />}></Route>
      <Route path="/forgotchangepassword" element={<ForgotPassword />}></Route>
      <Route path="/bookhotel" element={<Bookhotel />}></Route>
      <Route path="/bookdone" element={<BookDone />}></Route>
      <Route path="/bookfailed" element={<BookFailed />}></Route>
      <Route path="/booknow" element={<BookNow />}></Route>
      <Route path="/cancelhotels" element={<CancelBooking />}></Route>
      <Route path="/canceldone" element={<CancelDone />}></Route>
      <Route path="/cancelfail" element={<CancelFail />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/hotelpage" element={<HotelPage />}></Route>
    </Routes>
    
      {/* <div>
        <center>
          <h1 id="title">
          Display the all the hotels in the particular City
          </h1>
        </center>
      </div>
      <div id="search-bar">
        <div>
        <label>City : </label>
        <input type="text"
        onChange={(event)=>{setCity(event.target.value)}}></input>
        </div>
        <div>
        <label>Indate : </label>
        <input type="date"
        onChange={(event)=>{setIndate(event.target.value)}}></input>
        <br></br>
        </div>
        <div>
        <label>Outdate : </label>
        <input type="date"
        onChange={(event)=>{setoutdate(event.target.value)}}></input>
        <br></br>
        </div>
      </div>
      
      <br></br>
      <div >
      <center>
      <button id="button-result" onClick={showdetail}>Show Available Hotels</button>
      </center>
      </div> */}
      <br></br>
      <br></br>
      {/* {hotelList.map((value,key)=>{
          return <div>
            <Display Name={value.Name} Area={value.Area} PhNo={value.PhNo} City={value.City} 
            Swim={value.swim}/>
            </div>
        })} */}
      <Footer />

    </div>
    </>
  );
}
export default App;