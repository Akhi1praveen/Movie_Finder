import Moviecard from "./Moviecard"
import React, { useEffect, useState } from 'react'
import "./Tvstyles.css"

import { getAiringTodayTv, getOntheairTv, getPopularTv, getTopRatedTv, searchTv } from '../services/api'
import Dropdown from "./Dropdown"

const Tv = ({ searchQuery }) => {
    const [tv, setTv] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const [selected, setSelected] = useState("Popular TV Shows")

    useEffect(() => {
        const fetchTv = async () => {
            setLoading(true);
            try {
                if (searchQuery.trim()) {
                    const searchResults = await searchTv(searchQuery);
                    setTv(searchResults);
                } else if(selected==="TV Shows Airing Today") {
                    const popularMovies = await getAiringTodayTv();
                    setTv(popularMovies);
                }else if(selected==="Currently Airing TV Shows") {
                    const popularMovies = await getOntheairTv();
                    setTv(popularMovies);
                }else if(selected==="Top Rated TV Shows") {
                    const popularMovies = await getTopRatedTv();
                    setTv(popularMovies);
                }else {
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
    }, [searchQuery,selected]);

    return (
        <div className="tv-header">
            <div className='drop-down'>
                <Dropdown
                    selected={selected}
                    options={["Popular TV Shows", "TV Shows Airing Today", "Currently Airing TV Shows", "Top Rated TV Shows"]}
                    setSelected={setSelected}
                />
            </div>
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
