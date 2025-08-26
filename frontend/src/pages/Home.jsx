import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Movies from '../components/Movies'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Movies></Movies>
    </div>
  )
}

export default Home
