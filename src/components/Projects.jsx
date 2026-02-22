import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

// Project images from assets (at project root: d:\Portfolio\work_logo\)
import virtualAssistant from '../../work_logo/virtualAssistant.png';
import githubdetLogo from '../../work_logo/github_det.png';
import csprepLogo from '../../work_logo/cs_prep.png';
import movierecLogo from '../../work_logo/movie_rec.png';
import taskremLogo from '../../work_logo/task_rem.png';

const projects = [
    {
        id: 0,
        title: 'Vibra - Virtual Assistant',
        description:
            "Built an AI-powered virtual assistant using the MERN stack and integrated Google's Gemini API for intelligent, real-time responses. Supports voice/text commands, secure JWT authentication, and dynamic React UI. Enables natural conversations and smart task handling.",
        image: virtualAssistant,
        tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API', 'Node.Js', 'Express', 'MongoDB', 'Gemini API', 'JsonWebToken', 'Tailwind CSS'],
        github: 'https://github.com/durgeshsharrma/virtualAssistant',
        webapp: 'https://virtualassistant-r932.onrender.com/',
        color: '#915EFF',
        emoji: '🤖',
    },
    {
        id: 1,
        title: 'HospiTax - Healthcare Platform',
        description:
            'Built a full-stack hospital portal allowing patients to register, login, and book appointments. Implemented role-based access for admin and patients. Admins manage doctors and appointments; patients view schedules and payment history. Stripe payment gateway integrated.',
        image: githubdetLogo,
        tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API', 'Node.Js', 'Express', 'MongoDB', 'Stripe', 'JsonWebToken', 'Tailwind CSS'],
        github: 'https://github.com/durgeshsharrma/HospiTrax/',
        webapp: 'https://hospitrax.onrender.com/',
        color: '#00D4FF',
        emoji: '🏥',
    },
    {
        id: 2,
        title: 'WanderList - Travel Booking',
        description:
            'A full-stack Resort Booking platform designed for travellers. Offers comprehensive property listing with detailed information. Users can list their property or resort as admin, helping others find their perfect destination.',
        image: csprepLogo,
        tags: ['EJS', 'Node.js', 'MongoDB', 'Express', 'HTML', 'CSS', 'JavaScript', 'API', 'Passport', 'Bootstrap'],
        github: 'https://github.com/durgeshsharrma/wanderListin',
        webapp: 'https://wanderliistt.onrender.com/',
        color: '#FF6B6B',
        emoji: '✈️',
    },
    {
        id: 3,
        title: 'URL Shortener',
        description:
            'Web application that provides URL shortening for any large URL. Users can login and manage their short links. The intuitive design and smooth experience make it a go-to app for anyone looking to simplify their web links.',
        image: movierecLogo,
        tags: ['EJS', 'API', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Express', 'MongoDB', 'Bootstrap', 'Passport'],
        github: 'https://github.com/durgeshsharrma/urlShortner',
        webapp: 'https://url-shortner-2rb9.onrender.com/',
        color: '#4ECDC4',
        emoji: '🔗',
    },
    {
        id: 4,
        title: 'Amazon Clone',
        description:
            'Frontend clone of Amazon where users can browse products, add them to the cart, and proceed to checkout. Features a user-friendly interface with product listings and a secure payment flow.',
        image: taskremLogo,
        tags: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/durgeshsharrma/Amazon-Clone-Project',
        webapp: 'https://durgeshsharrma.github.io/Amazon-Clone-Project/',
        color: '#FFB347',
        emoji: '🛒',
    },
];

const ALL_FILTERS = ['All', 'React JS', 'Node.js', 'MongoDB', 'JavaScript'];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const { isDark } = useTheme();

    const filtered =
        filter === 'All'
            ? projects
            : projects.filter((p) => p.tags.some((t) => t.includes(filter)));

    const cardBg = isDark
        ? 'bg-[rgba(13,13,26,0.7)] border-white/5'
        : 'bg-white border-gray-100 shadow-sm';

    const descColor = isDark ? 'text-gray-400' : 'text-gray-500';

    return (
        <section id="projects" className="relative section-padding z-10">
            <div
                className={`absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none ${isDark ? 'bg-primary/5' : 'bg-primary/3'
                    }`}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-semibold tracking-widest uppercase text-sm">My Work</p>
                    <h2 className={`text-4xl md:text-5xl font-black mt-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="section-underline mx-auto mt-4" />
                    <p className={`mt-4 max-w-xl mx-auto ${descColor}`}>
                        A collection of projects that showcase my skills and passion for building great software.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {ALL_FILTERS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === tag
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : isDark
                                    ? 'glass-card text-gray-400 hover:text-white hover:border-primary/30'
                                    : 'bg-gray-100 text-gray-500 hover:bg-primary/10 hover:text-primary border border-transparent'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`rounded-2xl overflow-hidden group relative border transition-all duration-300 ${cardBg}`}
                            style={{ borderColor: `${project.color}15` }}
                        >
                            {/* Image / Preview area */}
                            <div
                                className="h-48 relative overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, ${project.color}18, ${project.color}06)`,
                                }}
                            >
                                {/* Dot mesh */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(${project.color} 1px, transparent 1px)`,
                                        backgroundSize: '24px 24px',
                                    }}
                                />

                                {/* Project image */}
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-h-24 max-w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback emoji */}
                                    <div className="hidden w-full h-full items-center justify-center text-6xl">
                                        {project.emoji}
                                    </div>
                                </div>

                                {/* Hover overlay with action buttons */}
                                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex flex-col items-center gap-2"
                                        title="View on GitHub"
                                    >
                                        <span className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                            <FaGithub size={20} />
                                        </span>
                                        <span className="text-white text-xs font-medium">GitHub</span>
                                    </motion.a>

                                    <motion.a
                                        href={project.webapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex flex-col items-center gap-2"
                                        title="View Live Demo"
                                    >
                                        <span
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors"
                                            style={{
                                                background: `${project.color}99`,
                                                border: `2px solid ${project.color}`,
                                                boxShadow: `0 0 16px ${project.color}60`,
                                            }}
                                        >
                                            <FaExternalLinkAlt size={16} />
                                        </span>
                                        <span className="text-white text-xs font-medium">Live Demo</span>
                                    </motion.a>
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-2 gap-2">
                                    <h3 className={`text-base font-bold leading-tight group-hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title}
                                    </h3>
                                    {/* Quick action links — always visible below title */}
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-1.5 rounded-lg transition-all duration-200 ${isDark ? 'text-gray-500 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'}`}
                                            title="GitHub"
                                        >
                                            <FaGithub size={15} />
                                        </a>
                                        <a
                                            href={project.webapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 rounded-lg transition-all duration-200"
                                            style={{ color: project.color }}
                                            title="Live Demo"
                                        >
                                            <FaExternalLinkAlt size={13} />
                                        </a>
                                    </div>
                                </div>

                                <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${descColor}`}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                                            style={{
                                                background: `${project.color}12`,
                                                color: project.color,
                                                border: `1px solid ${project.color}25`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 4 && (
                                        <span className={`text-xs px-2.5 py-1 rounded-full border ${isDark ? 'text-gray-500 border-white/10' : 'text-gray-400 border-gray-200'}`}>
                                            +{project.tags.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div
                                className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a href="https://github.com/durgeshsharrma" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-outline flex items-center gap-3 mx-auto px-8 py-3 rounded-full font-semibold"
                        >
                            <FaGithub size={20} />
                            View All on GitHub
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
