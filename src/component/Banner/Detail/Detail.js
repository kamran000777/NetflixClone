import React from 'react';
import './Detail.css';
import {GiCrossedBones} from 'react-icons/gi'


const Detail = ({movieName,movieDescription,imageUrl,closePopUp,shortenDescription}) => {
  return (
    <div className="detail__container">
      <div className='detail'>
          <div className='info'>
                <h1>{movieName}</h1>
                 <p>{movieDescription&&shortenDescription(movieDescription,350)}</p>
          </div>
          <div className='movie__poster' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${imageUrl}")`}}>
          </div>
           <GiCrossedBones className='close' onClick={closePopUp}/>
    </div>
    </div>
  )
}

export default Detail