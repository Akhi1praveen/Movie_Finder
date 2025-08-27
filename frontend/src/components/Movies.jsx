import React, { useEffect, useState } from 'react'
import "./Moviesstyle.css"
import Moviecard from './Moviecard'
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, searchMovies } from '../services/api'
import Dropdown from "./Dropdown";

const Movies = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selected,setSelected] = useState("Popular Movies")



  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (searchQuery.trim()) {
          const searchResults = await searchMovies(searchQuery);
          setMovies(searchResults);
        } else if(selected==="Top Rated Movies") {
          const popularMovies = await getTopRatedMovies();
          setMovies(popularMovies);
        } else if(selected==="Upcoming Movies") {
          const popularMovies = await getUpcomingMovies();
          setMovies(popularMovies);
        } else if(selected==="Now Playing") {
          const popularMovies = await getNowPlayingMovies();
          setMovies(popularMovies);
        } else{
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);
        }
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery,selected]);

  return (
    <div className='movie-header'>
      <div className='drop-down'>
        <Dropdown 
                        selected={selected}
                        options={["Popular Movies","Upcoming Movies","Now Playing","Top Rated Movies"]}
                        setSelected={setSelected}
                    />
      </div>
      
      
      {error && <div className="error-message">{error}</div>}
      {
        loading ? (<div className="loading">Loading...</div>) : (
          <div className='movie-container'>
            {movies.map((movie) => {
              console.log(movie)
              return (
                <Moviecard
                  movie={movie}
                  key={movie.id}
                />

              )

            })
            }
          </div>
        )
      }

    </div>
  )
}

export default Movies
