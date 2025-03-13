// src/App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Nosotros } from '../pages/home/Nosotros';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

export const AppRoutes  = () => {
  return (
<Router >
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/nosotros" element={<Nosotros />} />
    {/* ... otras rutas */}
  </Routes>
</Router>

  );
};

