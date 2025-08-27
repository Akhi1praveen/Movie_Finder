import "./Moviesstyle.css"
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa"
import { useMovieContext } from "../contexts/MovieContext"

const Moviecard = ({ movie }) => {
    const { addToFavorites,
        removeFromFavorites,
        isFavorites } = useMovieContext()
    const favorites = isFavorites(movie.id)
    const onFavoriteClick = (e) => {
        e.preventDefault()
        if (favorites) removeFromFavorites(movie.id)
        else addToFavorites(movie)
        console.log(favorites)
    }

    return (
        <div className="movie-card">
            <div className="movie-img" >
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="img" />
                <button className="button" onClick={onFavoriteClick}>
                    <FaHeart size={30}  className={favorites ? "heart active" : "heart"} />
                </button>
            </div>
            <div className="movie-details">
                {
                    movie.title ? <h2 className="movie-title">
                        {movie.title}
                    </h2> :
                        <h2 className="movie-title">
                            {movie.name}
                        </h2>
                }
                {
                    movie.release_date ?
                        <p>{movie.release_date?.split("-")[0]}</p> :
                        <p>{movie.first_air_date?.split("-")[0]}</p>
                }
            </div>
        </div>
    )
}

export default Moviecard
