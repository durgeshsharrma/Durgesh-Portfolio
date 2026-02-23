import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaCode, FaArrowUp } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Footer = () => {
    const { isDark } = useTheme();
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const scrollTo = (href) => {
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const bg = isDark ? 'bg-darker/50 border-white/5' : 'bg-gray-100 border-gray-200';
    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textSub = isDark ? 'text-gray-500' : 'text-gray-400';

    return (
        <footer className={`relative z-10 border-t backdrop-custom ${bg}`}>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <FaCode className="text-white text-lg" />
                            </div>
                            <div>
                                <div className={`font-black text-lg ${textMain}`}>Durgesh Sharma</div>
                                <div className={`text-xs ${textSub}`}>Full Stack Developer</div>
                            </div>
                        </div>
                        <p className={`text-sm leading-relaxed ${textSub}`}>
                            Building exceptional digital experiences with clean code and modern design. Available for freelance projects worldwide.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://github.com/durgeshsharrma" target="_blank" rel="noopener noreferrer"
                                className={`w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all ${textSub} hover:text-white`}>
                                <FaGithub size={16} />
                            </a>
                            <a href="https://www.linkedin.com/in/durgesh-sharma-62a25b222/" target="_blank" rel="noopener noreferrer"
                                className={`w-9 h-9 rounded-full border border-secondary/30 flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-all ${textSub} hover:text-white`}>
                                <FaLinkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className={`font-semibold mb-5 uppercase tracking-widest text-xs ${textMain}`}>Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <button onClick={() => scrollTo(link.href)}
                                        className={`text-sm hover:text-primary transition-colors flex items-center gap-2 group ${textSub}`}>
                                        <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className={`font-semibold mb-5 uppercase tracking-widest text-xs ${textMain}`}>Services</h4>
                        <ul className="space-y-3">
                            {['Website Development', 'Backend Development', 'Full Stack Apps', 'Deployment & Hosting', 'E-Commerce Solutions', 'UI/UX Implementation'].map((service) => (
                                <li key={service}>
                                    <span className={`text-sm hover:text-secondary transition-colors cursor-default ${textSub}`}>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className={`text-sm flex items-center gap-2 ${textSub}`}>
                        © {new Date().getFullYear()} Durgesh Sharma. Made with
                        <FaHeart className="text-accent animate-pulse" size={12} />
                        in India 🇮🇳
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollTop}
                        className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all"
                        title="Back to top"
                    >
                        <FaArrowUp size={14} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
