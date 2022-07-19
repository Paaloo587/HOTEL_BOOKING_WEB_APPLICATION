import './App.css';
import {useNavigate, useParams} from 'react-router-dom';

function About() {
    let navigate=useNavigate();
    let {name} =useParams();
  return (
    <div className="App">
      About
      <button onClick={()=>{(navigate("/App"))}}>Chnage to about</button>
      This is {name}
    </div>
  );
}

export default About;