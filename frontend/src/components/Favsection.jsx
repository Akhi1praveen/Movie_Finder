import "./Favstyles.css"
import React from 'react'

const Favsection = () => {
    return (
        <div className="fav-header">
            <div className='fav-empty'>
                <h2>No Favorite Movies Yet.</h2>
                <p>Start adding movies to your favorites and they will appear here.</p>
            </div>
        </div>
    )
}

export default Favsection
