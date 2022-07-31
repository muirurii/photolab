/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                main: "#E9EAEC",
                secondary: "#FF6501",
                text: "#005D9E",
                fade: "#0000009a",
            },
            fontFamily: {
                mFont: ["Raleway", "Geneva", "sans-serif"],
                logo: ["Edu VIC WA NT Beginner", "cursive"],
                headline: ["Bebas Neue", "cursive"],
            },
            height: {
                hero: "calc(100vh - 70px)",
            },
            minHeight: {
                hero: "calc(100vh - 70px)",
            },
            translate: {
                menuHide: "calc(100% + 70px)",
            }
        },
    },
    plugins: [],
};