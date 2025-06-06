import { backendURL } from './config.js';

document.getElementById('ownershipForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    property_postal_address: form.property_postal_address.value,
    building_lr_number: form.building_lr_number.value,
    former_owner_id: form.former_owner_id.value,
    enter_pin: form.enter_pin.value,
    new_owner_id: form.new_owner_id.value,
    reset_pin: form.reset_pin.value,
    phone: form.phone.value,
    entryType: form.entryType.value,
    former_owner_consent: form.former_owner_consent.checked,
  };

  try {
    const res = await fetch(`${backendURL}/api/property/change-ownership`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (res.ok) {
      alert(result.message || 'Ownership change submitted successfully.');
    } else {
      alert(result.message || 'An error occurred.');
    }
  } catch (err) {
    console.error('Request failed:', err);
    alert('Server error. Please try again later.');
  }
});
