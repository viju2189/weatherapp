/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F9629F",
                header: "#081e21",
                small: "#606060"
            },
            fontFamily: {
                signature: ["Great Vibes"],
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem"
            },
            // Set the max width to make the container narrower
            screens: {
                sm: "100%",       // Full width on small screens
                md: "640px",      // Adjust as needed
                lg: "768px",      // Adjust as needed
                xl: "1024px",     // Adjust as needed
                "2xl": "1120px",  // Adjust as needed
            }
        }
    },
    plugins: [],
}
