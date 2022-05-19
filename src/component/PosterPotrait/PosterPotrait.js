import React from 'react';
import './PosterPotrait.css';


const PosterPotrait = ({imageSrc,imageAlt,trending,handleClick,movie}) => {

  return (
    <div className={`poster__potrait ${trending && "poster__potrait__large"}`} onClick={()=>{handleClick(movie)}}>
      <img src={imageSrc} alt={imageAlt}/>
    </div>
  )
}

export default PosterPotrait