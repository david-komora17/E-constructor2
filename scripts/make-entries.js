document.getElementById('propertyForm').addEventListener('submit', async (e) => {
    e.preventDefault();componentDidCatch(error, info) {
    }
    const form = e.target;
    const formData = new FormData(form);
  
    const res = await fetch(`${backendURL}/api/property/register`, {
      method: 'POST',
      body: formData
    });
  
    const data = await res.json();
    alert(data.message || data.error);
  });
  