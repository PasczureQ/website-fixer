import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Affiliate from './pages/Affiliate';
import Socials from './pages/Socials';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050505] noise-overlay">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
