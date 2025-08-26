import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import { MovieProvider } from './contexts/MovieContext';
import Scrolltop from "./components/Scrolltop";
function App() {

  return (  
    <MovieProvider>
      <Scrolltop></Scrolltop>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </MovieProvider>
  );
}

export default App
