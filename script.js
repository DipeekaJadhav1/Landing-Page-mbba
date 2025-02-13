document.getElementById('lead-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const country = document.getElementById('country').value;
    
    if (!name || !email || !phone || !country) {
      alert('Please fill out all fields.');
      return;
    }
    
    if (!/^[\w-\.]+@[\w-\.]+\.\w+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    alert('Thank you for applying! We will contact you soon.');
    this.reset();
  });
  