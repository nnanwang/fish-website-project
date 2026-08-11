import { useState } from 'react'

import './App.css'

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx"

import FishDatabase from "./components/FishDatabase.jsx"

import Footer from "./components/Footer.jsx"

function App() {

  return (
    <>

      <Navbar />
      <main>
        <Hero />
        <FishDatabase />
      </main>

      <Footer />

    </>
  )
}

export default App
