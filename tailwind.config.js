/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                main: "#E9EAEC",
                // secondary: "#FF6501",
                secondary: "#f40000",
                // text: "#005D9E",
                text: "#000",
                fade: "#c9c9c9a2",
            },
            fontFamily: {
                mFont: ["Raleway", "Geneva", "sans-serif"],
                logo: ["Edu VIC WA NT Beginner", "cursive"],
                headline: ["Alumni Sans Inline One", "cursive"],
            },
            height: {
                hero: "calc(100vh - 70px)",
            },
            minHeight: {
                hero: "calc(100vh - 70px)",
            },
            translate: {
                menuHide: "101%",
            }
        },
    },
    plugins: [],
};