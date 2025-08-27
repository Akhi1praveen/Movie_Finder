import React, { useEffect, useState } from 'react'
import "./Moviesstyle.css"
import Moviecard from './Moviecard'
import { 
  getNowPlayingMovies, 
  getPopularMovies, 
  getTopRatedMovies, 
  getUpcomingMovies, 
  searchMovies 
} from '../services/api'
import Dropdown from "./Dropdown";

const Movies = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selected, setSelected] = useState("Popular Movies");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [searchQuery, selected]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let results = [];
        if (searchQuery.trim()) {
          results = await searchMovies(searchQuery, page);
        } else if (selected === "Top Rated Movies") {
          results = await getTopRatedMovies(page);
        } else if (selected === "Upcoming Movies") {
          results = await getUpcomingMovies(page);
        } else if (selected === "Now Playing") {
          results = await getNowPlayingMovies(page);
        } else {
          results = await getPopularMovies(page);
        }

        setMovies((prev) => [...prev, ...results]);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery, selected, page]);

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

      <div className='movie-container'>
        {movies.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>

      {!loading && (
            <div className="load-more">
              <button onClick={() => setPage((prev) => prev + 1)}>
                Load More
              </button>
            </div>
          )}

          {loading && page > 1 && <div className="loading">Loading more...</div>}
    </div>
  )
}

export default Movies
