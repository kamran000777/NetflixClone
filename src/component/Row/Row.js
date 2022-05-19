import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios";
import PosterPotrait from "../PosterPotrait/PosterPotrait";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const baseUrl="https://image.tmdb.org/t/p/original";


const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [getMovie,setGetMovie] = useState('');
  
   
   const handleClick=(movie)=>{
     if(getMovie){
       setGetMovie('')
     }else{
       movieTrailer(movie?.name || movie?.original_name ||movie?.original_title||movie?.title || "").then(url=>{
         setGetMovie(url);
       }).catch(err=>console.log(err));
     }
   }


  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);
  
  return (
    <div className="row">
      <h4>{title}</h4>
      <div className={`row__posters`}>
            {movies.map(movie=><PosterPotrait key={movie.id} imageSrc={`${baseUrl}${isLargeRow ? movie.poster_path:movie?.backdrop_path||movie?.poster_path}`} imageAlt={movie.name} trending={isLargeRow?true:false} handleClick={handleClick} movie={movie}/>)}
      </div>
      {getMovie && <div className="videoPlayer">
      <ReactPlayer url={getMovie} controls={true} playing={true}/>
      </div>}
    </div>
  );
};

export default Row;
