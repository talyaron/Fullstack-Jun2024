var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var localStorageUser = localStorage.getItem("loggedUser");
var loggedUser = localStorageUser ? JSON.parse(localStorageUser) : "";
var mainElement = document.getElementById("content");
var localStorageDetail = localStorage.getItem("users");
var users = localStorageDetail ? JSON.parse(localStorageDetail) : [];
function redirectIndex() {
    mainElement.innerHTML = "<div class=\"container\">\n    <h1>Log in to view main</h1>\n    <h3>you are redirected to the welcome screen</h3>\n</div>";
    setTimeout(function () {
        window.location.href = "../index/index.html";
    }, 3000);
}
function renderMain() {
    if (!loggedUser) {
        redirectIndex();
    }
    else {
        mainElement.innerHTML = "\n        <div id=\"pageHolder\">\n        <nav id=\"navContainer\">\n        <div id=\"logo\">Pedago</div>\n        <button class=\"navBtn \" id=\"Dashboard\">Dashboard</button >\n        <button class=\"navBtn selected\" id=\"Profile\">Profile</button >\n        <button class=\"navBtn \" id=\"Courses\">Courses</button >\n        <button class=\"navBtn \" id=\"Zoom\">Zoom</button >\n        <button class=\"navBtn\" id=\"Forum\">Forum</button >\n        <button class=\"navBtn \" id=\"Lessons\">Lessons</button >\n        <button class=\"navBtn \" id=\"logOut\">Log Out</button >\n        </nav>\n         <div id=\"contentHolder\">\n         <div id =\"topBar\">\n         <input type=\"text\" id=\"search\" placeholder=\"search...\">\n         <div id=\"downArrow\">\u25BC</div> \n         <div id=\"pfp\"><img id=\"pfpImg\"src=\"" + checkUserImage() + "\" alt=\"profile Picture\"></div>\n         </div>  \n\n        <div class=\"container\" id=\"pageContent\">\n        </div> \n       </div></div> ";
        renderBySelected();
    }
}
var pageDashboard = "<div id=\"userDetails\">\n  <!-- Text Section -->\n  <div id=\"text\">\n    <h1>Welcome " + loggedUser.name + "</h1>\n    <h2>" + loggedUser.name + " hi</h2>\n    <h3>" + loggedUser.email + "</h3>\n  </div>\n\n  <!-- Chart Section -->\n  <div id=\"chart\">\n    <div class=\"circle\">\n      <div class=\"innerCircle\">\n        <h1>Progress</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Bottom Container -->\n<div id=\"bottomContainer\">\n  <!-- Bottom Left Page -->\n  <div id=\"bottomLeftPage\">\n    <div id=\"boxContainer\">\n      <div class=\"box\">\n        <h1>Last lesson<h1>\n      </div>\n      <div class=\"box\">\n        <h1>Grade<h1>\n      </div>\n      <div class=\"box\">\n         <h1>Attendance<h1>      \n      </div>\n    </div>\n     <div id=\"longBox\">\n     <h1>where is my money<h1>\n     </div>\n  </div>\n\n  <!-- Bottom Right Page -->\n  <div id=\"bottomRightPage\">\n    <div id =\"calender\">\n      <h1>Calender</h1>\n    </div>\n  </div>\n</div>\n";
var pageProfile = "<div id=\"leftRight\" >\n<div id =\"profileLeft\">\n<div class=\"circle\"><img id=\"imagePreview\"  src=\"" + checkUserImage() + "\" alt =\"profile picture\"></div>\n<div><h1> <input type=\"file\" id=\"imageInput\" accept=\"image/*\" ></h1></div>\n</div><div id =\"profileRight\">\n\n<div id=\"form\">\n<h1>name: " + loggedUser.name + "<h1/>\n<h1>email:  " + loggedUser.email + "<h1/>\n<h1> phone number:" + loggedUser.phone + "<h1/>\n<h1>password: " + hiddenPassword() + "<h1/>\n<button class=\"btn\" id=\"editButton\"><h1>edit</h1></button>\n</div>\n</div></div>";
var pageCourses = "dfdfsssssssssssssssssssdf";
var pageZoom = "dffaaaaaaaaaaaaaaaaaad";
var pageForum = "dfdaaaaaaaaaaaaaaaaaf";
var pageLessons = "dfdaaaaaaaaaaaaaaf";
function checkUserImage() {
    var loggedUsere = localStorageUser ? JSON.parse(localStorageUser) : "";
    if (loggedUsere.img) {
        return loggedUsere.img;
    }
    return "../assets/human.svg";
}
var pages = {
    Dashboard: pageDashboard,
    Profile: pageProfile,
    Courses: pageCourses,
    Zoom: pageZoom,
    Forum: pageForum,
    Lessons: pageLessons
};
function addPhoto() {
    var imageInput = document.getElementById('imageInput');
    if (!imageInput)
        return;
    var imagePreview = document.getElementById('imagePreview');
    var imgPfp = document.getElementById("pfpImg");
    if (!imageInput) {
        console.error("Image input not found!");
        return;
    }
    if (loggedUser.img) {
        imagePreview.src = loggedUser.img;
    }
    else {
        imagePreview.src = "../assets/human.svg";
    }
    imageInput.addEventListener('change', function (event) {
        var target = event.target;
        if (!target.files || target.files.length === 0)
            return;
        var file = target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && e.target.result) {
                    var imageUrl = e.target.result;
                    imagePreview.src = imageUrl;
                    imagePreview.style.display = 'block';
                    imgPfp.src = imageUrl;
                    loggedUser.img = imageUrl;
                    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
                    console.log("Image updated for loggedUser:", loggedUser);
                    upDateUsers(loggedUser);
                }
            };
            reader.readAsDataURL(file);
        }
    });
}
function upDateUsers(loggedUser) {
    var userIndex = users.findIndex(function (user) { return loggedUser.id === user.id; });
    if (userIndex !== -1) {
        // Update the user's properties
        users[userIndex] = __assign(__assign({}, users[userIndex]), loggedUser);
        // Log the update
        console.log("User with id " + loggedUser.id + " updated successfully.");
        // Optionally, save the updated users array to local storage
        localStorage.setItem('users', JSON.stringify(users));
    }
    else {
        console.log("User with id " + loggedUser.id + " not found.");
    }
}
function hiddenPassword() {
    if (!loggedUser.password)
        return "";
    var asterisks = '*'.repeat(loggedUser.password.length);
    return asterisks;
}
function checkSelected() {
    var selectedPart = document.querySelector(".selected");
    var translate = selectedPart.innerText.trim();
    return translate;
}
function renderBySelected() {
    var pageContentElement = document.getElementById("pageContent");
    var selectedKey = checkSelected();
    var selectedPageContent = pages[selectedKey];
    if (selectedKey)
        pageContentElement.innerHTML = selectedPageContent;
    addPhoto();
}
function addEvents() {
    var navButtons = document.querySelectorAll(".navBtn");
    if (!navButtons.length) {
        console.log("where are the buttons!");
    }
    navButtons.forEach(function (btn) {
        btn.addEventListener("click", handleClick);
    });
}
function handleClick(event) {
    var target = event.target;
    var selectedPart = document.querySelector(".selected");
    if (target.id === "logOut") {
        localStorage.removeItem('loggedUser');
        redirectIndex();
        return;
    }
    var selectedKey = checkSelected();
    if (target.id != selectedKey) {
        selectedPart.classList.remove("selected");
        target.classList.add("selected");
        renderBySelected();
    }
}
renderMain();
addEvents();
