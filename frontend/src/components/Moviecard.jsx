import "./Moviesstyle.css"
import pro1 from "../assets/1311165a.jpeg"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
const Moviecard = (props) => {
    const [click, setclick] = useState(false);
    const handleclick = () => setclick(!click)

    return (
        <div className="movie-card">
            <div className="movie-img">
                <img src={props.imgsrc} alt="img" />
                <FaHeart size={30} onClick={handleclick} className={click ? "heart active" : "heart"} />
            </div>
            <h2 className="movie-title">{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Moviecard
