/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                sm: '4rem',
                lg: '6rem',
                xl: '8rem',
                '2xl': '10rem',
            },
        },
        extend: {},
    },
    plugins: [],
}
