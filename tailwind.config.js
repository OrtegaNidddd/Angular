const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...fontFamily.sans],
            },
        },
    },
    plugins: [
    ],B
}