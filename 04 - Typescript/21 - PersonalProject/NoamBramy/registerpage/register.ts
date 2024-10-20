document.getElementById('registerForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const repeatPassword = (document.getElementById('repeatPassword') as HTMLInputElement).value;

  if (localStorage.getItem(email)) {
      alert('Email already exists.');
  } else if (password === '' || repeatPassword === '') {
      alert('Please fill in all fields.');
  } else if (password !== repeatPassword) {
      alert('Passwords do not match.'); 
  } else {
      localStorage.setItem(email, JSON.stringify({ name, phone, password }));
      alert('Registration successful!');
      window.location.href = '../loginpage/login.html';
  }
});
