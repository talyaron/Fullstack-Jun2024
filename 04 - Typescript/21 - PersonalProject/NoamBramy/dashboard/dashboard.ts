
function loadUserData() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
      const userData = JSON.parse(localStorage.getItem(loggedInUser)!);

      (document.getElementById('username') as HTMLSpanElement).innerText = userData.name || 'No username found';
      (document.getElementById('email') as HTMLSpanElement).innerText = loggedInUser;
      (document.getElementById('phoneNumber') as HTMLSpanElement).innerText = userData.phone || 'No phone number found';
      (document.getElementById('password') as HTMLSpanElement).innerText = userData.password || 'No password found';
  } else {
      alert('No user is logged in.');
      window.location.href = '../login/login.html';
  }
}

window.onload = loadUserData;
