function loadUserData() {
  const loggedInUserEmail = localStorage.getItem('loggedInUser');
  
  if (loggedInUserEmail) {
      const user = User.loadFromLocalStorage(loggedInUserEmail);

      if (user) {
          (document.getElementById('username') as HTMLSpanElement).innerText = user.username || 'No username found';
          (document.getElementById('email') as HTMLSpanElement).innerText = user.email;
          (document.getElementById('phoneNumber') as HTMLSpanElement).innerText = user.phoneNumber || 'No phone number found';
          (document.getElementById('password') as HTMLSpanElement).innerText = user.password || 'No password found';
      } else {
          alert('User not found.');
          window.location.href = '../login/login.html';
      }
  } else {
      alert('No user is logged in.');
      window.location.href = '../login/login.html';
  }
}

window.onload = loadUserData;
