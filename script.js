const passwordInput = document.querySelector('input[type="password"]');
const eyeIcon = document.querySelector('.bi-eye');

eyeIcon.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  eyeIcon.classList.toggle('text-cyan-500');
});

// Form validation ar submit

const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const submitBtn = form.querySelector('button[type="submit"]');

function validateForm() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Simple email regex

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  submitBtn.disabled = !(validEmail && password.length >= 6);
  submitBtn.style.opacity = submitBtn.disabled ? '0.6' : '1';
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

form.addEventListener('submit', (e) => {
  e.preventDefault();


  alert('Logged in as: ' + emailInput.value);
  form.reset();
  validateForm();
});


validateForm();