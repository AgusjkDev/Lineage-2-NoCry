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
        },
    },
    plugins: [],
};
