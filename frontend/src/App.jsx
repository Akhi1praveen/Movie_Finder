import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </>
  );
}

export default App
