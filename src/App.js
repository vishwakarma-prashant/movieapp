import { useEffect } from 'react';
import './App.css';
import axios from './axios';
import Banner from './Banner';
import requests from "./requests"
import Row from './Row';
import RowTest from './RowTest';


function App() {

//   const fetchData = async ()=>{

//     const data=await axios.get(requests.fetchActionMovies)
//   console.log(data)
// return data
//   }

//   useEffect(()=>{
//     fetchData();

//   },[])

  return (
    < >
      <Banner/>
      <RowTest title="Trending Movies" fetchUrl={requests.fetchTrending}
      largeRow={true}
      
      />


<RowTest title="All Time Best" fetchUrl={requests.fetchTopRated}/>
      
      <RowTest title="Netflix Orginals" fetchUrl={requests.fetchNetflixOrginals}/>
      <RowTest title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies}/>

      <RowTest title="Comdey Movies" fetchUrl={requests.fetchComedyMovies}/>

      <RowTest title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>

     
      <RowTest title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <RowTest title="Docmentries" fetchUrl={requests.fetchDocumentries}/>

      {/* <RowTest title="trending page" fetchUrl={requests.fetchTrendingpage} largeRow={true}/> */}




    </>
  );
}

export default App;


//9789405fbe9dba7fa1a67b6aa8ddad3f