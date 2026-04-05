import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, ArrowRight, Mouse, Headphones, Keyboard } from 'lucide-react';
import { products, type Product } from '../data/products';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mouse' | 'headset' | 'keyboard'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mice = products.filter(p => p.category === 'mouse');
  const headsets = products.filter(p => p.category === 'headset');
  const keyboards = products.filter(p => p.category === 'keyboard');

  // Get filtered products based on active filter
  const getFilteredProducts = () => {
    switch (activeFilter) {
      case 'mouse':
        return mice;
      case 'headset':
        return headsets;
      case 'keyboard':
        return keyboards;
      default:
        return products;
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Professional gaming peripherals engineered for competitive excellence. 
            Find the perfect gear for your playstyle.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[
            { id: 'all', label: 'All Products', icon: Filter },
            { id: 'mouse', label: 'Mice', icon: Mouse },
            { id: 'headset', label: 'Headsets', icon: Headphones },
            { id: 'keyboard', label: 'Keyboards', icon: Keyboard },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#00d4ff] text-black'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <filter.icon size={16} />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* All Products View - Show by Category */}
        {activeFilter === 'all' && (
          <>
            {/* Gaming Mice Section */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                  <Mouse size={24} className="text-[#00d4ff]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Gaming Mice</h2>
                  <p className="text-white/50 text-sm">Precision-engineered for competitive play</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mice.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Headsets Section */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                  <Headphones size={24} className="text-[#00d4ff]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Gaming Headsets</h2>
                  <p className="text-white/50 text-sm">Immersive audio for competitive advantage</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {headsets.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <ProductCard product={product} large />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Keyboards Section */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                  <Keyboard size={24} className="text-[#00d4ff]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Gaming Keyboards</h2>
                  <p className="text-white/50 text-sm">Precision typing and gaming experience</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {keyboards.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <ProductCard product={product} large />
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Filtered View - Single Grid */}
        {activeFilter !== 'all' && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                {activeFilter === 'mouse' && <Mouse size={24} className="text-[#00d4ff]" />}
                {activeFilter === 'headset' && <Headphones size={24} className="text-[#00d4ff]" />}
                {activeFilter === 'keyboard' && <Keyboard size={24} className="text-[#00d4ff]" />}
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {activeFilter === 'mouse' && 'Gaming Mice'}
                  {activeFilter === 'headset' && 'Gaming Headsets'}
                  {activeFilter === 'keyboard' && 'Gaming Keyboards'}
                </h2>
                <p className="text-white/50 text-sm">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </motion.div>

            <div className={`grid gap-6 ${activeFilter === 'mouse' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'}`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <ProductCard product={product} large={activeFilter !== 'mouse'} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Coming Soon CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass rounded-xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">More Coming Soon</h3>
          <p className="text-white/50 mb-6 max-w-lg mx-auto">
            We are constantly innovating. Sign up for our newsletter to be the first to know 
            about new product launches and exclusive offers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/socials" className="btn-primary">
              Join Community
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

interface ProductCardProps {
  product: Product;
  large?: boolean;
}

const ProductCard = ({ product, large }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`} className="group block h-full">
      <div className={`glass rounded-xl overflow-hidden card-hover h-full flex flex-col ${large ? 'md:flex-row' : ''}`}>
        <div className={`bg-gradient-to-br from-[#141414] to-[#0a0a0a] flex items-center justify-center img-zoom ${large ? 'md:w-1/2 aspect-square md:aspect-auto' : 'aspect-square'}`}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[80%] max-w-[80%] object-contain"
            />
          ) : (
            <div className="text-center p-8">
              <span className="badge badge-coming-soon mb-4">Coming Soon</span>
              <p className="text-white/40 text-sm">Stay tuned for updates</p>
            </div>
          )}
        </div>
        <div className={`p-6 flex flex-col justify-between ${large ? 'md:w-1/2' : ''}`}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-white/40 uppercase tracking-wider">
                {product.tier}
              </span>
              {product.tier === 'flagship' && (
                <span className="badge badge-accent">Best</span>
              )}
              {product.comingSoon && (
                <span className="badge badge-coming-soon">Coming Soon</span>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00d4ff] transition-colors">
              {product.shortName}
            </h3>
            <p className="text-sm text-white/50 mb-4 line-clamp-2">
              {product.shortDescription}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#00d4ff]">${product.price}</span>
            <span className="text-sm text-white/40 group-hover:text-[#00d4ff] transition-colors">
              Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
