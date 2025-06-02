import { backendURL } from './config.js';

fetch(`${backendURL}/api/property`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
