document.getElementById('loginForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const keepMeLoggedIn = (document.getElementById('keepMeLoggedIn') as HTMLInputElement).checked;

  const storedUser = localStorage.getItem(email);
  if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password === password) {
          alert('Login successful!');

          if (keepMeLoggedIn) {
              localStorage.setItem('loggedInUser', email);
          } else {
              sessionStorage.setItem('loggedInUser', email);
          }

          setTimeout(() => {
              window.location.href = '../dashboard/dashboard.html'; 
          }, 500);
      } else {
          alert('Invalid email or password.'); 
      }
  } else {
      alert('Invalid email or password.'); 
  }
});
