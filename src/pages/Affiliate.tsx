import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Gift, 
  CheckCircle, 
  ArrowRight,
  Star,
  Headphones
} from 'lucide-react';

const Affiliate = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: '15% Commission',
      description: 'Earn industry-leading 15% commission on every sale you generate.',
    },
    {
      icon: TrendingUp,
      title: '30-Day Cookie',
      description: 'Extended 30-day cookie duration means more earning potential.',
    },
    {
      icon: Gift,
      title: 'Free Products',
      description: 'Top affiliates receive free Iravis products for review and promotion.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Get priority support from our affiliate management team.',
    },
  ];

  const tiers = [
    {
      name: 'Starter',
      sales: '0-50',
      commission: '15%',
      features: ['Basic affiliate dashboard', 'Standard payout schedule', 'Email support'],
    },
    {
      name: 'Pro',
      sales: '51-200',
      commission: '18%',
      features: ['Advanced analytics', 'Priority payouts', 'Dedicated account manager', 'Free product samples'],
    },
    {
      name: 'Elite',
      sales: '200+',
      commission: '22%',
      features: ['Custom commission rates', 'Instant payouts', 'Exclusive product previews', 'Sponsored event opportunities', 'Co-marketing campaigns'],
    },
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Tech Reviewer',
      quote: 'The Iravis affiliate program has been a game-changer for my channel. The products practically sell themselves!',
      earnings: '$12,000+',
    },
    {
      name: 'Sarah Martinez',
      role: 'Esports Streamer',
      quote: 'My viewers love Iravis gear. The 15% commission adds up quickly, and the team is incredibly supportive.',
      earnings: '$8,500+',
    },
    {
      name: 'Mike Johnson',
      role: 'Gaming Blogger',
      quote: 'Best affiliate program in the gaming space. High conversion rates and premium products that people actually want.',
      earnings: '$15,000+',
    },
  ];

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="relative mb-20">
        <div className="absolute inset-0 radial-glow" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-6">
                <Star size={14} className="text-[#00d4ff]" />
                <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">
                  Affiliate Program
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Earn <span className="gradient-text">15% Commission</span>
                <br />
                On Every Sale
              </h1>

              <p className="text-lg text-white/60 mb-8 max-w-lg">
                Join the Iravis Affiliate Program and earn industry-leading commissions 
                by promoting premium gaming peripherals to your audience.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="btn-primary">
                  Apply Now
                  <ArrowRight size={18} />
                </a>
                <a href="#how-it-works" className="btn-secondary">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#141414] to-[#0a0a0a] rounded-2xl overflow-hidden">
                <img
                  src="/images/1000010671.jpg"
                  alt="Iravis Mouse Lineup"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4">
                <p className="text-3xl font-bold gradient-text">$2M+</p>
                <p className="text-sm text-white/50">Paid to affiliates</p>
              </div>
              <div className="absolute -top-6 -right-6 glass rounded-xl p-4">
                <p className="text-3xl font-bold gradient-text">5,000+</p>
                <p className="text-sm text-white/50">Active affiliates</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="how-it-works" className="section bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Iravis?</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Join thousands of content creators, streamers, and influencers earning with Iravis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/50">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="section">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commission Tiers</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              The more you sell, the more you earn. Unlock higher commission rates as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`glass rounded-xl p-6 ${tier.name === 'Pro' ? 'border-[#00d4ff]/30 border' : ''}`}
              >
                {tier.name === 'Pro' && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-semibold mb-4">
                    <Star size={12} />
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-white/50 mb-4">{tier.sales} sales/month</p>
                <p className="text-4xl font-bold gradient-text mb-6">{tier.commission}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={16} className="text-[#00d4ff] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              See how our affiliates are earning with Iravis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#00d4ff] fill-[#00d4ff]" />
                  ))}
                </div>
                <p className="text-white/70 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-white/50">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/50">Earned</p>
                    <p className="text-[#00d4ff] font-bold">{testimonial.earnings}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="section">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start <span className="gradient-text">Earning?</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Join thousands of affiliates promoting the world&apos;s finest gaming peripherals. 
              Applications are reviewed within 48 hours.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Application Received!</h3>
                <p className="text-white/60">We&apos;ll review your application and get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors"
                />
                <button type="submit" className="btn-primary">
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            <p className="text-sm text-white/40 mt-6">
              By applying, you agree to our Affiliate Terms of Service
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Affiliate;
