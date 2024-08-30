/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'orange': '#FD6F00',
        'white': '#FBFBFB',

        'light-gray': '#EDECEC',
        'gray': '#F3F3F3',
        'dark-gray': '#545454',
        'black-gray': '#121212'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'logo': "url('./assets/Logo.png')",

        'home-image': "url('./assets/header-image.png')",
        'about-image': "url('./assets/about-image.png')",

        'facebook-light': "url('./assets/social/lightTheme/Facebook_Negative.png')",
        'instagram-light': "url('./assets/social/lightTheme/Instagram_Negative.png')",
        'linkedin-light': "url('./assets/social/lightTheme/LinkedIn_Negative.png')",
        'twitter-light': "url('./assets/social/lightTheme/Twitter_Negative.png')",

        'facebook-dark': "url('./assets/social/darkTheme/Facebook_Negative.png')",
        'instagram-dark': "url('./assets/social/darkTheme/Instagram_Negative.png')",
        'linkedin-dark': "url('./assets/social/darkTheme/LinkedIn_Negative.png')",
        'twitter-dark': "url('./assets/social/darkTheme/Twitter_Negative.png')",

        'range-app': "url('./assets/ranges/app.png')",
        'range-graphic': "url('./assets/ranges/graphic.png')",
        'range-ux': "url('./assets/ranges/ux.png')",
        'range-website': "url('./assets/ranges/website.png')",

        'service-app': "url('./assets/services/app.png')",
        'service-graphic': "url('./assets/services/graphic.png')",
        'service-ux': "url('./assets/services/ux.png')",
        'service-web': "url('./assets/services/web.png')",
      },
    },
  },
  plugins: [],
}

