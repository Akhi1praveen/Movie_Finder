import "./Favstyles.css"
import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import Moviecard from '../components/Moviecard'

const Favsection = ({ searchQuery }) => {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    const filteredFavorites = favorites.filter((movie) => {
      const titleOrName = movie?.title || movie?.name || "";
      return titleOrName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
      <div className="fav-header">
        <h1>Your Favorites</h1>
        <div className="fav-container">
          {filteredFavorites.map((movie) => (
            <Moviecard
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="fav-header">
        <h1>Your Favorites</h1>
        <div className="fav-empty">
          <h2>No Favorite Movies Yet.</h2>
          <p>Start adding movies or TV shows to your favorites and they will appear here.</p>
        </div>
      </div>
    );
  }
};

export default Favsection;
