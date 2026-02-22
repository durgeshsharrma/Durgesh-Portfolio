import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaServer, FaMobile, FaCloud, FaShoppingCart, FaPaintBrush } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const services = [
    {
        icon: <FaGlobe className="text-3xl" />,
        title: 'Website Development',
        description: 'Custom, high-performance websites built with React, Next.js, and modern web tech. From landing pages to complex web apps — clean code and stunning UI.',
        features: ['React / Next.js', 'Responsive Design', 'SEO Optimized', 'Fast Performance'],
        color: '#915EFF',
        badge: 'Most Popular',
    },
    {
        icon: <FaServer className="text-3xl" />,
        title: 'Backend & API Development',
        description: 'Robust, scalable backend systems using Node.js, Express.js, and MongoDB. RESTful APIs, authentication, real-time features — reliable server-side solutions.',
        features: ['Node.js / Express', 'MongoDB / MySQL', 'JWT Authentication', 'REST APIs'],
        color: '#00D4FF',
        badge: null,
    },
    {
        icon: <FaMobile className="text-3xl" />,
        title: 'Full Stack Applications',
        description: 'End-to-end MERN stack applications with seamless frontend-backend integration. From concept to deployment — I handle the complete development lifecycle.',
        features: ['MERN Stack', 'Database Design', 'State Management', 'CI/CD Pipeline'],
        color: '#FF6B6B',
        badge: 'Full Stack',
    },
    {
        icon: <FaCloud className="text-3xl" />,
        title: 'Deployment & Hosting',
        description: 'Deploy your applications to the cloud with SSL, domain setup, and monitoring. I use Vercel, Netlify, AWS, and Render for reliable hosting.',
        features: ['Vercel / Netlify', 'AWS / Render', 'SSL & Domain Setup', 'Performance Monitoring'],
        color: '#FFB347',
        badge: null,
    },
    {
        icon: <FaShoppingCart className="text-3xl" />,
        title: 'E-Commerce Solutions',
        description: 'Feature-rich e-commerce platforms with product management, secure payment gateways (Stripe), order tracking, and admin dashboards.',
        features: ['Payment Gateway', 'Admin Dashboard', 'Order Management', 'Product Catalog'],
        color: '#4ECDC4',
        badge: null,
    },
    {
        icon: <FaPaintBrush className="text-3xl" />,
        title: 'UI/UX Implementation',
        description: 'Transform designs into pixel-perfect, animated interfaces using Tailwind CSS, Framer Motion, and modern design patterns that users love.',
        features: ['Pixel Perfect', 'Smooth Animations', 'Tailwind CSS', 'Mobile First'],
        color: '#A8E6CF',
        badge: null,
    },
];

const Services = () => {
    const { isDark } = useTheme();
    const cardBg = isDark ? 'bg-[rgba(13,13,26,0.7)] border-white/5' : 'bg-white border-gray-100 shadow-sm';
    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textSub = isDark ? 'text-gray-400' : 'text-gray-500';

    return (
        <section id="services" className="relative section-padding z-10">
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-semibold tracking-widest uppercase text-sm">What I Offer</p>
                    <h2 className={`text-4xl md:text-5xl font-black mt-2 ${textMain}`}>
                        My <span className="gradient-text">Services</span>
                    </h2>
                    <div className="section-underline mx-auto mt-4" />
                    <p className={`mt-6 max-w-2xl mx-auto text-lg ${textSub}`}>
                        From idea to deployment — I provide end-to-end digital solutions. Available for freelance projects worldwide! 🌍
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`rounded-2xl p-7 relative overflow-hidden group cursor-default border transition-all duration-300 ${cardBg}`}
                            style={{ borderColor: `${service.color}15` }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(circle at top left, ${service.color}08, transparent 60%)` }} />

                            {service.badge && (
                                <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                                    style={{ background: `linear-gradient(135deg, ${service.color}AA, ${service.color}66)` }}>
                                    {service.badge}
                                </div>
                            )}

                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                                style={{ background: `${service.color}15`, color: service.color, border: `1px solid ${service.color}30` }}>
                                {service.icon}
                            </div>

                            <h3 className={`text-xl font-bold mb-3 ${textMain}`}>{service.title}</h3>
                            <p className={`text-sm leading-relaxed mb-5 ${textSub}`}>{service.description}</p>

                            <ul className="space-y-2">
                                {service.features.map((feat) => (
                                    <li key={feat} className={`flex items-center gap-2 text-sm ${textSub}`}>
                                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs" style={{ color: service.color }}>✓</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }} />
                        </motion.div>
                    ))}
                </div>

                {/* Freelancing CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={`mt-16 rounded-2xl p-10 text-center relative overflow-hidden border ${isDark ? 'bg-[rgba(13,13,26,0.7)] border-primary/20' : 'bg-white border-primary/15 shadow-md'}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className={`text-3xl font-black mb-3 ${textMain}`}>
                            Ready to start your <span className="gradient-text">project?</span>
                        </h3>
                        <p className={`text-lg mb-8 max-w-xl mx-auto ${textSub}`}>
                            I'm available for freelance work. Let's discuss your project and bring your vision to life!
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-primary text-white font-bold px-10 py-4 rounded-full text-lg"
                        >
                            Let's Talk! 💬
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
