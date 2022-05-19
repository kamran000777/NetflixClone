import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../request";
import { fallbackRequest, fallback, fallbackMovie } from "../Fallback";
import Detail from "./Detail/Detail";
import "./Banner.css";

//Add fallbacks to avoid any undefined request;
const Banner = () => {
  const [movie, setMovie] = useState(fallbackMovie);
  const [detailSection, setDetailSection] = useState(false);

  const arr = [
    requests.fetchActionMovies,
    requests.fetchComedyMovies,
    requests.fetchDocumentarires,
    requests.fetchTopRated,
    requests.fetchNetflixOriginals,
    requests.fetchRomanceMovies,
    requests.fetchTrending,
    requests.fetchHorrorMovies,
  ];

  useEffect(() => {
    async function getMovie(index = 4) {
      const request = await axios.get(arr[index]);
      const safeRequest = request.data != "" ? request : fallbackRequest;
      let randomIndex = Math.floor(Math.random() * safeRequest.data.results.length - 1);

      //avoiding any undefined request
      randomIndex = randomIndex ? randomIndex : 0;
      const actualMovie = safeRequest.data.results[randomIndex];
      actualMovie ? setMovie(actualMovie) : setMovie(fallbackMovie);
    }
    
     const interval = setInterval(() => {
        getMovie(Math.floor(Math.random() * arr.length - 1));
      }, 10000);
  
     

    return () => {
      clearInterval(interval);
    };
  }, [movie]);

  function shortenDescription(str, n) {
    return str.length>n?str.substr(0, n - 1) + "...":str;
  }

  const name =
    movie?.title ||
    movie?.name ||
    movie?.original_name ||
    movie?.original_title;

  const bannerImage = movie?.backdrop_path? movie?.backdrop_path: movie?.poster_path ? movie?.poster_path : fallback;
   
    const closePopUp=()=>{
      setDetailSection(!detailSection);
    }
    

  return (
    <>
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${bannerImage}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1>{name}</h1>
        <div className="banner__btns">
          <button className="btn" onClick={closePopUp}>Info</button>
        </div>
        <h4>{movie?.overview && shortenDescription(movie.overview, 150)}</h4>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
    {detailSection && <Detail movieName={name} movieDescription={movie.overview} imageUrl={bannerImage} closePopUp={closePopUp} shortenDescription={shortenDescription}/>}
    </>
  );
};

export default Banner;
