import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TravelList from './pages/TravelList'
import BucketList from './pages/BucketList'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<TravelList />} />
          <Route path="/bucket-list" element={<BucketList />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
