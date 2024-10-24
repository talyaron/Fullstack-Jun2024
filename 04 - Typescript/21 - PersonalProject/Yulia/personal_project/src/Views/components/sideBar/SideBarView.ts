import "./SideBarStyle.scss";

export class Sidebar {
  createSidebar(): HTMLElement {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const logo = document.createElement("div");
    logo.classList.add("sidebar__logo");
    logo.textContent = "LOGO";

    const menuItems = [
      { name: "Home", hash: "#home" },
      { name: "Profile", hash: "#profile" },
      { name: "Courses", hash: "#courses" },
      { name: "Zoom", hash: "#zoom" },
      { name: "Forum", hash: "#forum" },
      { name: "Lessons", hash: "#lessons" },
    ];

    const menuList = document.createElement("ul");
    menuList.classList.add("sidebar__menu");

    menuItems.forEach((item) => {
      const menuItem = document.createElement("li");
      menuItem.classList.add("sidebar__menu-item");

      const link = document.createElement("a");
      link.href = item.hash; // hash is used for routing 
      link.textContent = item.name;

      menuItem.appendChild(link);
      menuList.appendChild(menuItem);
    });

    sidebar.appendChild(logo);
    sidebar.appendChild(menuList);

    return sidebar;
  }
}
