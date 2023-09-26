import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Entete from './components/entete'
import LocationPage from './pages/location'
import About from './pages/about'

function App() {
  

  return (
    <BrowserRouter>
      <Entete />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
