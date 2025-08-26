import { FaSearch } from "react-icons/fa"
import "./Navbarstyle.css"
import React, { useState } from 'react'

const Search = ({ setSearchQuery }) => {


    const handleSearch = (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        console.log("Searching for:", searchQuery);
    }
    return (
        <div className="search">
            <form onSubmit={handleSearch} className="Search-form">
                <input
                    type="text"
                    placeholder="Search movies..."
                    className="Search-input"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn"><FaSearch size={20} style={{ color: "#fff" }} /></button>
            </form>
        </div>
    )
}

export default Search
