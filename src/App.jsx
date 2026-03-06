import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import WorkWithMe from './pages/WorkWithMe'
import TravelList from './pages/TravelList'
import BucketList from './pages/BucketList'
import AirbnbCaseStudy from './pages/AirbnbCaseStudy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/landscape-airbnb-on-ios" element={<AirbnbCaseStudy />} />
          <Route path="/travel" element={<TravelList />} />
          <Route path="/bucket-list" element={<BucketList />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
