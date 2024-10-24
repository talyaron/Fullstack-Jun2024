// === Model ===

interface User {
  userName: string;
  institution: string;
  idNumber: string;
}
// create a class that implements the User interface
class UserClass implements User {
  userName: string;
  institution: string;
  idNumber: string;

  constructor(userName: string, institution: string, idNumber: string) {
    this.userName = userName;
    this.institution = institution;
    this.idNumber = idNumber;
  }

  // method to update user data
  updateUserData(
    newUserName: string,
    newInstitution: string,
    newIdNumber: string
  ): void {
    this.userName = newUserName;
    this.institution = newInstitution;
    this.idNumber = newIdNumber;
  }

  // get user data
  getUserData(): User {
    return {
      userName: this.userName,
      institution: this.institution,
      idNumber: this.idNumber,
    };
  }
}

// === View ===
// class for creating a sidebar
class Sidebar {
  createSidebar(): HTMLElement {
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const logo = document.createElement("div");
    logo.classList.add("sidebar__logo");
    logo.textContent = "LOGO";

    const menuItems = [
      { name: "Home", href: "../home/home.html" },
      { name: "Profile", href: "#profile" },
      { name: "Courses", href: "#courses" },
      { name: "Zoom", href: "#zoom" },
      { name: "Forum", href: "#forum" },
      { name: "Lessons", href: "#lessons" },
    ];

    const menuList = document.createElement("ul");
    menuList.classList.add("sidebar__menu");

    menuItems.forEach((item) => {
      const menuItem = document.createElement("li");
      menuItem.classList.add("sidebar__menu-item");

      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.name;

      if (item.name === "Home") {
        link.addEventListener("click", (event) => {
          event.preventDefault(); 
          window.location.href = "../home/home.html"; 
        });
      }

      menuItem.appendChild(link);
      menuList.appendChild(menuItem);
    });

    sidebar.appendChild(logo);
    sidebar.appendChild(menuList);

    return sidebar;
  }
}
// class for creating a topbar
class Topbar {
  createTopbar(): HTMLElement {
    const topbar = document.createElement("div");
    topbar.classList.add("topbar");

    // logo
    const logo = document.createElement("div");
    logo.classList.add("topbar__logo");
    logo.textContent = "LOGO";

    // search 
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "🔍 Search";
    searchInput.classList.add("topbar__search");

    // icon 
    const profileIcon = document.createElement("div");
    profileIcon.classList.add("topbar__profile-icon");

    // append elements to topbar
    topbar.appendChild(logo);
    topbar.appendChild(searchInput);
    topbar.appendChild(profileIcon);

    return topbar;
  }
}


/// class for creating a profile section
class ProfileSection {
  createProfile(user: User): HTMLElement {
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("profile-section");
      
    const greeting = document.createElement("h1");
    greeting.classList.add("profile-section__greeting");
    greeting.textContent = `Welcome, ${user.userName}!`;

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("profile-section__content");

    const profileImage = document.createElement("img");
    profileImage.classList.add("profile-section__image");
    profileImage.src = "https://via.placeholder.com/150";

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("profile-section__info");

    const userName = document.createElement("p");
    userName.textContent = `User name: ${user.userName}`;
    userName.classList.add("profile-section__info-item");

    const institutionName = document.createElement("p");
    institutionName.textContent = `The academic institution name: ${user.institution}`;
    institutionName.classList.add("profile-section__info-item");

    const idNumber = document.createElement("p");
    idNumber.textContent = `ID number: ${user.idNumber}`;
    idNumber.classList.add("profile-section__info-item");

    infoContainer.appendChild(userName);
    infoContainer.appendChild(institutionName);
    infoContainer.appendChild(idNumber);

    contentContainer.appendChild(profileImage);
    contentContainer.appendChild(infoContainer);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("profile-section__edit-button");

    profileContainer.appendChild(greeting);
    profileContainer.appendChild(contentContainer);
    profileContainer.appendChild(editButton);

    return profileContainer;
  }
}
// === Controller ===
class PageController {
  private user: UserClass;
  private sidebar: Sidebar;
  private profileSection: ProfileSection;
  private topbar: Topbar;

  constructor(
    user: UserClass,
    sidebar: Sidebar,
    profileSection: ProfileSection,
    topbar: Topbar
  ) {
    this.user = user;
    this.sidebar = sidebar;
    this.profileSection = profileSection;
    this.topbar = topbar;
  }

  // Инициализация страницы
  initPage(): void {
    // Добавляем верхний сайтбар
    const topbarElement = this.topbar.createTopbar();
    document.body.appendChild(topbarElement);

    // Добавляем боковую панель
    const sidebarElement = this.sidebar.createSidebar();
    document.body.appendChild(sidebarElement);

    // Рендерим секцию профиля
    this.renderProfileSection();
  }

  // Метод для рендера секции профиля
  private renderProfileSection(): void {
    const existingProfile = document.querySelector(".profile-section");
    if (existingProfile) {
      existingProfile.remove(); // Удаляем старую секцию перед рендером новой
    }

    const profileElement = this.profileSection.createProfile(
      this.user.getUserData()
    );
    document.body.appendChild(profileElement);

    // Добавляем функциональность для кнопки Edit
    const editButton = profileElement.querySelector(
      ".profile-section__edit-button"
    ) as HTMLButtonElement;

    if (editButton) {
      editButton.addEventListener("click", () => this.openEditForm(profileElement));
    }
  }

  // Метод для открытия формы редактирования под профилем
  private openEditForm(profileElement: HTMLElement): void {
    const editForm = document.createElement("div");
    editForm.classList.add("edit-form");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "New Name";
    nameInput.value = this.user.userName;

    const institutionInput = document.createElement("input");
    institutionInput.type = "text";
    institutionInput.placeholder = "New Institution";
    institutionInput.value = this.user.institution;

    const idNumberInput = document.createElement("input");
    idNumberInput.type = "text";
    idNumberInput.placeholder = "New ID Number";
    idNumberInput.value = this.user.idNumber;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Changes";

    saveButton.addEventListener("click", () => {
      // Обновляем данные пользователя через метод модели
      this.user.updateUserData(
        nameInput.value,
        institutionInput.value,
        idNumberInput.value
      );

      // Сохраняем измененные данные в Local Storage
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userName: nameInput.value,
          institution: institutionInput.value,
          idNumber: idNumberInput.value
        })
      );

      // Убираем форму редактирования
      editForm.remove();

      // Перерендер профиля с обновлённой информацией
      this.renderProfileSection();
    });

    // Добавляем элементы на страницу сразу под профилем
    profileElement.appendChild(editForm);
    editForm.appendChild(nameInput);
    editForm.appendChild(institutionInput);
    editForm.appendChild(idNumberInput);
    editForm.appendChild(saveButton);
  }
}

// === Entry Point ===
document.addEventListener("DOMContentLoaded", () => {
  // Загружаем данные пользователя из Local Storage, если они есть
  const savedUserData = localStorage.getItem("userData");
  let user;

  if (savedUserData) {
    const parsedUserData = JSON.parse(savedUserData);
    user = new UserClass(
      parsedUserData.userName,
      parsedUserData.institution,
      parsedUserData.idNumber
    );
  } else {
    user = new UserClass("Guest", "Example University", "123456789");
  }

  const sidebar = new Sidebar();
  const profileSection = new ProfileSection();
  const topbar = new Topbar();

  const pageController = new PageController(
    user,
    sidebar,
    profileSection,
    topbar
  );
  pageController.initPage();
});