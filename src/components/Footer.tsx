import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, MessageCircle, Twitch } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-[#00d4ff] to-[#0099cc] flex items-center justify-center">
                <span className="text-black font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold tracking-tight">IRAVIS</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Precision-engineered gaming peripherals for competitive players. 
              Built for speed, designed for victory.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] transition-all"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://twitch.tv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] transition-all"
              >
                <Twitch size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/carbon-x-pro" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Carbon X PRO
                </Link>
              </li>
              <li>
                <Link to="/products/crimson-r1" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Crimson R1
                </Link>
              </li>
              <li>
                <Link to="/products/c1" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  C1
                </Link>
              </li>
              <li>
                <Link to="/products/v1" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  V1
                </Link>
              </li>
              <li>
                <Link to="/products/pulse-x" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Pulse X
                </Link>
              </li>
              <li>
                <Link to="/products/k110" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  K110
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/affiliate" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link to="/socials" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Manuals
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} Iravis. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Precision. Speed. Victory.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
