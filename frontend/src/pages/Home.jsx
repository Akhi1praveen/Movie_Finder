  import React, { useState } from 'react'
  import Navbar from '../components/Navbar'
  import { Link } from 'react-router-dom'
  import Movies from '../components/Movies'

  const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
      <div>
        <Navbar setSearchQuery={setSearchQuery}/>
        <Movies searchQuery={searchQuery} ></Movies>
      </div>
    )
  }

  export default Home
