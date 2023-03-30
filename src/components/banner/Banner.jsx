import React, { useEffect, useState } from 'react'
import './banner.css'

function Banner() {
    const [bannerMovie, setbannerMovie] = useState({});

    useEffect(() => {
        const fetchPopulatMovies = async () => {
            const respones = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=a958eb475e408eb09ba601ab514b527a&language=en-US");
            const data = await respones.json();
            setbannerMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
        }
        fetchPopulatMovies();
    }, [])

    const trancat = (string, n) => {
        return string?.length - 1 > n ? string.substring(0, n) + ' ...' : string;
    }

    return (
        <div className="banner"
            style={bannerMovie?.backdrop_path ? { backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path})` } : { backgroundColor: "black" }}>
            <div className="banner_movie_data">
                <div className="b_movie_title">{bannerMovie?.original_title || bannerMovie?.title || bannerMovie?.original_name}</div>
                <br />
                <div className="banner_btns">
                    <button type='button' className='banner_btn'>Play</button>
                    <button type='button' className='banner_btn'>Mylist</button>
                </div>
                <br />
                <div className="banner_overview">{trancat(bannerMovie?.overview, 150)}</div>
            </div>
            <div className="linear_gradeint" />
        </div>
    )
}

export default Banner