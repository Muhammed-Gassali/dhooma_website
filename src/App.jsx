import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechPage from './pages/TechPage';
import CreativePage from './pages/CreativePage';
import './styles/variables.css';
import './styles/main.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TechPage />} />
        <Route path="/creative" element={<CreativePage />} />
      </Routes>
    </BrowserRouter>
  );
}
