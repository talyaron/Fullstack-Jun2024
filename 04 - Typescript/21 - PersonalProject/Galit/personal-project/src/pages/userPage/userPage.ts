import { getUserDetails } from '../../controller/userController'; 

export function renderUserPage(): string {
  const user = JSON.parse(localStorage.getItem('loggedInUser') || 'null');

  if (!user) {
    return "<div>Error loading user page. Please log in again.</div>";
  }

  const content = `
    <h1>Welcome, ${user.fullName}</h1>
    <p>Your email: ${user.email}</p>
    <p>Your phone: ${user.phone}</p>
    <a href="#" id="logoutButton">Logout</a>
  `;

  setTimeout(() => {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', handleLogout);
    }
  }, 0);

  return content;
}

function handleLogout() {
  localStorage.removeItem('loggedInUser'); 
  window.location.href = 'login.html'; 
}