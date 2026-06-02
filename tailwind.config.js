/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0C0C0E",
          soft: "#141417",
          800: "#1A1A1E",
          700: "#26262C",
          600: "#3A3A42",
        },
        bone: {
          DEFAULT: "#F4F2ED",
          dim: "#CFCBC2",
          muted: "#8C887F",
        },
        amber: {
          DEFAULT: "#E0A338",
          bright: "#F4B445",
          deep: "#B47E20",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1280px",
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
