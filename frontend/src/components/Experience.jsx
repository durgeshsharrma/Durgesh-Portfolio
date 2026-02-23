import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import { experiences } from '../constants';

const Experience = () => {
    const [activeExp, setActiveExp] = useState(0);
    const { isDark } = useTheme();

    const cardBg = isDark ? 'bg-[rgba(13,13,26,0.7)] border-white/5' : 'bg-white border-gray-100 shadow-sm';
    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textSub = isDark ? 'text-gray-400' : 'text-gray-500';
    const textMuted = isDark ? 'text-gray-500' : 'text-gray-400';

    return (
        <section id="experience" className="relative section-padding z-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <p className="text-primary font-semibold tracking-widest uppercase text-sm">My Journey</p>
                    <h2 className={`text-4xl md:text-5xl font-black mt-2 ${textMain}`}>
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="section-underline mx-auto mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Tab list */}
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-3">
                        {experiences.map((exp, i) => (
                            <motion.button
                                key={exp.id}
                                whileHover={{ x: 4 }}
                                onClick={() => setActiveExp(i)}
                                className={`text-left p-5 rounded-xl transition-all duration-300 border ${activeExp === i
                                    ? isDark ? 'bg-[rgba(13,13,26,0.7)]' : 'bg-white shadow-md'
                                    : 'border-transparent hover:border-white/5'
                                    }`}
                                style={activeExp === i ? { borderColor: `${exp.color}30`, boxShadow: `0 0 20px ${exp.color}15` } : {}}
                            >
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                                    <span className={`text-xs ${textMuted}`}>{exp.date}</span>
                                    {exp.current && (
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">Current</span>
                                    )}
                                </div>
                                <div className={`font-bold text-sm ${activeExp === i ? textMain : textMuted}`}>{exp.role}</div>
                                <div className={`text-xs mt-1 flex items-center gap-1 ${textMuted}`}>
                                    <FaBuilding size={10} />{exp.company}
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Detail panel */}
                    <motion.div
                        key={activeExp}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`lg:col-span-2 rounded-2xl p-8 border ${cardBg}`}
                        style={{ borderColor: `${experiences[activeExp].color}15` }}
                    >
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="px-3 py-1 rounded-full text-xs font-bold"
                                        style={{ background: `${experiences[activeExp].color}20`, color: experiences[activeExp].color }}>
                                        {experiences[activeExp].type}
                                    </div>
                                    {experiences[activeExp].current && (
                                        <div className="flex items-center gap-1.5 text-green-400 text-xs">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Active
                                        </div>
                                    )}
                                </div>
                                <h3 className={`text-2xl font-black ${textMain}`}>{experiences[activeExp].role}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <FaBuilding className={textMuted} size={14} />
                                    <p style={{ color: experiences[activeExp].color }} className="font-semibold">{experiences[activeExp].company}</p>
                                </div>
                            </div>
                            <div className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border ${isDark ? 'glass-card text-gray-500' : 'bg-gray-50 text-gray-400 border-gray-200'}`}>
                                <FaCalendar size={12} />{experiences[activeExp].date}
                            </div>
                        </div>

                        <p className={`leading-relaxed mb-8 ${textSub}`}>{experiences[activeExp].desc}</p>

                        <div>
                            <h4 className={`font-semibold text-sm mb-4 uppercase tracking-widest ${textMain}`}>Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {experiences[activeExp].skills.map((skill) => (
                                    <span key={skill} className="text-xs px-3 py-1.5 rounded-full font-medium border"
                                        style={{ background: `${experiences[activeExp].color}15`, color: experiences[activeExp].color, borderColor: `${experiences[activeExp].color}30` }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
