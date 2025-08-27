import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import Details from './pages/Details';   // 👈 import your details page
import { MovieProvider } from './contexts/MovieContext';
import Scrolltop from "./components/Scrolltop";

function App() {
  return (  
    <MovieProvider>
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/details/:id" element={<Details/>}/> {/* 👈 new route */}
      </Routes>
    </MovieProvider>
  );
}

export default App
