import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsCanvas from './components/canvas/Stars';
import { ThemeProvider, useTheme } from './ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lenis from '@studio-freight/lenis';
// import Lenis from '@studio-freight/lenis';

const AppContent = () => {
    const { isDark } = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Init Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        setTimeout(() => setLoading(false), 2200);

        return () => lenis.destroy();
    }, []);

    useEffect(() => {
        if (!loading) {
            // Give React a moment to mount the sections
            const timer = setTimeout(() => {
                const observerOptions = {
                    threshold: 0.15,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                        }
                    });
                }, observerOptions);

                document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                    observer.observe(el);
                });

                // Force layout recalculation for Lenis
                window.dispatchEvent(new Event('resize'));
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [loading]);

    if (loading) {
        return (
            <div className={`fixed inset-0 flex items-center justify-center z-50 ${isDark ? 'bg-darker' : 'bg-gray-50'}`}>
                <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-secondary animate-spin" style={{ animationDuration: '1s' }} />
                        <div className="absolute inset-3 rounded-full border-2 border-transparent border-b-accent animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
                        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
                    </div>
                    <p className="gradient-text text-2xl font-bold tracking-widest">DS</p>
                    <p className={`text-sm mt-2 tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Loading Portfolio...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-darker text-white' : 'bg-gray-50 text-gray-900'}`}>
            {isDark && <StarsCanvas />}
            <Navbar />
            {/* Hero has 'active' by default so it shows up immediately */}
            <div className="reveal-on-scroll active"><Hero /></div>
            <div className="reveal-on-scroll"><About /></div>
            <div className="reveal-on-scroll"><Skills /></div>
            <div className="reveal-on-scroll"><Services /></div>
            <div className="reveal-on-scroll"><Experience /></div>
            <div className="reveal-on-scroll"><Projects /></div>
            <div className="reveal-on-scroll"><Education /></div>
            <div className="reveal-on-scroll"><Contact /></div>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ zIndex: 99999 }}
            />
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
