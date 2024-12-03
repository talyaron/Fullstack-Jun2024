// === Model ===
// create a class that implements the User interface
var UserClass = /** @class */ (function () {
    function UserClass(userName, institution, idNumber) {
        this.userName = userName;
        this.institution = institution;
        this.idNumber = idNumber;
    }
    // method to update user data
    UserClass.prototype.updateUserData = function (newUserName, newInstitution, newIdNumber) {
        this.userName = newUserName;
        this.institution = newInstitution;
        this.idNumber = newIdNumber;
    };
    // get user data
    UserClass.prototype.getUserData = function () {
        return {
            userName: this.userName,
            institution: this.institution,
            idNumber: this.idNumber
        };
    };
    return UserClass;
}());
// === View ===
// class for creating a sidebar
var Sidebar = /** @class */ (function () {
    function Sidebar() {
    }
    Sidebar.prototype.createSidebar = function () {
        var sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");
        var logo = document.createElement("div");
        logo.classList.add("sidebar__logo");
        logo.textContent = "LOGO";
        var menuItems = [
            { name: "Home", href: "../home/home.html" },
            { name: "Profile", href: "#profile" },
            { name: "Courses", href: "#courses" },
            { name: "Zoom", href: "#zoom" },
            { name: "Forum", href: "#forum" },
            { name: "Lessons", href: "#lessons" },
        ];
        var menuList = document.createElement("ul");
        menuList.classList.add("sidebar__menu");
        menuItems.forEach(function (item) {
            var menuItem = document.createElement("li");
            menuItem.classList.add("sidebar__menu-item");
            var link = document.createElement("a");
            link.href = item.href;
            link.textContent = item.name;
            if (item.name === "Home") {
                link.addEventListener("click", function (event) {
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
    };
    return Sidebar;
}());
// class for creating a topbar
var Topbar = /** @class */ (function () {
    function Topbar() {
    }
    Topbar.prototype.createTopbar = function () {
        var topbar = document.createElement("div");
        topbar.classList.add("topbar");
        // logo
        var logo = document.createElement("div");
        logo.classList.add("topbar__logo");
        logo.textContent = "LOGO";
        // search 
        var searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "🔍 Search";
        searchInput.classList.add("topbar__search");
        // icon 
        var profileIcon = document.createElement("div");
        profileIcon.classList.add("topbar__profile-icon");
        // append elements to topbar
        topbar.appendChild(logo);
        topbar.appendChild(searchInput);
        topbar.appendChild(profileIcon);
        return topbar;
    };
    return Topbar;
}());
/// class for creating a profile section
var ProfileSection = /** @class */ (function () {
    function ProfileSection() {
    }
    ProfileSection.prototype.createProfile = function (user) {
        var profileContainer = document.createElement("div");
        profileContainer.classList.add("profile-section");
        var greeting = document.createElement("h1");
        greeting.classList.add("profile-section__greeting");
        greeting.textContent = "Welcome, " + user.userName + "!";
        var contentContainer = document.createElement("div");
        contentContainer.classList.add("profile-section__content");
        var profileImage = document.createElement("img");
        profileImage.classList.add("profile-section__image");
        profileImage.src = "https://via.placeholder.com/150";
        var infoContainer = document.createElement("div");
        infoContainer.classList.add("profile-section__info");
        var userName = document.createElement("p");
        userName.textContent = "User name: " + user.userName;
        userName.classList.add("profile-section__info-item");
        var institutionName = document.createElement("p");
        institutionName.textContent = "The academic institution name: " + user.institution;
        institutionName.classList.add("profile-section__info-item");
        var idNumber = document.createElement("p");
        idNumber.textContent = "ID number: " + user.idNumber;
        idNumber.classList.add("profile-section__info-item");
        infoContainer.appendChild(userName);
        infoContainer.appendChild(institutionName);
        infoContainer.appendChild(idNumber);
        contentContainer.appendChild(profileImage);
        contentContainer.appendChild(infoContainer);
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("profile-section__edit-button");
        profileContainer.appendChild(greeting);
        profileContainer.appendChild(contentContainer);
        profileContainer.appendChild(editButton);
        return profileContainer;
    };
    return ProfileSection;
}());
// === Controller ===
var PageController = /** @class */ (function () {
    function PageController(user, sidebar, profileSection, topbar) {
        this.user = user;
        this.sidebar = sidebar;
        this.profileSection = profileSection;
        this.topbar = topbar;
    }
    // Инициализация страницы
    PageController.prototype.initPage = function () {
        // Добавляем верхний сайтбар
        var topbarElement = this.topbar.createTopbar();
        document.body.appendChild(topbarElement);
        // Добавляем боковую панель
        var sidebarElement = this.sidebar.createSidebar();
        document.body.appendChild(sidebarElement);
        // Рендерим секцию профиля
        this.renderProfileSection();
    };
    // Метод для рендера секции профиля
    PageController.prototype.renderProfileSection = function () {
        var _this = this;
        var existingProfile = document.querySelector(".profile-section");
        if (existingProfile) {
            existingProfile.remove(); // Удаляем старую секцию перед рендером новой
        }
        var profileElement = this.profileSection.createProfile(this.user.getUserData());
        document.body.appendChild(profileElement);
        // Добавляем функциональность для кнопки Edit
        var editButton = profileElement.querySelector(".profile-section__edit-button");
        if (editButton) {
            editButton.addEventListener("click", function () { return _this.openEditForm(profileElement); });
        }
    };
    // Метод для открытия формы редактирования под профилем
    PageController.prototype.openEditForm = function (profileElement) {
        var _this = this;
        var editForm = document.createElement("div");
        editForm.classList.add("edit-form");
        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "New Name";
        nameInput.value = this.user.userName;
        var institutionInput = document.createElement("input");
        institutionInput.type = "text";
        institutionInput.placeholder = "New Institution";
        institutionInput.value = this.user.institution;
        var idNumberInput = document.createElement("input");
        idNumberInput.type = "text";
        idNumberInput.placeholder = "New ID Number";
        idNumberInput.value = this.user.idNumber;
        var saveButton = document.createElement("button");
        saveButton.textContent = "Save Changes";
        saveButton.addEventListener("click", function () {
            // Обновляем данные пользователя через метод модели
            _this.user.updateUserData(nameInput.value, institutionInput.value, idNumberInput.value);
            // Сохраняем измененные данные в Local Storage
            localStorage.setItem("userData", JSON.stringify({
                userName: nameInput.value,
                institution: institutionInput.value,
                idNumber: idNumberInput.value
            }));
            // Убираем форму редактирования
            editForm.remove();
            // Перерендер профиля с обновлённой информацией
            _this.renderProfileSection();
        });
        // Добавляем элементы на страницу сразу под профилем
        profileElement.appendChild(editForm);
        editForm.appendChild(nameInput);
        editForm.appendChild(institutionInput);
        editForm.appendChild(idNumberInput);
        editForm.appendChild(saveButton);
    };
    return PageController;
}());
// === Entry Point ===
document.addEventListener("DOMContentLoaded", function () {
    // Загружаем данные пользователя из Local Storage, если они есть
    var savedUserData = localStorage.getItem("userData");
    var user;
    if (savedUserData) {
        var parsedUserData = JSON.parse(savedUserData);
        user = new UserClass(parsedUserData.userName, parsedUserData.institution, parsedUserData.idNumber);
    }
    else {
        user = new UserClass("Guest", "Example University", "123456789");
    }
    var sidebar = new Sidebar();
    var profileSection = new ProfileSection();
    var topbar = new Topbar();
    var pageController = new PageController(user, sidebar, profileSection, topbar);
    pageController.initPage();
});
