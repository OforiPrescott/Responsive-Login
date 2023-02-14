const toggleButton = document.querySelector('#toggle-theme');
const body = document.querySelector('body');
const form = document.querySelector('form');
const emailInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const submitButton = document.querySelector('button[type="submit"]');
const resetPasswordLink = document.querySelector('.reset-password a');

// Add event listeners to input fields and submit button
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
submitButton.addEventListener('click', authenticate);
resetPasswordLink.addEventListener('click', resetPassword);

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(email)) {
    emailInput.setCustomValidity('Please enter a valid email address');
  } else {
    emailInput.setCustomValidity('');
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
  if (!passwordRegex.test(password)) {
    passwordInput.setCustomValidity('Password should be alphanumeric with at least one uppercase letter, one lowercase letter, and one symbol');
  } else {
    passwordInput.setCustomValidity('');
  }
}

function authenticate(event) {
  event.preventDefault();
  if (form.checkValidity()) {
    // Implement authentication logic here
  } else {
    // Display validation error messages
    emailInput.reportValidity();
    passwordInput.reportValidity();
  }
}

function resetPassword(event) {
  event.preventDefault();
  const newPassword = prompt('Please enter your new password:');
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
  if (newPassword && passwordRegex.test(newPassword)) {
    alert('Your password has been reset successfully');
  } else {
    alert('Invalid password format');
  }
}
