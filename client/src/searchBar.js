import React from 'react'
import './searchBar.css'

function SearchBar() {
  return (
    <div class="card container" style={{padding: '1%', backgroundColor: 'navy', borderRadius: '30px'}}>
        <div class="row container">
            <center>
            <p class="Enjoy_text">Book Your Ideal Holiday Home</p>
            </center>
        </div>
        <div class="row container">
        <div class="col input-group mb 3">
            <span class="input-group-text" id="basic-addon1" style={{fontFamily: "Poppins"}}>City</span>
            <input type="text" class="form-control" id="floatingInput" placeholder="Bangalore"/>
        </div>
            <div class="col input-group mb 3">
            <span class="input-group-text" id="basic-addon1" style={{fontFamily: "Poppins"}}>Check In Date</span>
            <input type="date" class="form-control" placeholder='Check In Date'/>
            </div>
            <div class="col input-group mb 3">
            <span class="input-group-text" id="basic-addon1" style={{fontFamily: "Poppins"}}>Check Out Date</span>
            <input type="date" class="form-control" placeholder='Check Out Date'/>
            </div>
            <div class="col input-group mb 3">
            <span class="input-group-text" id="basic-addon1" style={{fontFamily: "Poppins"}}>No.of Guests</span>
            <input type="number" class="form-control" placeholder='No .of Guests'/>
            </div>
        </div>
        <br/>
    </div>
  )
}
export default SearchBar