import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Movies from '../components/Movies'
import Tv from '../components/Tv'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState("Movies");


  return (
    <div>
      <Navbar
        setSearchQuery={setSearchQuery}
        setSelected={setSelected}
        selected={selected}
      />
      {(selected === "Movies" )&&(
      <Movies searchQuery={searchQuery} ></Movies>
      )}
      {(selected === "Tv Shows")&&(
      <Tv searchQuery={searchQuery} ></Tv>
      )}

    </div>
  )
}

export default Home
