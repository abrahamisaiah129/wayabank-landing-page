// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "primary-theme": "var(--primary-theme)",
                "primary-700": "var(--dark-primary)",
                "waya-primary": "var(--waya-primary)",
                "info": "var(--yellow-variant-1)",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}