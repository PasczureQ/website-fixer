import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { assetUrl } from '../lib/assets';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      {/* Hero — Full bleed cinematic */}
      <section className="relative h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-mouse.jpg"
            alt="Iravis Carbon X PRO"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-20 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            <div className="accent-line mb-8" />

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]">
              Carbon X
              <br />
              <span className="text-[#00d4ff]">PRO</span>
            </h1>

            <p className="text-white/50 text-base md:text-lg max-w-md mb-10 leading-relaxed">
              38 grams. 8KHz polling. Carbon fiber shell.
              <br />
              The last mouse you will ever need.
            </p>

            <div className="flex items-center gap-5">
              <Link to="/products/carbon-x-pro" className="btn-primary">
                Explore
                <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="btn-secondary">
                All Products
              </Link>
            </div>
          </motion.div>

          {/* Specs strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-20 lg:bottom-28 right-6 lg:right-12 hidden md:flex items-center gap-12"
          >
            {[
              { value: '38g', label: 'Weight' },
              { value: '8KHz', label: 'Polling' },
              { value: '250h', label: 'Battery' },
            ].map((stat) => (
              <div key={stat.label} className="text-right">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[11px] text-white/30 uppercase tracking-[0.15em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
        </motion.div>
      </section>

      {/* Product Showcase — Asymmetric grid */}
      <section className="section bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="accent-line mb-6" />
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-3">Our Lineup</h2>
                <p className="text-white/40 text-sm md:text-base max-w-md">
                  Every product engineered for one purpose: winning.
                </p>
              </div>
              <Link to="/products" className="hidden md:flex items-center gap-2 text-[12px] font-semibold text-white/50 uppercase tracking-wider hover:text-[#00d4ff] transition-colors">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Featured product cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.03]">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={`/products/${product.id}`} className="group block bg-[#050505]">
                  <div className="aspect-[4/3] bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-[75%] max-w-[75%] object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <span className="badge badge-coming-soon">Coming Soon — Late 2028–2032</span>
                    )}
                    <div className="absolute inset-0 bg-[#00d4ff]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em]">
                        {product.category}
                      </span>
                      {product.tier === 'flagship' && (
                        <span className="text-[10px] font-bold text-[#00d4ff]/60 uppercase tracking-[0.15em]">
                          Flagship
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
                      {product.shortName}
                    </h3>
                    <p className="text-sm text-white/35 mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${product.price}</span>
                      <span className="text-[11px] text-white/30 uppercase tracking-wider group-hover:text-[#00d4ff] transition-colors">
                        Details →
                      </span>
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

      {/* Specs Section — Editorial */}
      <section className="section bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Built Different.
              </h2>
              <p className="text-white/35 max-w-lg mx-auto">
                Not incremental improvements. Fundamental rethinking of what gaming peripherals should be.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
              {[
                { number: '8,000', unit: 'Hz', desc: 'Polling rate. 0.125ms latency. Your inputs arrive before you finish thinking.' },
                { number: '38', unit: 'g', desc: 'Total weight. Carbon fiber composite. Lighter than most table tennis balls.' },
                { number: '30,000', unit: 'DPI', desc: 'PixArt 3950 HS sensor. Sub-micron precision tracking at any speed.' },
                { number: '250', unit: 'hrs', desc: 'Battery life on a single charge. Play for weeks, not days.' },
              ].map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-white">{spec.number}</span>
                    <span className="text-lg text-[#00d4ff] font-semibold">{spec.unit}</span>
                  </div>
                  <p className="text-sm text-white/35 leading-relaxed">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-width product banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#050505]" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
          <img
            src="/images/1000010674.png"
            alt="Iravis Crimson R1"
            className="max-h-[70%] max-w-[80%] object-contain animate-float opacity-80"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-lg"
          >
            <span className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 block">
              New Arrival
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Crimson R1
            </h2>
            <p className="text-white/40 mb-8 max-w-sm">
              Magnesium alloy frame. 52 grams. 4KHz polling. 
              Performance meets bold design.
            </p>
            <Link to="/products/crimson-r1" className="btn-primary">
              Learn More
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA — Simple, confident */}
      <section className="section bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to upgrade?
            </h2>
            <p className="text-white/40 mb-10 max-w-md mx-auto">
              Join thousands of competitive players who already made the switch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="btn-primary">
                Shop Now
                <ArrowRight size={16} />
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
