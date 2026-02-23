import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaChevronDown } from 'react-icons/fa';
import HeroCanvas from './canvas/HeroCanvas';
import { useTheme } from '../ThemeContext';

const ROLES = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'React.js Specialist',
    'Freelance Developer',
    'UI/UX Enthusiast',
];

const TypingText = () => {
    const [idx, setIdx] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = ROLES[idx % ROLES.length];
        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, displayText.length + 1));
                if (displayText.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayText(current.slice(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setIdx((prev) => (prev + 1) % ROLES.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, idx]);

    return (
        <span>
            <span className="gradient-text font-bold">{displayText}</span>
            <span className="typing-cursor" />
        </span>
    );
};

const Hero = () => {
    const { isDark } = useTheme();
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-64px)]">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="flex flex-col gap-6"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm text-primary font-medium w-fit"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Available for Freelancing
                        </motion.div>

                        {/* Heading */}
                        <div className="space-y-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                            >
                                Hi, I'm{' '}
                                <span className="gradient-text-purple text-glow">Durgesh</span>
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className={`text-2xl md:text-3xl lg:text-4xl font-bold min-h-[2.5rem] flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                            >
                                <TypingText />
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className={`text-lg leading-relaxed max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                            I craft pixel-perfect, high-performance web experiences using the
                            MERN stack. From stunning frontends to robust backends — I bring
                            your digital vision to life.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-8"
                        >
                            {[
                                { label: 'Projects', value: '10+' },
                                { label: 'Experience', value: '1+ yr' },
                                { label: 'Technologies', value: '15+' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-3xl font-black gradient-text">{stat.value}</div>
                                    <div className={`text-xs mt-1 uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-500/80'}`}>{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary text-white font-semibold px-8 py-3.5 rounded-full text-base flex items-center gap-2"
                            >
                                Let's Build Together 🚀
                            </motion.button>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="btn-outline font-semibold px-8 py-3.5 rounded-full text-base flex items-center gap-2"
                            >
                                <FaDownload size={16} />
                                Resume
                            </motion.a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex items-center gap-4"
                        >
                            <a
                                href="https://github.com/durgeshsharrma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="https://linkedin.com/in/durgeshsharrma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-primary/50 to-transparent" />
                            <span className="text-gray-500 text-sm">Let's connect</span>
                        </motion.div>
                    </motion.div>

                    {/* Right — 3D canvas */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Glow ring */}
                        <div className="absolute w-80 h-80 rounded-full border border-primary/20 animate-spin-slow pointer-events-none" />
                        <div className="absolute w-96 h-96 rounded-full border border-secondary/10 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
                        <div className="w-full h-full">
                            <Suspense fallback={<div className="w-full h-full" />}>
                                <HeroCanvas />
                            </Suspense>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors cursor-pointer group"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FaChevronDown className="group-hover:text-primary" />
                    </motion.div>
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
