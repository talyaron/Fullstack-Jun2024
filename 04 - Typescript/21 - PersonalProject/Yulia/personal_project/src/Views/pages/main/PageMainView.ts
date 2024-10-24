import "./PageMainStyle.scss";
import { Sidebar } from "../../components/sideBar/SideBarView";
import { Topbar } from "../../components/topBar/TopBarView";
import { ProfileSection } from "../../components/profileSection/ProfileSectionVeiw";
import { IUser } from "../../../Models/entities/userModel";

// Function to render the main page view
export function renderMainPage(user: IUser): void {
  const sidebar = new Sidebar();
  const profileSection = new ProfileSection();
  const topbar = new Topbar();

  // Ensure that app container exists
  const app = document.querySelector("#app");
  if (app) {
    app.innerHTML = ""; // Clear app container before rendering new elements

    const topbarElement = topbar.createTopbar();
    app.appendChild(topbarElement);

    const sidebarElement = sidebar.createSidebar();
    app.appendChild(sidebarElement);

    // Pass the full user object to createProfile
    const profileElement = profileSection.createProfile(user);
    app.appendChild(profileElement);
  } else {
    console.error("App container not found");
  }
}

// Entry point
document.addEventListener("DOMContentLoaded", () => {
  const savedUserData = localStorage.getItem("users"); // Use correct key for saved users
  let user: IUser;

  if (savedUserData) {
    const parsedUserData = JSON.parse(savedUserData);
    user = {
      id: parsedUserData.id, // Ensure id field is passed
      name: parsedUserData.name,
      email: parsedUserData.email,
      password: parsedUserData.password,
      phone: parsedUserData.phone,
    };
  } else {
    // Fallback user object if no data found
    user = {
      id: crypto.randomUUID(),
      name: "Guest",
      email: "guest@example.com",
      password: "",
      phone: "000-000-0000",
    };
  }

  // Pass the full user object to the main page render function
  renderMainPage(user);
});
