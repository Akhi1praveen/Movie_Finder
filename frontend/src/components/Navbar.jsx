import "./Navbarstyle.css"
import React, { useState } from 'react'
import { FaBars, FaHeart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [click, setclick] = useState(false);
    const handleclick = () => setclick(!click);

    const [color, setcolor] = useState(false);
    const changecolor = () => {
        if (window.scrollY >= 100) {
            setcolor(true);
        }
        else {
            setcolor(false);
        }
    }


    window.addEventListener("scroll", changecolor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Movie Finder</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
            <div className="ham-menu" onClick={handleclick}>
                {click ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
            </div>
        </div>
    )
}

export default Navbar
