import "./Favstyles.css"
import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import Moviecard from '../components/Moviecard'

const Favsection = () => {
    const { favorites } = useMovieContext();

    if (favorites && favorites.length > 0) {
        return (
            <div className='fav-header'>
                <h1>Your Favorites</h1>
                <div className="fav-container">
                    {favorites.map((movie) => (
                        <Moviecard
                            movie={movie}
                            key={movie.id}  // ✅ spread props so Moviecard gets id, title, poster_path, etc.
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="fav-header">
                <h1>Popular Movies</h1>
                <div className='fav-empty'>
                    <h2>No Favorite Movies Yet.</h2>
                    <p>Start adding movies to your favorites and they will appear here.</p>
                </div>
            </div>
        )
    }
}

export default Favsection
