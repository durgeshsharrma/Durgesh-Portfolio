import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { SkillsInfo } from '../constants';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const { isDark } = useTheme();

    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textSub = isDark ? 'text-gray-400' : 'text-gray-500';
    const textMuted = isDark ? 'text-gray-500' : 'text-gray-400';
    const cardBg = isDark ? 'bg-[rgba(13,13,26,0.7)] border-white/5' : 'bg-white border-gray-100 shadow-sm';

    return (
        <section id="skills" className="relative section-padding z-10">
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-semibold tracking-widest uppercase text-sm">My Expertise</p>
                    <h2 className={`text-4xl md:text-5xl font-black mt-2 ${textMain}`}>
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <div className="section-underline mx-auto mt-4" />
                </motion.div>

                {/* Category tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {SkillsInfo.map((cat, i) => (
                        <motion.button
                            key={cat.title}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(i)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === i
                                ? 'text-white'
                                : isDark
                                    ? 'bg-[rgba(13,13,26,0.7)] border-white/10 text-gray-400 hover:text-white'
                                    : 'bg-gray-100 border-gray-200 text-gray-500 hover:bg-primary/10 hover:text-primary'
                                }`}
                            style={activeCategory === i
                                ? { background: `linear-gradient(135deg, ${cat.color}99, ${cat.color}66)`, borderColor: `${cat.color}60`, boxShadow: `0 0 20px ${cat.color}40` }
                                : {}}
                        >
                            <span>{cat.icon}</span>
                            {cat.title}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
                >
                    {SkillsInfo[activeCategory].skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ scale: 1.08, y: -4 }}
                            className={`rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group border transition-all duration-300 ${cardBg}`}
                            style={{ borderColor: `${SkillsInfo[activeCategory].color}15` }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 overflow-hidden"
                                style={{ background: `${SkillsInfo[activeCategory].color}15`, border: `1px solid ${SkillsInfo[activeCategory].color}30` }}
                            >
                                {skill.logo
                                    ? <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                                    : <span className="text-2xl font-black">{skill.name[0]}</span>
                                }
                            </div>
                            <span className={`text-xs font-medium text-center leading-tight group-hover:text-primary transition-colors ${textSub}`}>
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Proficiency bars */}
                <motion.div
                    key={`bars-${activeCategory}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 max-w-2xl mx-auto space-y-6"
                >
                    <h3 className={`text-center text-sm uppercase tracking-widest mb-8 ${textMuted}`}>Proficiency Level</h3>
                    {[
                        { name: SkillsInfo[activeCategory].skills[0]?.name || '', level: 95 },
                        { name: SkillsInfo[activeCategory].skills[1]?.name || '', level: 88 },
                        { name: SkillsInfo[activeCategory].skills[2]?.name || '', level: 85 },
                    ].filter((s) => s.name).map((skill, i) => {
                        const color = SkillsInfo[activeCategory].color;
                        return (
                            <div key={`${activeCategory}-${skill.name}`} className="space-y-2">
                                <div className="flex justify-between text-sm items-center">
                                    <span className={`font-semibold ${textMain}`}>{skill.name}</span>
                                    <motion.span
                                        key={`pct-${activeCategory}-${i}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 + i * 0.2 }}
                                        style={{ color }}
                                        className="font-black text-base"
                                    >
                                        {skill.level}%
                                    </motion.span>
                                </div>
                                {/* Track */}
                                <div
                                    className="h-3 rounded-full relative overflow-visible"
                                    style={{ background: isDark ? `${color}18` : `${color}20` }}
                                >
                                    {/* Filled bar */}
                                    <motion.div
                                        key={`bar-${activeCategory}-${i}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.3, delay: 0.4 + i * 0.2, ease: 'easeOut' }}
                                        className="h-full rounded-full relative overflow-hidden"
                                        style={{
                                            background: `linear-gradient(90deg, ${color}99, ${color}, #ffffffcc)`,
                                            boxShadow: `0 0 10px ${color}99, 0 0 22px ${color}55`,
                                        }}
                                    >
                                        {/* Shimmer sweep */}
                                        <motion.div
                                            initial={{ x: '-100%' }}
                                            animate={{ x: '250%' }}
                                            transition={{ duration: 1.4, delay: 0.9 + i * 0.2, ease: 'easeInOut' }}
                                            className="absolute inset-0 w-1/3 rounded-full"
                                            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}
                                        />
                                    </motion.div>
                                    {/* Glowing tip dot */}
                                    <motion.div
                                        key={`dot-${activeCategory}-${i}`}
                                        initial={{ left: 0, opacity: 0 }}
                                        animate={{ left: `${skill.level}%`, opacity: 1 }}
                                        transition={{ duration: 1.3, delay: 0.4 + i * 0.2, ease: 'easeOut' }}
                                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white"
                                        style={{ background: color, boxShadow: `0 0 8px ${color}, 0 0 18px ${color}` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
