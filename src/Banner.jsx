import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Banner.css"
import requests from './requests'


const Banner = () => {

    const base_Url="https://image.tmdb.org/t/p/original/";

const [movies, setMovies] = useState([])


  const abc = requests.fetchNetflixOrginals

 const fetchMovies= async()=>{
         const data = await axios.get(abc);
    //      console.log ("wlecome to Banner")
    //    console.log(data)
       setMovies(data.data.results[Math.floor(Math.random()*20)])
    }

   

    useEffect(() => {
      fetchMovies();


    
    
    }, [])




  const style1={
    backgroundSize:"cover",
  backgroundImage:   `url(${base_Url}${movies.backdrop_path})`
  ,backgroundPosition:"center center"}
  
 



  return (
    <div className='main-banner' style={style1}>

        <div className="banner-content">
          <div className="title-banner-box"><h1 className='title-banner'> {movies?.name || movies?.original_name}</h1>
          <p className='description'>{movies?.overview }</p>
          </div>
            
        
        </div> 

       

     
        
       
    <div className='fade-bottom'/>
    </div>
  )
}

export default Banner