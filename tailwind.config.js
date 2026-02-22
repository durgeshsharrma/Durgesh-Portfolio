/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#915EFF',
                secondary: '#00D4FF',
                accent: '#FF6B6B',
                dark: '#0a0a0f',
                darker: '#050508',
                card: '#0d0d1a',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #0d0d2b 50%, #0a0a0f 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 5px #915EFF, 0 0 10px #915EFF' },
                    '50%': { boxShadow: '0 0 20px #915EFF, 0 0 40px #915EFF, 0 0 60px #915EFF' },
                },
            },
            screens: {
                'xs': '450px',
            },
        },
    },
    plugins: [],
}
