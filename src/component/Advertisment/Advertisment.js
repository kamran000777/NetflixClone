import React from 'react';
import './Advertisment.css';


const Advertisment = ({title,message,imageUrl,videoUrl,islargeImage}) => {
      const border = islargeImage?{
            borderTop:'0px solid grey'
      } :{
            borderTop:'8px solid grey'
      }
  return (
      <div className='ad__container'style={border}>
          <div className='ad__description'>
                <h1>{title}</h1>
                <p>{message}</p>
          </div>
          <div className='ad__video'>
          <img alt="video__image"
          src={imageUrl} />
          <div className={islargeImage?'large__animation':'animation'}>
          <video autoPlay playsInline muted loop>
                <source src={videoUrl} type="video/mp4"/></video>
          </div>
          </div>
    </div>
  )
}

export default Advertisment