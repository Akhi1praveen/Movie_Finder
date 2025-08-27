import "./Moviesstyle.css"
import React from "react"
import { FaHeart } from "react-icons/fa"
import { useMovieContext } from "../contexts/MovieContext"
import { Link } from "react-router-dom"

const Moviecard = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorites } = useMovieContext()
  const favorites = isFavorites(movie.id)

  const onFavoriteClick = (e) => {
    e.preventDefault() // prevent navigation when clicking heart
    if (favorites) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-img">
        {/* 👇 Link wraps image to navigate to Details */}
        <Link to={`/details/${movie.id}`} state={{ media_type: "movie" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        </Link>

        <button className="button" onClick={onFavoriteClick}>
          <FaHeart
            size={30}
            className={favorites ? "heart active" : "heart"}
          />
        </button>
      </div>

      <div className="movie-details">
        <h2 className="movie-title">{movie.title || movie.name}</h2>
        <p>
          {movie.release_date
            ? movie.release_date?.split("-")[0]
            : movie.first_air_date?.split("-")[0]}
        </p>
      </div>
    </div>
  )
}

export default Moviecard
