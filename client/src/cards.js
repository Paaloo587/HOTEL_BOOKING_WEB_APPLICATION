import React from 'react'
import './cards.css'

    function Card({src, title, description, price}) {
      return (
        <div className='card-home'>
            <img src={src} slt="" />
            <div className='card-home__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
      )
    }

export default Card