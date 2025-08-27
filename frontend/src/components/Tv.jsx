import React, { useEffect, useState } from 'react'
import Moviecard from "./Moviecard"
import "./Tvstyles.css"
import { getAiringTodayTv, getOntheairTv, getPopularTv, getTopRatedTv, searchTv } from '../services/api'
import Dropdown from "./Dropdown"

const Tv = ({ searchQuery }) => {
  const [tvShows, setTvShows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selected, setSelected] = useState("Popular TV Shows");
  const [page, setPage] = useState(1); // ✅ current page

  useEffect(() => {
    const fetchTv = async () => {
      setLoading(true);
      try {
        let results = [];
        if (searchQuery.trim()) {
          results = await searchTv(searchQuery); // search usually ignores page
        } else if (selected === "TV Shows Airing Today") {
          results = await getAiringTodayTv(page);
        } else if (selected === "Currently Airing TV Shows") {
          results = await getOntheairTv(page);
        } else if (selected === "Top Rated TV Shows") {
          results = await getTopRatedTv(page);
        } else {
          results = await getPopularTv(page);
        }

        // ✅ append results if page > 1
        if (page === 1) {
          setTvShows(results);
        } else {
          setTvShows((prev) => [...prev, ...results]);
        }

        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load TV shows...");
      } finally {
        setLoading(false);
      }
    };

    fetchTv();
  }, [searchQuery, selected, page]);

  // Reset to page 1 whenever search or category changes
  useEffect(() => {
    setPage(1);
  }, [searchQuery, selected]);

  return (
    <div className="tv-header">
      <div className="drop-down">
        <Dropdown
          selected={selected}
          options={[
            "Popular TV Shows",
            "TV Shows Airing Today",
            "Currently Airing TV Shows",
            "Top Rated TV Shows"
          ]}
          setSelected={setSelected}
        />
      </div>

      {error && <div className="error-message">{error}</div>}
      {loading && page === 1 ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="tv-container">
            {tvShows.map((show) => (
              <Moviecard
                key={show.id}
                movie={show}
                title={show.name}
                date={show.first_air_date}
              />
            ))}
          </div>

          {/* ✅ Load More Button */}
          {!loading && (
            <div className="load-more">
              <button onClick={() => setPage((prev) => prev + 1)}>
                Load More
              </button>
            </div>
          )}

          {loading && page > 1 && <div className="loading">Loading more...</div>}
        </>
      )}
    </div>
  );
};

export default Tv;
