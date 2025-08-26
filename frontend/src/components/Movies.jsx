import React, { useEffect, useState } from 'react'
import "./Moviesstyle.css"
import Moviecard from './Moviecard'
import Moviedata from './Moviecarddata'
import { getPopularMovies, searchMovies } from '../services/api'

const Movies = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (searchQuery.trim()) {
          const searchResults = await searchMovies(searchQuery);
          setMovies(searchResults);
        } else {
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
  }, [searchQuery]);

  return (
    <div className='movie-header'>
      <h1>Popular Movies</h1>
      {error && <div className="error-message">{error}</div>}
      {
        loading ? (<div className="loading">Loading...</div>) : (
          <div className='movie-container'>
            {movies.map((movie) => {
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
