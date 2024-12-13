import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Layout from './pages/Layout'
import About from './pages/About';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
)
