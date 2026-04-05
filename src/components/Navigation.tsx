import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [location.pathname]);

  const mice = products.filter(p => p.category === 'mouse');
  const otherProducts = products.filter(p => p.category !== 'mouse');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-[#00d4ff] to-[#0099cc] flex items-center justify-center">
              <span className="text-black font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-[#00d4ff] transition-colors">
              IRAVIS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-[#00d4ff]' : 'text-white/70 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/products')
                    ? 'text-[#00d4ff]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Products
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 min-w-[500px] shadow-2xl">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                          Gaming Mice
                        </h4>
                        <div className="space-y-3">
                          {mice.map(mouse => (
                            <Link
                              key={mouse.id}
                              to={`/products/${mouse.id}`}
                              className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors group"
                            >
                              {mouse.image && (
                                <img
                                  src={mouse.image}
                                  alt={mouse.name}
                                  className="w-10 h-10 object-contain rounded bg-white/5"
                                />
                              )}
                              <div>
                                <p className="text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
                                  {mouse.shortName}
                                </p>
                                <p className="text-xs text-white/40">${mouse.price}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                          Other Products
                        </h4>
                        <div className="space-y-3">
                          {otherProducts.map(product => (
                            <Link
                              key={product.id}
                              to={`/products/${product.id}`}
                              className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors group"
                            >
                              {product.image && (
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-10 h-10 object-contain rounded bg-white/5"
                                />
                              )}
                              <div>
                                <p className="text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
                                  {product.shortName}
                                </p>
                                <p className="text-xs text-white/40">${product.price}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Link
                        to="/products"
                        className="text-sm text-[#00d4ff] hover:underline"
                      >
                        View All Products →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-[#00d4ff]' : 'text-white/70 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-[#00d4ff]' : 'text-white/70 hover:text-white'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/affiliate"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/affiliate' ? 'text-[#00d4ff]' : 'text-white/70 hover:text-white'
              }`}
            >
              Affiliate
            </Link>

            <Link
              to="/socials"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/socials' ? 'text-[#00d4ff]' : 'text-white/70 hover:text-white'
              }`}
            >
              Community
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/products" className="btn-primary text-sm">
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/10">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <Link to="/" className="block py-3 text-lg font-medium">Home</Link>
            <Link to="/products" className="block py-3 text-lg font-medium">Products</Link>
            <Link to="/about" className="block py-3 text-lg font-medium">About</Link>
            <Link to="/contact" className="block py-3 text-lg font-medium">Contact</Link>
            <Link to="/affiliate" className="block py-3 text-lg font-medium">Affiliate</Link>
            <Link to="/socials" className="block py-3 text-lg font-medium">Community</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
