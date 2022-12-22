const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["var(--font-primary)", ...fontFamily.sans],
                secondary: ["var(--font-secondary)", ...fontFamily.serif],
            },
            textColor: {
                primary: "#e4c571",
            },
            borderColor: {
                primary: "#e4c571",
            },
            fill: {
                primary: "#e4c571",
            },
        },
    },
    plugins: [],
};
