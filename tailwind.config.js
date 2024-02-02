/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-brunoAce)']
      },
      backgroundImage: {
        'heroBg': "url('/backgroundHero.png')",
        'aboutBg': "url('/backgroundAbout.png')",
        'skillsBg': "url('/backgroundStack.png')",
        'projectBg': "url('/backgroundProject.png')",
        'footerBg': "url('/backgroundFooter.png')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "40px",
          lg: "80px",
        },
      },
      screens: {
        sm: "480px", // mobile
        md: "768px", // tablet
        lg: "1440px", // desktop
      },
      color: {
        'grey': '#EDF1FA'
      },
    },
  },
  plugins: [],
}
