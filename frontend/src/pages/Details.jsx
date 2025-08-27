import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../services/api"
import Navbar from '../components/Navbar'
import Subdetails from "../components/Subdetails"

const Details = () => {
  const { id } = useParams()
  const [details, setDetails] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true)
      try {
        const results = await getMovieDetails(id)
        setDetails(results)
        setError(null)
      } catch (err) {
        console.log(err)
        setError("Failed to load movies...")
      } finally {
        setLoading(false)
      }
    }
    fetchDetails()
  }, [id])

  // Optional: track details update
  useEffect(() => {
    if (details) console.log("Fetched details:", details)
  }, [details])

  return (
    <div>
      <Navbar
      selected=""
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {details && <Subdetails details={details} />}
    </div>
  )
}

export default Details
