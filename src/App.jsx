import React from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Features from './components/features/Features'
import Team from './components/team/Team'
import Testomonial from './components/testomonials/Testomonial'
import Gallery from './components/gallery/Gallery'
import About from './components/about/About'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes>
      <Features/>
      <About/>
      <Services/>
      <Gallery/>
      <Testomonial/>
      <Team/>
      <Footer/>
    </Router>
    </>
  )
}

export default App