module.exports = {
   url: process.env.ELEVENTY_ENV === 'development' ? 'http://127.0.0.1:8000' :  process.env.ELEVENTY_ENV === 'production' ? 'https://jambox.games' : 'https://elegant-hopper-04dc90.netlify.app'
   
  };