import Moviecard from "./Moviecard"
import React, { useEffect, useState } from 'react'
import "./Tvstyles.css"

import { getPopularTv, searchTv } from '../services/api'

const Tv = ({ searchQuery }) => {
    const [tv, setTv] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTv = async () => {
            setLoading(true);
            try {
                if (searchQuery.trim()) {
                    const searchResults = await searchTv(searchQuery);
                    setTv(searchResults);
                } else {
                    const popularMovies = await getPopularTv();
                    setTv(popularMovies);
                }
                setError(null);
            } catch (err) {
                console.log(err);
                setError("Failed to load Tv shows...");
            } finally {
                setLoading(false);
            }
        };

        fetchTv();
    }, [searchQuery]);

    return (
        <div className="tv-header">
            <h1>Popular Tv shows</h1>

            {error && <div className="error-message">{error}</div>}
            {
                loading ? (<div className="loading">Loading...</div>) : (
                    <div className='tv-container'>
                        {tv.map((tv) => {
                            console.log(tv)
                            return (
                                <Moviecard
                                    movie={tv}
                                    key={tv.id}
                                    title={tv.name}
                                    date={tv.first_air_date}
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

export default Tv
