export function createNavbar(): string {
    return `
      <nav class="navbar">
        <div class="navbar-logo">
          <img src="./src/assets/logo.png" alt="Logo">
        </div>
        <ul class="navbar-links">
          <li><a href="home.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="navbar-profile">
          <img src="./src/assets/profile-icon.png" alt="Profile">
        </div>
      </nav>
    `;
  }