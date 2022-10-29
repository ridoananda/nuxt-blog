const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
            },
            container: {
                padding: "1rem",
                center: true,
            },
        },
    },
    
    plugins: [require("@tailwindcss/typography")],
};
