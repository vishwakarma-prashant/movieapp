import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "./axios"
import "./Row.css"

const Row = ({title ,fetchUrl}) => {
    const base_Url="https://image.tmdb.org/t/p/original/"

    const [movies ,setMovies]=useState([]);
    const fetchdata = async ()=>{
        const movies = await axios.get(fetchUrl);

        console.log(movies.data.results)
        setMovies(movies.data.results)


    }

    useEffect(()=>{
        fetchdata();
    },[fetchUrl])


    return (<div className='main'>
   
    <div className='main-row' >
        {movies.map((movie)=>(
            <div className='card'  key={movie.id} >
                <img className="poster-movie" src={`${base_Url}${movie.poster_path}` } alt={movie.name}/>

                


                <h4 className='title-movie'>{movie.name} </h4>


            </div>
    

        ))}
        
    </div>
    </div>
  )
}

export default Row