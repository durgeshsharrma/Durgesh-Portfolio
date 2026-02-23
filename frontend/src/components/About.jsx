import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUserTie, FaMobile } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import profileImg from '../assets/photo_2025-11-16_20-12-15.jpg';

const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay },
});

const About = () => {
    const { isDark } = useTheme();

    const highlights = [
        { icon: <FaCode />, label: 'Clean Code', desc: 'Maintainable, scalable code' },
        { icon: <FaRocket />, label: 'Fast Delivery', desc: 'Quick turnaround, no shortcuts' },
        { icon: <FaUserTie />, label: 'Professional', desc: 'Reliable & communicative' },
        { icon: <FaMobile />, label: 'Responsive', desc: 'Pixel-perfect on all devices' },
    ];

    const cardBg = isDark
        ? 'bg-[rgba(13,13,26,0.7)] border-[rgba(145,94,255,0.15)] hover:border-[rgba(145,94,255,0.4)]'
        : 'bg-white border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-md';

    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textSub = isDark ? 'text-gray-400' : 'text-gray-500';
    const textMuted = isDark ? 'text-gray-500' : 'text-gray-400';

    return (
        <section id="about" className="relative section-padding z-10">
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div {...fadeInUp()} className="text-center mb-16">
                    <p className="text-primary font-semibold tracking-widest uppercase text-sm">Get to know me</p>
                    <h2 className={`text-4xl md:text-5xl font-black mt-2 ${textMain}`}>
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="section-underline mx-auto mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Profile image with floating badges */}
                    <motion.div {...fadeInUp(0.2)} className="flex justify-center">
                        <div className="relative">
                            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 relative z-10">
                                <img
                                    src={profileImg}
                                    alt="Durgesh Sharma"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #915EFF20, #00D4FF20)';
                                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-8xl font-black gradient-text">DS</div>';
                                    }}
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-0" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-secondary/30 rounded-2xl -z-0" />
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className={`absolute -right-6 top-8 rounded-xl px-4 py-3 shadow-lg border border-primary/30 z-20 ${isDark ? 'glass-card' : 'bg-white'}`}
                            >
                                <div className="text-2xl font-black gradient-text">1+</div>
                                <div className={`text-xs ${textMuted}`}>Year Exp.</div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                                className={`absolute -left-6 bottom-8 rounded-xl px-4 py-3 shadow-lg border border-secondary/30 z-20 ${isDark ? 'glass-card' : 'bg-white'}`}
                            >
                                <div className="text-2xl font-black gradient-text">10+</div>
                                <div className={`text-xs ${textMuted}`}>Projects Done</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text content */}
                    <motion.div {...fadeInUp(0.3)} className="space-y-6">
                        <h3 className={`text-2xl md:text-3xl font-bold ${textMain}`}>
                            Crafting digital experiences that{' '}
                            <span className="gradient-text">make an impact</span>
                        </h3>
                        <p className={`leading-relaxed text-lg ${textSub}`}>
                            I'm a passionate <span className={`font-semibold ${textMain}`}>Full Stack Developer</span> from Ghaziabad, India,
                            specializing in building exceptional digital experiences using the MERN stack.
                            Currently working at <span className="text-primary font-semibold">Cybercure Technologies</span>,
                            I build scalable, secure, and high-performance web applications.
                        </p>
                        <p className={`leading-relaxed ${textSub}`}>
                            With a B.Tech in Computer Science and hands-on experience across multiple companies,
                            I blend technical expertise with creative problem-solving. I'm also available for
                            freelance projects — let's build something amazing together!
                        </p>

                        {/* Highlight cards */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className={`rounded-xl p-4 flex items-start gap-3 border transition-all duration-300 ${cardBg}`}
                                >
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className={`font-semibold text-sm ${textMain}`}>{item.label}</div>
                                        <div className={`text-xs mt-1 ${textMuted}`}>{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary text-white font-semibold px-8 py-3 rounded-full mt-4 inline-block"
                        >
                            Contact Me ✉️
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
