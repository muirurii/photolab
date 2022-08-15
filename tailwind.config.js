/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./public/**/*.{html,js}", "./*.html"],
    theme: {
        extend: {
            colors: {
                secondary: "#f40000",
                text: "#000",
                fade: "#c9c9c9d2",
            },
            fontFamily: {
                mFont: ["Prompt", "Geneva", "sans-serif"],
                logo: ["Edu VIC WA NT Beginner", "cursive"],
                headline: ["Alumni Sans Inline One", "Geneva", "cursive"],
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