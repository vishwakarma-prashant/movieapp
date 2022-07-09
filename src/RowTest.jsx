import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "./axios"
import "./RowTest.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";



const RowTest = ({title ,fetchUrl ,largeRow}) => {
    const base_Url="https://image.tmdb.org/t/p/original/"

    const [movies ,setMovies]=useState([]);
    const [trailerURL, setTrailerURL] = useState("");
    const fetchdata = async ()=>{
        const movies = await axios.get(fetchUrl);

        console.log(movies ,fetchUrl)
        setMovies(movies.data.results)


    }

    useEffect(()=>{
        fetchdata();
    },[fetchUrl])



    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      const handleClick = (movie) => {
        if (trailerURL) {
          setTrailerURL("");
        } else {
          movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then((url) => {
                console.log("url is "+url);
                const urlParams=new URLSearchParams(new URL(url).search);
                console.log("urlParamsn"+urlParams);
                setTrailerURL(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
      };
    
  if(movies.length >= 10)  {



    return (<div className='main-div'>
       
       
        <div className='title-box'> <p className='title'>{title}</p> </div>
       


     <div className='main'>

        {movies.map((movie)=>(

             <div className="main-card"  key={movie.name}>
                
                <img  onClick={() => handleClick(movie)} className={`${largeRow ? "posterlg" : "poster" }  `} src={`${base_Url}${movie.poster_path}` } alt={movie.name}/>
                
            
             </div>



        ))}
    </div>

           {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}
    </div>
  )
}
}
export default RowTest





/**
 * <div className='main-row' >
        {movies.map((movie)=>(
            <div className='card'  key={movie.id} >
                <img className="poster-movie" src={`${base_Url}${movie.poster_path}` } alt={movie.name}/>

                


                <h4 className='title-movie'>{movie.name} </h4>


            </div>
    

        ))}
        
    </div>
 */