import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@iravis.gg',
      description: 'For general inquiries and support',
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: 'discord.gg/iravis',
      description: 'Join our community for quick help',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM PST',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Los Angeles, CA',
      description: 'United States',
    },
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Have a question? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                    <info.icon size={20} className="text-[#00d4ff]" />
                  </div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  <p className="text-[#00d4ff] mb-1">{info.value}</p>
                  <p className="text-sm text-white/50">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-xl p-8 md:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-[#00d4ff]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/60">We&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00d4ff] transition-colors"
                    >
                      <option value="" className="bg-[#0a0a0a]">Select a subject</option>
                      <option value="support" className="bg-[#0a0a0a]">Product Support</option>
                      <option value="sales" className="bg-[#0a0a0a]">Sales Inquiry</option>
                      <option value="partnership" className="bg-[#0a0a0a]">Partnership</option>
                      <option value="affiliate" className="bg-[#0a0a0a]">Affiliate Program</option>
                      <option value="other" className="bg-[#0a0a0a]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'What is your warranty policy?',
                a: 'All Iravis products come with a 2-year warranty covering manufacturing defects.',
              },
              {
                q: 'How long does shipping take?',
                a: 'Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.',
              },
              {
                q: 'Do you ship internationally?',
                a: 'Yes, we ship to over 50 countries worldwide. Shipping costs vary by location.',
              },
              {
                q: 'Can I return a product?',
                a: 'We offer a 30-day return policy for unused products in original packaging.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-white/50">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;
