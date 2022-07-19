import './App.css';

function BookFailed() {
    alert(" Booking Failed Redirecting to Search page");
    window.location.href = "http://localhost:3000/search";
  return (
    <div className="App">
      Booking Failed 
      Redirecting to Search page
    </div>
  );
}

export default BookFailed;