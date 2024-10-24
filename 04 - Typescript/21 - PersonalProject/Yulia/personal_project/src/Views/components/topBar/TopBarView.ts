import "./TopBarStyle.scss";

export class Topbar {
  createTopbar(): HTMLElement {
    const topbar = document.createElement("div");
    topbar.classList.add("topbar");

    // Logo with image
    const logo = document.createElement("div");
    logo.classList.add("topbar__logo");

    const logoImage = document.createElement("img");
    logoImage.src = "../Images/logo.png"; // Path to the logo image
    logoImage.alt = "Logo";
    logoImage.classList.add("topbar__logo-img");

    logo.appendChild(logoImage);

    // Search input
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "🔍 Search";
    searchInput.classList.add("topbar__search");

    // Profile icon (could be a placeholder for an image)
    const profileIcon = document.createElement("div");
    profileIcon.classList.add("topbar__profile-icon");

    // Append elements to topbar
    topbar.appendChild(logo);
    topbar.appendChild(searchInput);
    topbar.appendChild(profileIcon);

    return topbar;
  }
}
