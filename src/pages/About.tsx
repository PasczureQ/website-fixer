import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users, Shield } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Precision First',
      description: 'Every product is engineered to deliver pixel-perfect accuracy, giving competitive gamers the edge they need.',
    },
    {
      icon: Zap,
      title: 'Speed Matters',
      description: 'From 8KHz polling rates to ultra-lightweight designs, speed is at the core of everything we create.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Premium materials like carbon fiber and magnesium alloy ensure durability without compromising weight.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We listen to esports professionals and competitive gamers to continuously improve our products.',
    },
  ];

  const milestones = [
    { year: '2022', event: 'Iravis founded with a mission to revolutionize gaming peripherals' },
    { year: '2023', event: 'Launched Carbon X PRO, our flagship gaming mouse' },
    { year: '2024', event: 'Expanded product line with headsets and keyboards' },
    { year: '2025', event: 'Partnered with top esports teams worldwide' },
  ];

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="relative mb-20">
        <div className="absolute inset-0 radial-glow" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              We Are <span className="gradient-text">Iravis</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              A team of passionate gamers, engineers, and designers dedicated to creating 
              the world&apos;s finest competitive gaming peripherals. Born from the esports scene, 
              built for champions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                At Iravis, we believe that every millisecond counts. Our mission is to eliminate 
                the barriers between player and performance by creating peripherals that respond 
                as fast as you think.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                We do not just build gaming gear—we engineer competitive advantages. Every product 
                that bears the Iravis name has been tested, refined, and validated by professional 
                esports athletes.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                From our ultra-lightweight Carbon X PRO to our precision-engineered K110 keyboard, 
                every detail is obsessively crafted to give you the edge you need to win.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="glass rounded-xl p-6 text-center">
                <p className="text-4xl font-bold gradient-text mb-2">&lt;40g</p>
                <p className="text-sm text-white/50">Lightest Mouse</p>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <p className="text-4xl font-bold gradient-text mb-2">8KHz</p>
                <p className="text-sm text-white/50">Max Polling Rate</p>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <p className="text-4xl font-bold gradient-text mb-2">250h</p>
                <p className="text-sm text-white/50">Battery Life</p>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <p className="text-4xl font-bold gradient-text mb-2">50+</p>
                <p className="text-sm text-white/50">Pro Team Partners</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              The principles that guide everything we do at Iravis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-white/50">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              From a small startup to a global gaming brand
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex gap-8 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xl font-bold text-[#00d4ff]">{milestone.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#00d4ff] -translate-x-[1.6rem]" />
                  <div className="absolute left-0 top-4 bottom-0 w-px bg-white/10 -translate-x-6" />
                  <div className="glass rounded-lg p-4">
                    <p className="text-white/70">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Backed by Champions</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Our products are trusted by professional esports teams and content creators worldwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8 md:p-12 text-center"
          >
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8">
              {['Team Liquid', 'Cloud9', 'TSM', 'Fnatic', 'G2 Esports', 'Sentinels'].map((team, index) => (
                <div key={index} className="text-white/30 font-bold text-lg md:text-xl">
                  {team}
                </div>
              ))}
            </div>
            <p className="text-white/50">
              And many more professional teams trust Iravis for their competitive needs
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
