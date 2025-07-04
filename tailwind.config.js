/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        // "./public/index.html",
    ],
    theme: {
        extend: {
            animation: {
                'custom-pulse': 'pulse 1.5s infinite',
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                    '50%': { transform: 'scale(1.05)', opacity: '0.8' },
                },
            },
        },
    },
    plugins: [],
}
