import React from 'react'
import "./Moviesstyle.css"
import Moviecard from './Moviecard'
import Moviedata from './Moviecarddata'

const Movies = () => {
  return (
    <div className='movie-header'>
      <h1>Popular Movies</h1>
      <div className='movie-container'>
        {Moviedata.map((val, ind) => {
          return (
            <Moviecard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
            />
          )

        })
        }
      </div>
    </div>
  )
}

export default Movies
