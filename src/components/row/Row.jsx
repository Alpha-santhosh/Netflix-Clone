import React, { useEffect, useState } from 'react'
import './row.css'

function Row({ title, gener }) {
  const [movies, setMovies] = useState([]);

  const API_KEY = "a958eb475e408eb09ba601ab514b527a";

  useEffect(() => {
    async function getApi() {
      const respones = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${gener}&with_watch_monetization_types=flatrate`);
      const data = await respones.json();
      setMovies(data.results);
    }
    getApi();
  }, [gener])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_poster">
        {movies.map((movie) => {
          const { poster_path, id } = movie;
          return (
            <>
              <img key={id} className='row_posters_img' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Row