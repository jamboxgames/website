module.exports = {
   url: process.env.ELEVENTY_ENV === 'development' ? 'http://127.0.0.1:8000' :  process.env.ELEVENTY_ENV === 'staging' ? 'https://elegant-hopper-04dc90.netlify.app' : 'https://jambox.games'
   
  };
