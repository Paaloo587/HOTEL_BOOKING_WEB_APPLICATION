import './App.css';
import {Route,Routes, NavLink} from 'react-router-dom';
import Home from'./home';
import { useState } from "react";

function NoMatch() {
  const [result,setResult]=useState("Go to Home");

  return (
    
    <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Oops!</span> Page not found.</p>
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
              <button class="btn btn-primary" ><NavLink to="/" style={{ textDecoration: 'none', color: 'white'}}>Go to Home</NavLink></button>
            </div>
        </div>
  );
}

export default NoMatch;