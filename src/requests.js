const API_KEY = "9789405fbe9dba7fa1a67b6aa8ddad3f";

const requests = {
    // fetchTrendingpage: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US `,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&langauge=en-US`,


    fetchThrillerMovies: `/discover/tv?api_key=${API_KEY}&with_genres=3`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,









}

export default requests








/**https://api.themoviedb.org/3/trending/all/day?api_key=THE_KEY&page=1 */



// https: //api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US