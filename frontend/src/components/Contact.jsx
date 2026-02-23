import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const { isDark } = useTheme();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                'service_caum35b',  // EmailJS Service ID
                'template_ka24tcl',  // EmailJS Template ID
                form.current,
                'teozXuTv2wjzyVmBH'  // EmailJS Public Key
            )
            .then(
                () => {
                    setLoading(false);
                    form.current.reset();
                    toast.success('Message sent successfully! 🚀', {
                        theme: isDark ? 'dark' : 'light',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error('EmailJS Error:', error);
                    const errorMsg = error?.text || 'Check your internet or EmailJS config.';
                    toast.error(`Error: ${errorMsg}`, {
                        theme: isDark ? 'dark' : 'light',
                    });
                }
            );
    };

    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textSub = isDark ? 'text-gray-400' : 'text-gray-500';
    const cardBg = isDark ? 'bg-[rgba(13,13,26,0.7)] border-[rgba(145,94,255,0.15)]' : 'bg-white border-gray-100 shadow-sm';
    const inputBg = isDark
        ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:border-primary/50 focus:bg-primary/5'
        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary/50 focus:bg-white';

    const contactInfo = [
        { icon: <FaEnvelope />, label: 'Email', value: 'durgeshshrma14@gmail.com', href: 'mailto:durgeshshrma14@gmail.com', color: '#915EFF' },
        { icon: <FaPhone />, label: 'Phone / WhatsApp', value: '+91 97181 67226', href: 'https://wa.me/919718167226', color: '#00D4FF' },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Ghaziabad, Uttar Pradesh, India', href: '#', color: '#FF6B6B' },
    ];

    const socials = [
        { icon: <FaGithub size={22} />, href: 'https://github.com/durgeshsharrma', label: 'GitHub', color: '#915EFF' },
        { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/durgesh-sharma-62a25b222/', label: 'LinkedIn', color: '#00D4FF' },
        { icon: <FaWhatsapp size={22} />, href: 'https://wa.me/919718167226', label: 'WhatsApp', color: '#25D366' },
    ];

    return (
        <section id="contact" className="relative section-padding z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <p className="text-primary font-semibold tracking-widest uppercase text-sm">Get in Touch</p>
                    <h2 className={`text-4xl md:text-5xl font-black mt-2 ${textMain}`}>
                        Contact <span className="gradient-text">Me</span>
                    </h2>
                    <div className="section-underline mx-auto mt-4" />
                    <p className={`mt-4 max-w-xl mx-auto ${textSub}`}>
                        Have a project in mind? Let's talk! I'm available for freelance work and full-time opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Left panel */}
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
                        <div className={`rounded-2xl p-7 space-y-6 border ${cardBg}`}>
                            <h3 className={`text-xl font-bold ${textMain}`}>Let's start a conversation</h3>
                            <p className={`text-sm leading-relaxed ${textSub}`}>
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                            <div className="space-y-4">
                                {contactInfo.map((item) => (
                                    <a key={item.label} href={item.href} className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                            style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className={`text-xs uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</div>
                                            <div className={`text-sm font-medium group-hover:text-primary transition-colors ${textMain}`}>{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className={`rounded-2xl p-7 border ${cardBg}`}>
                            <h4 className={`font-semibold mb-5 text-sm uppercase tracking-widest ${textMain}`}>Find me on</h4>
                            <div className="flex gap-4">
                                {socials.map((social) => (
                                    <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                                        style={{ background: `${social.color}15`, color: social.color, border: `1px solid ${social.color}30` }}
                                        title={social.label}>
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="mt-6 flex items-center gap-2 p-3 rounded-xl border border-green-500/20 bg-green-500/5">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                                <span className="text-green-400 text-xs font-medium">Available for new projects & freelancing</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                        <div className={`rounded-2xl p-8 border ${cardBg}`}>
                            <h3 className={`text-xl font-bold mb-6 ${textMain}`}>Send me a message</h3>
                            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className={`text-sm font-medium ${textSub}`}>Your Name *</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            placeholder="Durgesh Sharma"
                                            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${inputBg}`}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className={`text-sm font-medium ${textSub}`}>Email Address *</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            placeholder="you@example.com"
                                            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${inputBg}`}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-sm font-medium ${textSub}`}>Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        placeholder="Let's discuss a project..."
                                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${inputBg}`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`text-sm font-medium ${textSub}`}>Message *</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project, timeline, and budget..."
                                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all resize-none ${inputBg}`}
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={loading}
                                    className={`btn-primary w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 text-base ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? (
                                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                                    ) : (
                                        <><FaPaperPlane /> Send Message</>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
