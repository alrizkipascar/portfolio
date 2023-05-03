module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      }, backgroundImage: {
        'orange': "url('Image/orange.jpg')",
        'doodle': "url('Image/bg-doodle.png')",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
