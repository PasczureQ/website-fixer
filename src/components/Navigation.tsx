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
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#00d4ff] flex items-center justify-center">
              <span className="text-black font-black text-sm tracking-tight">I</span>
            </div>
            <span className="text-base font-bold tracking-[0.15em] uppercase group-hover:text-[#00d4ff] transition-colors">
              Iravis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                location.pathname === '/' ? 'text-white' : 'text-white/50 hover:text-white'
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
                className={`flex items-center gap-1.5 text-[13px] font-medium tracking-wide uppercase transition-colors ${
                  location.pathname.startsWith('/products')
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Products
                <ChevronDown
                  size={12}
                  className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-[#0c0c0c] border border-white/[0.06] p-5 min-w-[440px] shadow-2xl shadow-black/50">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3">
                          Mice
                        </h4>
                        <div className="space-y-1">
                          {mice.map(mouse => (
                            <Link
                              key={mouse.id}
                              to={`/products/${mouse.id}`}
                              className="flex items-center gap-3 p-2 hover:bg-white/[0.03] transition-colors group/item"
                            >
                              {mouse.image && (
                                <img
                                  src={mouse.image}
                                  alt={mouse.name}
                                  className="w-8 h-8 object-contain"
                                />
                              )}
                              <div>
                                <p className="text-sm font-medium group-hover/item:text-[#00d4ff] transition-colors">
                                  {mouse.shortName}
                                </p>
                                <p className="text-[11px] text-white/30">${mouse.price}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3">
                          Other
                        </h4>
                        <div className="space-y-1">
                          {otherProducts.map(product => (
                            <Link
                              key={product.id}
                              to={`/products/${product.id}`}
                              className="flex items-center gap-3 p-2 hover:bg-white/[0.03] transition-colors group/item"
                            >
                              {product.image && (
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-8 h-8 object-contain"
                                />
                              )}
                              <div>
                                <p className="text-sm font-medium group-hover/item:text-[#00d4ff] transition-colors">
                                  {product.shortName}
                                </p>
                                <p className="text-[11px] text-white/30">${product.price}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.04]">
                      <Link
                        to="/products"
                        className="text-[11px] font-semibold text-[#00d4ff] uppercase tracking-wider hover:underline"
                      >
                        View all products →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                location.pathname === '/about' ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                location.pathname === '/contact' ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/affiliate"
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                location.pathname === '/affiliate' ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              Affiliate
            </Link>

            <Link
              to="/socials"
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                location.pathname === '/socials' ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              Community
            </Link>
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link to="/products" className="hidden lg:block text-[12px] font-bold tracking-[0.1em] uppercase text-black bg-[#00d4ff] px-6 py-2.5 hover:bg-[#00b8e0] transition-colors">
              Shop
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1 text-white"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#080808] border-t border-white/[0.04]">
          <div className="container mx-auto px-6 py-8 space-y-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
              { to: '/affiliate', label: 'Affiliate' },
              { to: '/socials', label: 'Community' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 text-lg font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/products" className="btn-primary w-full justify-center">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
