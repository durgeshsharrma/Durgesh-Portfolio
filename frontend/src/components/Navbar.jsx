import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'services', title: 'Services' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        setActive(id);
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const navBg = isDark
        ? (scrolled ? 'bg-darker/90 backdrop-custom border-b border-primary/10 shadow-lg shadow-primary/5' : 'bg-transparent')
        : (scrolled ? 'bg-white/90 backdrop-custom border-b border-gray-200 shadow-md' : 'bg-transparent');

    const linkBase = isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900';

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => { setActive(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
                        <FaCode className="text-white text-lg" />
                    </div>
                    <div>
                        <span className={`font-bold text-lg leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>Durgesh</span>
                        <span className="text-gray-400 text-xs block">Sharma</span>
                    </div>
                </motion.button>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollTo(link.id)}
                                className={`relative font-medium text-sm transition-colors duration-300 group ${active === link.id ? 'text-primary' : linkBase
                                    }`}
                            >
                                {link.title}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right side controls */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Theme Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${isDark
                                ? 'bg-white/5 border-white/10 text-yellow-300 hover:bg-yellow-300/10 hover:border-yellow-300/30'
                                : 'bg-gray-100 border-gray-200 text-primary hover:bg-primary/10 hover:border-primary/30'
                            }`}
                        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        <motion.div
                            key={isDark ? 'moon' : 'sun'}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
                        </motion.div>
                    </motion.button>

                    {/* Hire Me */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollTo('contact')}
                        className="btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full"
                    >
                        Hire Me 🚀
                    </motion.button>
                </div>

                {/* Mobile: theme toggle + menu button */}
                <div className="md:hidden flex items-center gap-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border ${isDark
                                ? 'bg-white/5 border-white/10 text-yellow-300'
                                : 'bg-gray-100 border-gray-200 text-primary'
                            }`}
                    >
                        {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
                    </motion.button>
                    <button
                        className={`p-2 transition-colors ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`md:hidden backdrop-custom border-b px-6 py-6 ${isDark ? 'bg-darker/95 border-primary/10' : 'bg-white/95 border-gray-100'
                        }`}
                >
                    <ul className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    onClick={() => scrollTo(link.id)}
                                    className={`text-base font-medium w-full text-left transition-colors ${active === link.id ? 'text-primary' : linkBase
                                        }`}
                                >
                                    {link.title}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => scrollTo('contact')}
                                className="btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full w-full"
                            >
                                Hire Me 🚀
                            </button>
                        </li>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
