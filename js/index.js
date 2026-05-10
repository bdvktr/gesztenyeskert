// Navbar scroll
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // Set min date for reservation
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Form submit
  const reservationForm = document.querySelector('.reservation-form');
  const successMsg = document.getElementById('success-msg');

  if (reservationForm && successMsg) {
    reservationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      reservationForm.style.display = 'none';
      successMsg.style.display = 'block';
    });
  }
