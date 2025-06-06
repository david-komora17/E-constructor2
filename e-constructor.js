import { backendURL } from './config.js';

const propertyList = document.getElementById('property-list'); // Example container

fetch(`${backendURL}/api/properties`)
  .then(res => {
    if (!res.ok) throw new Error('Failed to fetch properties');
    return res.json();
  })
  .then(properties => {
    if (!properties.length) {
      propertyList.innerHTML = '<p>No properties found.</p>';
      return;
    }

    properties.forEach(p => {
      const item = document.createElement('div');
      item.innerHTML = `
        <h3>LR Number: ${p.lrNumber}</h3>
        <p>County: ${p.county}</p>
        <p>Purpose: ${p.purpose}</p>
        <hr/>
      `;
      propertyList.appendChild(item);
    });
  })
  .catch(err => {
    propertyList.innerHTML = `<p>Error loading properties: ${err.message}</p>`;
    console.error('Fetch error:', err);
  });
