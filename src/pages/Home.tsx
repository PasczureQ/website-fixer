import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Feather, MousePointer2, Headphones } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flagship = products.find(p => p.tier === 'flagship');
  const featuredProducts = products.filter(p => !p.comingSoon).slice(0, 3);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">
                  New Release
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              >
                Precision.
                <br />
                <span className="gradient-text">Speed.</span>
                <br />
                Victory.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-white/60 mb-8 max-w-md"
              >
                Professional gaming peripherals engineered for competitive excellence. 
                Experience the difference of precision-crafted hardware.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/products" className="btn-primary">
                  Explore Products
                  <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex gap-12 mt-12"
              >
                <div>
                  <p className="text-3xl font-bold gradient-text">&lt;40g</p>
                  <p className="text-sm text-white/40">Ultra-Light</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">8KHz</p>
                  <p className="text-sm text-white/40">Polling Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">250h</p>
                  <p className="text-sm text-white/40">Battery Life</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              {flagship?.image && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-transparent blur-3xl" />
                  <img
                    src={flagship.image}
                    alt={flagship.name}
                    className="relative z-10 w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
                  />
                  
                  {/* Product badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute top-8 right-8 z-20"
                  >
                    <div className="glass rounded-lg p-4">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Flagship</p>
                      <p className="text-lg font-bold">{flagship.shortName}</p>
                      <p className="text-[#00d4ff] font-semibold">${flagship.price}</p>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Competition</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Every Iravis product is engineered with the same philosophy: 
              zero compromise on performance, precision, and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: '8KHz Polling', desc: '0.125ms response time for instant feedback' },
              { icon: Feather, title: 'Ultra-Light', desc: 'Under 40g designs for effortless control' },
              { icon: MousePointer2, title: 'Precision', desc: 'Top-tier sensors with pixel-perfect tracking' },
              { icon: Headphones, title: 'Immersive', desc: 'Crystal-clear audio for competitive advantage' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-white/50">Discover our most popular gear</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-[#00d4ff] hover:underline">
              View All <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={`/products/${product.id}`} className="group block">
                  <div className="glass rounded-xl overflow-hidden card-hover">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-8 flex items-center justify-center img-zoom">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <div className="text-center">
                          <span className="badge badge-coming-soon">Coming Soon</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-white/40 uppercase tracking-wider">
                          {product.category}
                        </span>
                        {product.tier === 'flagship' && (
                          <span className="badge badge-accent">Flagship</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00d4ff] transition-colors">
                        {product.shortName}
                      </h3>
                      <p className="text-sm text-white/50 mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#00d4ff]">${product.price}</span>
                        <span className="text-sm text-white/40 group-hover:text-[#00d4ff] transition-colors">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 radial-glow" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Upgrade?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of competitive gamers who have made the switch to Iravis. 
              Experience precision like never before.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="btn-primary">
                Shop Now
                <ArrowRight size={18} />
              </Link>
              <Link to="/affiliate" className="btn-secondary">
                Become an Affiliate
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
