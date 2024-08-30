/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'orange': '#FD6F00',
        'white': '#FFFFFF',

        'light-gray': '#EDECEC',
        'gray': '#F3F3F3',
        'dark-gray': '#545454',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'logo': "url('./assets/Logo.png')",

        'home-image': "url('./assets/header-image.png')",
        'about-image': "url('./assets/about-image.png')",

        'facebook-negative': "url('./assets/social/Facebook_Negative.png')",
        'instagram-negative': "url('./assets/social/Instagram_Negative.png')",
        'linkedin-negative': "url('./assets/social/LinkedIn_Negative.png')",
        'twitter-negative': "url('./assets/social/Twitter_Negative.png')",

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

