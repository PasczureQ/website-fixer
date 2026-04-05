import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  ShoppingCart, 
  Bell, 
  Zap, 
  Battery, 
  Weight,
  Wifi,
  MousePointer,
  ChevronRight
} from 'lucide-react';
import { getProductById, products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-white/50 mb-8">The product you are looking for does not exist.</p>
          <Link to="/products" className="btn-primary">
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-white/40 mb-8"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <ChevronRight size={14} />
          <span className="text-white">{product.shortName}</span>
        </motion.div>

        {/* Product Hero */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#141414] to-[#0a0a0a] rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 radial-glow" />
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 max-h-[80%] max-w-[80%] object-contain animate-float"
                />
              ) : (
                <div className="text-center relative z-10">
                  <span className="badge badge-coming-soon text-lg mb-6">Coming Soon</span>
                  <p className="text-white/40 mt-4">This product is currently in development</p>
                </div>
              )}
            </div>
            
            {/* Tier Badge */}
            <div className="absolute top-4 left-4">
              <span className={`badge ${product.tier === 'flagship' ? 'badge-accent' : 'bg-white/10 text-white'}`}>
                {product.tier.charAt(0).toUpperCase() + product.tier.slice(1)}
              </span>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-white/40 uppercase tracking-wider">
                {product.category}
              </span>
              {product.comingSoon && (
                <span className="badge badge-coming-soon">Coming Soon</span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-white/60 mb-6">{product.description}</p>

            <div className="flex items-center gap-6 mb-8">
              <span className="text-4xl font-bold gradient-text">${product.price}</span>
              <div className="flex items-center gap-2 text-white/40">
                <Check size={18} className="text-[#00d4ff]" />
                <span className="text-sm">In Stock</span>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-lg p-4">
                <Weight size={20} className="text-[#00d4ff] mb-2" />
                <p className="text-xs text-white/40 uppercase tracking-wider">Weight</p>
                <p className="font-semibold">{product.specs.Weight}</p>
              </div>
              <div className="glass rounded-lg p-4">
                <Battery size={20} className="text-[#00d4ff] mb-2" />
                <p className="text-xs text-white/40 uppercase tracking-wider">Battery</p>
                <p className="font-semibold">{product.specs['Battery Life']}</p>
              </div>
              <div className="glass rounded-lg p-4">
                <MousePointer size={20} className="text-[#00d4ff] mb-2" />
                <p className="text-xs text-white/40 uppercase tracking-wider">Sensor</p>
                <p className="font-semibold">{product.specs.Sensor}</p>
              </div>
              <div className="glass rounded-lg p-4">
                <Wifi size={20} className="text-[#00d4ff] mb-2" />
                <p className="text-xs text-white/40 uppercase tracking-wider">Connectivity</p>
                <p className="font-semibold">{product.specs.Connectivity?.split('/')[0]}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {product.comingSoon ? (
                <button className="btn-primary flex-1 md:flex-none">
                  <Bell size={18} />
                  Notify Me
                </button>
              ) : (
                <button className="btn-primary flex-1 md:flex-none">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              )}
              <Link to="/contact" className="btn-secondary">
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                  <Zap size={20} className="text-[#00d4ff]" />
                </div>
                <p className="text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Full Specifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
          <div className="glass rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex justify-between p-4 ${index % 2 === 0 ? 'md:bg-white/[0.02]' : ''} ${index !== Object.entries(product.specs).length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <span className="text-white/50">{key}</span>
                  <span className="font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What is in the Box */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">What is in the Box</h2>
          <div className="glass rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['USB-C cable', '8K dongle', 'Nano dongle', 'PTFE skates', 'Grip tape', 'Carrying pouch'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={18} className="text-[#00d4ff] flex-shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link to={`/products/${related.id}`} className="group block">
                    <div className="glass rounded-xl overflow-hidden card-hover">
                      <div className="aspect-[4/3] bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-6 flex items-center justify-center img-zoom">
                        {related.image && (
                          <img
                            src={related.image}
                            alt={related.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold group-hover:text-[#00d4ff] transition-colors">
                          {related.shortName}
                        </h3>
                        <p className="text-[#00d4ff] font-bold">${related.price}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
