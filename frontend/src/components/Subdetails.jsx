import "./SubDetailsstyles.css"
import React from 'react'

const Subdetails = ({ details }) => {
    if (!details) return null

    const releaseYear = details.release_date ? details.release_date.split("-")[0] : ""
    const runtime = details.runtime ? `${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m` : "N/A"
    const genres = details.genres?.map(g => g.name).join(", ")

    return (
        <div
            className="details-header"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
            }}
        >
            {/* Left Section - Poster */}
            <div className="poster-container">
                <img
                    src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                    alt={details.title || details.name}
                    className="poster"
                />
            </div>

            {/* Right Section - Info */}
            <div className="info-container">
                <h1 className="movie-title">
                    {details.original_title} <span>({releaseYear})</span>
                </h1>

                <div className="meta">
                    <span> {details.release_date} ({details.origin_country?.[0]})</span>
                    <span> • {genres}</span>
                    <span> • {runtime}</span>
                </div>

                {/* User Score */}
                <div className="score-section">
                    <div className="circle-score">{Math.round(details.vote_average * 10)}%</div>
                    <span>User Score</span>
                </div>

                {/* Overview */}
                <h3>Overview</h3>
                <p>{details.overview}</p>
                
            </div>
        </div>
    )
}

export default Subdetails
