import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CafeListPage from './pages/CafeListPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/all-cafes' element={<CafeListPage />} />
        <Route path='/about-us' element={<AboutUsPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>,
)
