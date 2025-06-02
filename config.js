// config.js
const backendURL = 'https://e-constructor-production.up.railway.app/'; // or your live URL after deployment
// config.js
const isLocal = window.location.hostname === 'localhost';
const backendURL = isLocal
  ? 'https://e-constructor-production.up.railway.app/' // Your real server port
  : 'https://your-live-backend.onrender.com'; // Update after deployment
