import "./Moviesstyle.css"
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa"
const Moviecard = (props) => {
    const [click, setclick] = useState(false);
    const handleclick = () => setclick(!click)

    return (
        <div className="movie-card">
            <div className="movie-img" onClick={handleclick}>
                <img src={props.imgsrc} alt="img" />
                <FaHeart size={30} className={click ? "heart active" : "heart"} />
            </div>
            <div className="movie-details">
                <h2 className="movie-title">{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Moviecard
