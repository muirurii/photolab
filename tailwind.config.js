/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                main: "#fff",
                secondary: "#006851",
                text: "#000",
                fade: "#0000009a",
            },
            fontFamily: {
                main: ["Raleway", "Geneva", "sans-serif"],
                logo: ["Edu VIC WA NT Beginner", "cursive"],
                headline: ["Bebas Neue", "cursive"],
            },
            height: {
                hero: "calc(100vh - 80px)",
            },
        },
    },
    plugins: [],
};