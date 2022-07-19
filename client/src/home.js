
import './home.css'
import Card from './cards';
import Carousel from './carousel';
import { Routes, Route, NavLink} from 'react-router-dom';
import Covid19 from './covid19';
import SearchBar from './searchBar';

function Home() {
  const sliderClick = (slider)=>{
    alert("hello world");
  }

  
  const slides = [
    {image:"https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",title:"Bangalore",description:"Technology Hub of India  ",clickEvent:sliderClick},
    {image:"https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",title:"Goa",description:"An Idyllic combination of sun, sand and sea",clickEvent:sliderClick},
    {image:"https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",title:"New Delhi",description:"Capital of the Country",clickEvent:sliderClick},
    {image:"https://cf.bstatic.com/xdata/images/city/square250/684919.webp?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=",title:"Ooty",description:"Endless Beauty of the Nilgiris",clickEvent:sliderClick},
    {image:"https://cf.bstatic.com/xdata/images/city/square250/684716.webp?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o=",title:"Manali",description:"Panoramic view of snow-laden mountains",clickEvent:sliderClick},
    {image:"https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",title:"Mumbai",description:"Cosmopolitan and financial capital of India",clickEvent:sliderClick},
    {image:"https://dynamic.tourtravelworld.com/hotspot-images/ripon-building-250x250-2943.jpg",title:"Chennai",description:"The Heart of Tamil Nadu and the South Culture",clickEvent:sliderClick},
  ]

  return (
    <div className="App">
      {/* <p style={{color: 'red'}}>Done</p> */}
    <div class="card one container" style={{borderRadius: '30px', backgroundImage : 'linear-gradient(to right,#ba5370 ,#f4e2d8)' }}>
      
      <div class='text container'><p>Need to book a Hotel? <b style={{color: 'red'}}>Done</b></p></div>
      <div class='text__1 container'><p style={{color: 'purple'}}>Stay more, save more. It's Genius</p></div>
      <div class='text__2 container'><p>Enjoy hundreds of thousands of properties worldwide</p></div>
      
      </div>
      <br/>
      <br/>
      
      <div class="card container " style={{border: 'none'}} >
        <p class="text__3"><svg xmlns="http://www.w3.org/2000/svg" width="25"  height="25" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>  Get the advice you need. Check the latest COVID-19 restrictions before you travel. <NavLink to="/covid19" >Learn More</NavLink></p>  
</div>
<br/>
<div class="card container" style={{border: 'none'}}>
    <div>
      <p  class='text2 container'>Explore India</p>
      <p  class='text3 container'>These popular destinations have a lot to offer</p>
    </div> 
    <br/>
    <center>
    <Carousel slides={slides}/>
    </center>
    <br/>
    </div>
      {/* <div className='home__section'>
      <Card
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/800px-Mysore_Palace_Morning.jpg"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
            src="https://image3.mouthshut.com/images/Restaurant/Photo/-21944_7079.jpg?im_w=720"
            title="Unique stays"
            description="Spaces that are more than just a place to sleep."
            />
            <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Comfortable private places, with room for friends or family."
            />
        </div>
        <div className='home__section'>
            <Card
             src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
             title="3 Bedroom Flat in Bournemouth"
             description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
             price="£130/night"
            />
            <Card
            src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
            title="Penthouse in London"
            description="Enjoy the amazing sights of London with this stunning penthouse"
            price="£350/night"
            />
            <Card
            src="https://media.nomadicmatt.com/2018/apartment.jpg"
            title="1 Bedroom apartment"
            description="Superhost with great amenities and a fabolous shopping complex nearby"
            price="£70/night"
            />
            </div> */}
            <br/>
      {/* {localStorage.getItem("Email")} */}
      <div class="card info container" style={{border: 'none'}}>
        <h3 class="heading">Booking a hotel on KN.com</h3>
        <p class="parah">Whether you’re travelling for business or pleasure, KN.com makes it a simple and delightful experience to book hotels, flights and activities all in just a few clicks. Our curated and verified list of 3 lakh plus hotels across 28 thousand plus cities from around the globe ensures our travellers have enough options to choose from and complete their online hotel booking at ease.
            <br/>
            The platform offers an array of filters and sorting options to simplify your search for hotels online. The product shows all the details of your preferred hotel, like description, highlights, photos, amenities, room types and rates in one place. Additional features like pay-at-hotel, express checkout and free cancellations make the process of booking hotel effortless.
        </p>    
        <br/>
        
        <h3 class="heading">How to find hotels near me?</h3>
        <p class="parah">It is very simple to search for nearby hotels on KN.com</p>
        <ul>
          <li class="parah">Click on the 'hotels' tab on the homepage</li>
          <li class="parah">Type in the city, locality, landmark, or hotel name in the search bar</li>
          <li class="parah">Fill in the check-in and check-out dates</li>
          <li class="parah">Choose the number of travellers and hit enter to land on the search result page of ‘hotels near me’</li>
          <li class="parah">You can further narrow down your search list by choosing multiple filters like price, star rating, traveller rating, amenities and even preferences like hill-view or couple friendly.</li>
        </ul>
        <br/>
        <h3 class="heading">How to book hotels on KN.com?</h3>
        <p class="parah">Once you select your preferred hotel, the ‘rooms & rates’ block with neatly grouped inclusions and photos assure you can compare, choose and complete your hotel booking by clicking on the book now button.
            <br/>
            The 'book now' button lands on the itinerary page that allows you to review your booking, enter your details and make the payment.
        </p>
      </div>
    </div>
  );
}

export default Home;