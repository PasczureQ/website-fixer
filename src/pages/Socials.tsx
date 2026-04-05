import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Twitch,
  Send,
  CheckCircle,
  ExternalLink,
  Users,
  Share2
} from 'lucide-react';

const Socials = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'Twitter',
      handle: '@IravisGG',
      icon: Twitter,
      followers: '125K',
      color: '#1DA1F2',
      url: 'https://twitter.com',
      description: 'Latest updates, product announcements, and gaming news',
    },
    {
      name: 'Instagram',
      handle: '@iravis.gg',
      icon: Instagram,
      followers: '89K',
      color: '#E4405F',
      url: 'https://instagram.com',
      description: 'Behind-the-scenes content and product showcases',
    },
    {
      name: 'YouTube',
      handle: 'Iravis',
      icon: Youtube,
      followers: '250K',
      color: '#FF0000',
      url: 'https://youtube.com',
      description: 'In-depth reviews, tutorials, and pro player spotlights',
    },
    {
      name: 'Discord',
      handle: 'discord.gg/iravis',
      icon: MessageCircle,
      followers: '75K',
      color: '#5865F2',
      url: 'https://discord.com',
      description: 'Join our community for support, giveaways, and discussions',
    },
    {
      name: 'Twitch',
      handle: 'twitch.tv/iravis',
      icon: Twitch,
      followers: '45K',
      color: '#9146FF',
      url: 'https://twitch.tv',
      description: 'Live product launches and gaming streams',
    },
  ];

  const communityStats = [
    { label: 'Community Members', value: '500K+' },
    { label: 'Monthly Giveaways', value: '$10K+' },
    { label: 'Pro Players', value: '200+' },
    { label: 'Countries', value: '80+' },
  ];

  const recentUpdates = [
    {
      date: 'Dec 15, 2025',
      title: 'Carbon X PRO Firmware Update',
      description: 'New firmware adds enhanced lift-off detection and improved battery optimization.',
    },
    {
      date: 'Dec 10, 2025',
      title: 'Holiday Giveaway Winner Announcement',
      description: 'Congratulations to all winners of our Holiday Gaming Setup Giveaway!',
    },
    {
      date: 'Dec 5, 2025',
      title: 'New Partnership: Team Liquid',
      description: 'Iravis is now the official peripheral sponsor of Team Liquid.',
    },
    {
      date: 'Nov 28, 2025',
      title: 'Crimson R1 Restock',
      description: 'The Crimson R1 is back in stock! Limited quantities available.',
    },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-6">
              <Users size={14} className="text-[#00d4ff]" />
              <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-wider">
                Join the Community
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connect With <span className="gradient-text">Iravis</span>
            </h1>

            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Join our global community of gamers, creators, and competitive players. 
              Be the first to know about new products, giveaways, and exclusive events.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Us</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Stay connected across all platforms for the latest updates and exclusive content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-6 card-hover group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${social.color}20` }}
                  >
                    <social.icon size={24} style={{ color: social.color }} />
                  </div>
                  <ExternalLink size={18} className="text-white/30 group-hover:text-[#00d4ff] transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{social.name}</h3>
                <p className="text-sm text-white/50 mb-3">{social.handle}</p>
                <p className="text-sm text-white/70 mb-4">{social.description}</p>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-white/40" />
                  <span className="text-sm text-white/60">{social.followers} followers</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-16 text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-6">
              <Send size={28} className="text-[#00d4ff]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Get exclusive access to product launches, behind-the-scenes content, 
              and special offers delivered straight to your inbox.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold mb-2">You&apos;re Subscribed!</h3>
                <p className="text-white/60">Welcome to the Iravis community.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors"
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-sm text-white/40 mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="section bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Stay in the loop with the latest news from Iravis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-6"
              >
                <p className="text-xs text-[#00d4ff] uppercase tracking-wider mb-2">{update.date}</p>
                <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                <p className="text-sm text-white/50">{update.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="section">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our <span className="gradient-text">Discord</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Connect with fellow gamers, get support from our team, participate in exclusive giveaways, 
              and be part of the Iravis family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Join Discord
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Share2 size={18} />
                Share on Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Socials;
