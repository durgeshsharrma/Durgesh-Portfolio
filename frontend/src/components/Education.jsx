import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCalendar } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import { education } from '../constants';

const Education = () => {
    const { isDark } = useTheme();
    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textSub = isDark ? 'text-gray-400' : 'text-gray-500';
    const cardBg = isDark ? 'bg-[rgba(13,13,26,0.7)] border-white/5' : 'bg-white border-gray-100 shadow-sm';

    return (
        <section id="education" className="relative section-padding z-10">
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <p className="text-primary font-semibold tracking-widest uppercase text-sm">Academic Background</p>
                    <h2 className={`text-4xl md:text-5xl font-black mt-2 ${textMain}`}>
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <div className="section-underline mx-auto mt-4" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-20 hidden md:block" />

                    <div className="space-y-8">
                        {education.map((edu, i) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative flex gap-6 md:pl-8"
                            >
                                <div
                                    className="hidden md:flex absolute left-0 top-6 w-4 h-4 rounded-full border-2 items-center justify-center z-10"
                                    style={{ borderColor: edu.color, background: isDark ? '#0a0a0f' : '#fff', boxShadow: `0 0 10px ${edu.color}60` }}
                                >
                                    <div className="w-2 h-2 rounded-full" style={{ background: edu.color }} />
                                </div>

                                <motion.div
                                    whileHover={{ y: -4, x: 4 }}
                                    className={`rounded-2xl p-7 w-full border transition-all duration-300 ${cardBg}`}
                                    style={{ borderColor: `${edu.color}15` }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                                                style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                                            >
                                                {edu.icon}
                                            </div>
                                            <div>
                                                <h3 className={`font-bold text-lg leading-tight ${textMain}`}>{edu.school}</h3>
                                                <p className={`text-sm mt-1 ${textSub}`}>{edu.degree}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <div className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border ${isDark ? 'glass-card text-gray-500' : 'bg-gray-50 text-gray-400 border-gray-200'}`}>
                                                <FaCalendar size={10} />{edu.date}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full"
                                                style={{ background: `${edu.color}20`, color: edu.color }}>
                                                <FaStar size={10} />{edu.grade}
                                            </div>
                                        </div>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${textSub}`}>{edu.desc}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
