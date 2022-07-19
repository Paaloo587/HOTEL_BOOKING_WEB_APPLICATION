import './App.css';

function BookDone() {
    alert("Your Booking confirmed Check your email  Redirecting to the profile Thank You")
    window.location.href = "http://localhost:3000/profile";
  return (
    <div className="App">
      Your Booking confirmed 
      Check your email  
      Redirecting to the profile
      Thank You
    </div>
  );
}

export default BookDone;