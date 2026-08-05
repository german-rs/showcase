import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Home from './pages/Home'
import GalleryDetail from './pages/GalleryDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/showcase/site-01">
      <Helmet>
        <title>Aurora Fotografía — Fotografía documental de bodas</title>
        <meta
          name="description"
          content="Fotografía documental de matrimonios en Santiago. Plantilla demo."
        />
      </Helmet>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria/:slug" element={<GalleryDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App