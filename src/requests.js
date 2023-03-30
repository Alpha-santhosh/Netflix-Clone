const API_KEY = "a958eb475e408eb09ba601ab514b527a";
export const fetchData = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks =213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchAdventureMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=12`,
  fetchAnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=16`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchCrimeMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=80`,
  fetchDocumentaryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=99`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  fetchMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres={14}&with_watch_monetization_types=flatrate`,
};
