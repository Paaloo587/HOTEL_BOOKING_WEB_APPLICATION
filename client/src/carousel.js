import React from 'react';
import './carousel.css';
import { NavLink } from 'react-router-dom';
//import Search from './search';

import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
const Carousel =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                {/* <NavLink to="/search"> */}
								<div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
								{/* </NavLink> */}
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default Carousel;