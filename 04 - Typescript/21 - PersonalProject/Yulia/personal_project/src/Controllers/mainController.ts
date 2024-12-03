import { Sidebar } from "../Views/components/sideBar/SideBarView";
import { Topbar } from "../Views/components/topBar/TopBarView";
import { ProfileSection } from "../Views/components/profileSection/ProfileSectionVeiw";
import { IUser } from "../Models/entities/userModel";

// MainController handles rendering the main page components
export class MainController {
  private sidebar: Sidebar;
  private topbar: Topbar;
  private profileSection: ProfileSection;

  constructor() {
    this.sidebar = new Sidebar();
    this.topbar = new Topbar();
    this.profileSection = new ProfileSection();
  }

  // Initialize the main page by rendering all necessary components
  init(): void {
    // Clear the existing content inside the app container
    const app = document.querySelector("#app");
    if (app) {
      app.innerHTML = ""; // Clear app container before rendering
    }

    // Get the user data from Local Storage (array of users)
    const savedUsersData = localStorage.getItem("users");
    let user: IUser;

    // Check if user data exists, and find the current user
    if (savedUsersData) {
      const users = JSON.parse(savedUsersData) as IUser[];
      const currentUserEmail = localStorage.getItem("currentUserEmail"); // Получаем email текущего пользователя

      // find the user by email
      user = users.find((u) => u.email === currentUserEmail) || {
        id: crypto.randomUUID(),
        name: "Guest",
        email: "guest@example.com",
        password: "",
        phone: "000-000-0000",
      };
    } else {
      // if no user data found, create a guest user
      user = {
        id: crypto.randomUUID(),
        name: "Guest",
        email: "guest@example.com",
        password: "",
        phone: "000-000-0000",
      };
    }

    // Render components for the main page
    this.renderMainPage(user);
  }

  // Function to render the main page components
  private renderMainPage(user: IUser): void {
    const app = document.querySelector("#app");
    if (app) {
      // Render Topbar
      const topbarElement = this.topbar.createTopbar();
      app.appendChild(topbarElement);

      // Render Sidebar
      const sidebarElement = this.sidebar.createSidebar();
      app.appendChild(sidebarElement);

      // Render ProfileSection with the user data
      const profileElement = this.profileSection.createProfile(user);
      app.appendChild(profileElement);
    } else {
      console.error("App container not found"); // Error handling
    }
  }
}
