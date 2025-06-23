import { backendURL } from './config.js';

document.getElementById('managerForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData();

  const name = document.getElementById('manager-name').value.trim();
  const id = document.getElementById('manager-id').value.trim();
  const lr = document.getElementById('lr-number').value.trim();
  const file = document.getElementById('permit-upload').files[0];

  if (!name || !id || !lr || !file) {
    alert("❌ Please fill in all fields and upload a file.");
    return;
  }

  formData.append('manager-name', name);
  formData.append('manager-id', id);
  formData.append('lr-number', lr);
  formData.append('permit-upload', file);

  try {
    const response = await fetch(`${backendURL}/api/property/submit-manager`, {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Upload failed");
    }

    alert("✅ Manager credentials submitted successfully.");
    form.reset();
  } catch (err) {
    console.error("❌ Submit error:", err);
    alert("❌ " + err.message);
  }
});
