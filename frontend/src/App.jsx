import 'lenis/dist/lenis.css'
import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import HomePage from './pages/HomePage.jsx'
import CafeListPage from './pages/CafeListPage.jsx'
import ReviewsSections from './components/ReviewsSections.jsx'
import FooterSection from './components/FooterSection.jsx'
import {BrowserRouter, Route, Routes} from 'react-router'

const App = () => {
  const lenis = useLenis();
  return (
  <>
    <div className='app'>
      <ReactLenis root />
      <HomePage />
    </div>
  </>
  )
}

export default App
