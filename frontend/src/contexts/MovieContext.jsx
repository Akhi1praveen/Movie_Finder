import { createContext,useState,useEffect,useContext } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider =({children}) =>{
    const  [favorites,setFavorites] = useState([])

    useEffect(()=>{
        const storefavs = localStorage.getItem("favorites")

        if(storefavs) setFavorites(JSON.parse(storefavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addToFavorites = (movie) =>{
        setFavorites(prev => [...prev,movie])
    }
    const removeFromFavorites = (movieid) =>{
        setFavorites(prev => prev.filter(movie=>movie.id !== movieid))
    }

    const isFavorites = (movieid) =>{
        return favorites.some(movie => movie.id === movieid)
    }

    const value ={
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorites
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}