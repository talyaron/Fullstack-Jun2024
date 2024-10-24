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
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.id = id;
        this.name = name;
    }
    return Course;
}());
var courses = [];
var course1 = new Course("id-1", "Linear Algebra");
var course2 = new Course("id-2", "Type Script");
var course3 = new Course("id-3", "English");
courses.push(course1, course2, course3);
var localStorageCourses = localStorage.getItem("studentCourses");
var studentCourses = localStorageCourses ? JSON.parse(localStorageCourses) : [];
var FormValidator = /** @class */ (function () {
    function FormValidator(name, email, phoneNum, password, rePassword) {
        this.name = name;
        this.email = email;
        this.phoneNum = phoneNum;
        this.password = password;
        this.rePassword = rePassword;
        this.regN = /^[a-zA-Z\s'-]+$/;
        this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.regPn = /^(?:05\d{1})\d{7}$/;
        this.regP =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
    FormValidator.prototype.isNameValid = function () {
        if (this.regN.test(this.name) == false)
            return "invalid name";
        return null;
    };
    FormValidator.prototype.isEmailValid = function () {
        if (this.regE.test(this.email) == false)
            return "invalid email : email needs @ and a .com ending";
        var emailCheck = this.isEmailFree();
        if (emailCheck) {
            return emailCheck;
        }
        return null;
    };
    FormValidator.prototype.isPhoneNumValid = function () {
        if (this.regPn.test(this.phoneNum) == false)
            return "invalid phone number : use numbers only with the right length";
        return null;
    };
    FormValidator.prototype.isPasswordValid = function () {
        if (this.regP.test(this.password) == false)
            return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
        return null;
    };
    FormValidator.prototype.isRePasswordValid = function () {
        if (this.rePassword !== this.password)
            return "invalid repeat password: required to be the same as password";
        return null;
    };
    FormValidator.prototype.isEmailFree = function () {
        var _this = this;
        var matchingMail = users.find(function (user) { return _this.email === user.email; });
        if (matchingMail) {
            return "This email is already registered.";
        }
        return null;
    };
    return FormValidator;
}());
function addClass(course) {
    var alreadyIn = loggedUser.classes.find(function (c) { return c.id == course.id; });
    if (alreadyIn) {
        console.log(alreadyIn.courseId);
        return;
    }
    loggedUser.classes.push(course);
    // studentCourses.push(userCourse);
    upDateUsers(loggedUser);
    //localStorage.setItem("studentCourses",JSON.stringify(studentCourses));
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.reload();
}
function removeClass(course) {
    var foundClass = loggedUser.classes.findIndex(function (c) { return c.id == course.id; });
    if (foundClass === -1) {
        console.log("no class was found");
        return;
    }
    loggedUser.classes.splice(foundClass, 1);
    upDateUsers(loggedUser);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.reload();
}
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
        mainElement.innerHTML = "\n        <div id=\"pageHolder\">\n        <nav id=\"navContainer\">\n        <div id=\"logo\">Pedago</div>\n        <button class=\"navBtn \" id=\"Dashboard\">Dashboard</button >\n        <button class=\"navBtn \" id=\"Profile\">Profile</button >\n        <button class=\"navBtn \" id=\"Courses\">Courses</button >\n        <button class=\"navBtn \" id=\"Zoom\">Zoom</button >\n        <button class=\"navBtn\" id=\"Forum\">Forum</button >\n        <button class=\"navBtn \" id=\"Lessons\">Lessons</button >\n        <button class=\"navBtn \" id=\"logOut\">Log Out</button >\n        </nav>\n         <div id=\"contentHolder\">\n         <div id =\"topBar\">\n         <input type=\"text\" id=\"search\" placeholder=\"search...\">\n         <div id=\"downArrow\">\u25BC</div> \n         <div id=\"pfp\"><img id=\"pfpImg\"src=\"" + checkUserImage() + "\" alt=\"profile Picture\"></div>\n         </div>  \n\n        <div class=\"container\" id=\"pageContent\">\n        </div> \n       </div></div> ";
        renderBySelected();
    }
}
var pageDashboard = "<div id=\"userDetails\">\n  <!-- Text Section -->\n  <div id=\"text\">\n    <h1>Welcome " + loggedUser.name + "</h1>\n    <h2>" + loggedUser.name + " hi</h2>\n    <h3>" + loggedUser.email + "</h3>\n  </div>\n\n  <!-- Chart Section -->\n  <div id=\"chart\">\n    <div class=\"circle\">\n      <div class=\"innerCircle\">\n        <h1>Progress</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Bottom Container -->\n<div id=\"bottomContainer\">\n  <!-- Bottom Left Page -->\n  <div id=\"bottomLeftPage\">\n    <div id=\"boxContainer\">\n      <div class=\"box\">\n        <h1>Last lesson<h1>\n        <h2 class =\"hideAble\">23/10</h2>\n      </div>\n      <div class=\"box\">\n        <h1>Grade<h1>\n        <h2 class =\"hideAble\">A*</h2>\n      </div>\n      <div class=\"box\">\n         <h1>Attendance<h1>   \n          <h2 class =\"hideAble\">23/23</h2>   \n      </div>\n    </div>\n     <div id=\"longBox\"class =\"movingText\">\n     <h1 >Happy Holidays from the team at pedago <h1>\n     </div>\n  </div>\n\n  <!-- Bottom Right Page -->\n  <div id=\"bottomRightPage\">\n    <div id =\"calender\">\n    <div class=\"calendar\">\n  <div class=\"day header\">Sun</div>\n  <div class=\"day header\">Mon</div>\n  <div class=\"day header\">Tue</div>\n  <div class=\"day header\">Wed</div>\n  <div class=\"day header\">Thu</div>\n  <div class=\"day header\">Fri</div>\n  <div class=\"day header\">Sat</div>\n\n  <!-- Empty slots before the 1st of the month -->\n  <div class=\"day empty\"></div>\n  <div class=\"day empty\"></div>\n  <div class=\"day empty\"></div>\n\n  <!-- Days of the month -->\n  <div class=\"day\">1</div>\n  <div class=\"day\">2</div>\n  <div class=\"day\">3</div>\n  <div class=\"day\">4</div>\n  <div class=\"day\">5</div>\n  <div class=\"day\">6</div>\n  <div class=\"day\">7</div>\n  <div class=\"day\">8</div>\n  <div class=\"day\">9</div>\n  <div class=\"day\">10</div>\n  <div class=\"day\">11</div>\n  <div class=\"day\">12</div>\n  <div class=\"day\">13</div>\n  <div class=\"day\">14</div>\n  <div class=\"day\">15</div>\n  <div class=\"day\">16</div>\n  <div class=\"day\">17</div>\n  <div class=\"day\">18</div>\n  <div class=\"day\">19</div>\n  <div class=\"day\">20</div>\n  <div class=\"day\">21</div>\n  <div class=\"day\">22</div>\n  <div class=\"day\">23</div>\n  <div class=\"day\">24</div>\n  <div class=\"day\">25</div>\n  <div class=\"day\">26</div>\n  <div class=\"day\">27</div>\n  <div class=\"day\">28</div>\n  <div class=\"day\">29</div>\n  <div class=\"day\">30</div>\n</div>\n     \n    </div>\n  </div>\n</div>\n";
var pageProfile = "<div id=\"leftRight\" >\n<div id =\"profileLeft\">\n<div class=\"circle\"><img id=\"imagePreview\"  src=\"" + checkUserImage() + "\" alt =\"profile picture\"></div>\n<div> <input type=\"file\" id=\"imageInput\" accept=\"image/*\" ></div>\n</div><div id =\"profileRight\">\n\n<div id=\"userForm\" on >\n<h1>name: " + loggedUser.name + "<h1/>\n<h1>email:  " + loggedUser.email + "<h1/>\n<h1> phone number:" + loggedUser.phone + "<h1/>\n<h1>password: " + hiddenPassword() + "<h1/>\n<button class=\"btn\" id=\"editButton\" onclick =\"editUser()\"><h1>edit</h1></button>\n</div>\n</div></div>";
function checkForm(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get("name");
    var email = formData.get("email");
    var phoneNum = formData.get("phoneNum");
    var password = formData.get("password");
    var RePassword = formData.get("RePassword");
    var formValidator = new FormValidator(name, email, phoneNum, password, RePassword);
    var resultN = formValidator.isNameValid();
    var resultE = formValidator.isEmailValid();
    var resultPN = formValidator.isPhoneNumValid();
    var resultP = formValidator.isPasswordValid();
    var resultRP = formValidator.isRePasswordValid();
    // Update loggedUser properties if they have values
    console.log("aaaaa " + resultN + name);
    if (resultN === null && name != loggedUser.name) {
        loggedUser.name = name;
        console.log("new name " + name + loggedUser.name);
    }
    if (resultE === null && email != loggedUser.email) {
        loggedUser.email = email;
    }
    if (resultPN === null && phoneNum != loggedUser.phone) {
        loggedUser.phone = phoneNum;
    }
    if (resultP === null && resultRP === null && password != loggedUser.password) {
        loggedUser.password = password;
    }
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    console.log("User updated successfully:", loggedUser);
    upDateUsers(loggedUser);
    reRenderUser();
}
function reRenderUser() {
    var formElement = document.getElementById("userForm");
    formElement.innerHTML = " <h1>name: " + loggedUser.name + "<h1/>\n  <h1>email:  " + loggedUser.email + "<h1/>\n  <h1> phone number:" + loggedUser.phone + "<h1/>\n  <h1>password: " + hiddenPassword() + "<h1/>\n  <button class=\"btn\" id=\"editButton\" onclick =\"editUser()\"><h1>edit</h1></button>";
}
function editUser() {
    var formElement = document.getElementById("userForm");
    formElement.innerHTML = " <Form id=\"form\" onsubmit=\"checkForm(event)\">\n  <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"" + loggedUser.name + "\">\n      <p id=\"nameDesc\"></p>\n\n      <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"" + loggedUser.email + "\">\n      <p id=\"emailDesc\"></p>\n\n      <input type=\"text\" name=\"phoneNum\" id=\"phoneNum\" placeholder=\"" + loggedUser.phone + "\">\n      <p id=\"phoneNumDesc\"></p>\n\n      <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"" + hiddenPassword() + "\">\n      <p id=\"passwordDesc\"></p>\n      \n      <input type=\"password\" name=\"RePassword\" id=\"RePassword\" placeholder=\"repeat password\">\n      <p id=\"RePasswordDesc\"></p>\n\n     <br>\n\n      <input type=\"submit\" value=\"Edit\" class=\"btn\">\n</Form>";
    console.log("eldeennene");
}
function getCourses() {
    return loggedUser.classes.map(function (course) { return course.name; }).join(', ');
}
var pageCourses = "<div id=\"userDetails\">\n  <div id=\"textFull\">\n\n    <h1> " + loggedUser.name + " Courses:</h1>\n    <h2></h2>\n    <h3>" + getCourses() + "</h3>\n  </div>\n\n</div>\n\n<div id=\"bottomContainer\">\n\n<div id=\"longBoxContainer\">\n     </div>\n</div>";
var pageZoom = "<div id =\"problem\"><img  src=\"https://img.freepik.com/free-vector/realistic-construction-sign-background_23-2148166586.jpg?t=st=1729804522~exp=1729808122~hmac=df1a43761b458663842fe4598765feb973cb954c1093dbf25ce4dd6f9139447e&w=1380\"alt =\"work in progress sign\"> </div>";
var pageForum = "<div id =\"problem\"><img  src=\"https://img.freepik.com/free-vector/realistic-construction-sign-background_23-2148166586.jpg?t=st=1729804522~exp=1729808122~hmac=df1a43761b458663842fe4598765feb973cb954c1093dbf25ce4dd6f9139447e&w=1380\"alt =\"work in progress sign\"> </div>";
;
var pageLessons = "<div id =\"problem\"><img  src=\"https://img.freepik.com/free-vector/realistic-construction-sign-background_23-2148166586.jpg?t=st=1729804522~exp=1729808122~hmac=df1a43761b458663842fe4598765feb973cb954c1093dbf25ce4dd6f9139447e&w=1380\"alt =\"work in progress sign\"> </div>";
;
function getUserCoursesHtml() {
    var courseHolderElement = document.getElementById("longBoxContainer");
    if (!courseHolderElement)
        return;
    courseHolderElement.innerHTML = "";
    courses.forEach(function (c) {
        // Check if the current course `c` is in `userCourse`
        var isUserCourse = loggedUser.classes.some(function (course) { return course.id === c.id; });
        if (isUserCourse) {
            var div = document.createElement('div');
            div.id = "longBox";
            div.classList.add("colored");
            div.innerHTML = "<h1>" + c.name + "</h1>";
            div.addEventListener('click', function () { return removeClass(c); }); // Passing the course object directly
            courseHolderElement.appendChild(div);
        }
        else {
            var div = document.createElement('div');
            div.id = "longBox";
            div.innerHTML = "<h1>" + c.name + "</h1>";
            div.addEventListener('click', function () { return addClass(c); }); // Passing the course object directly
            courseHolderElement.appendChild(div);
        }
    });
    // console.log(userCourse);
}
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
        // Update the user's properties in memory
        users[userIndex] = __assign(__assign({}, users[userIndex]), loggedUser);
        // Optionally, save the updated users array to local storage
        localStorage.setItem('users', JSON.stringify(users));
        // Log the update
        console.log("User with id " + loggedUser.id + " updated successfully.");
    }
    else {
        console.log("User with id " + loggedUser.id + " not found.");
    }
}
function showHidden() {
    var hiddenElement = document.querySelectorAll(".hideAble");
    if (!hiddenElement)
        return;
    if (loggedUser.classes.length > 0) {
        hiddenElement.forEach(function (element) {
            element.classList.remove("hideAble");
        });
    }
}
function hiddenPassword() {
    if (!loggedUser.password)
        return "";
    var asterisks = '*'.repeat(loggedUser.password.length);
    return asterisks;
}
function checkSelected() {
    var localStorageSelected = localStorage.getItem("selectedPage");
    var pageSelected = localStorageSelected ? JSON.parse(localStorageSelected) : "";
    var selectedParts = document.querySelectorAll(".navBtn");
    if (pageSelected) {
        var foundPart = Array.from(selectedParts).find(function (part) { return pageSelected == part.innerHTML; });
        if (foundPart) {
            selectedParts.forEach(function (part) {
                part.classList.remove("selected");
            });
            foundPart.classList.add("selected");
        }
        return pageSelected;
    }
    //const selectedPart = document.querySelector(".selected") as HTMLElement;
    var keyDef = "Dashboard";
    var defaultKey = Object.keys(pages).find(function (key) { return key === keyDef; });
    console.log(pages[keyDef]);
    if (defaultKey) {
        localStorage.setItem('selectedPage', JSON.stringify(defaultKey));
        var foundPart = Array.from(selectedParts).find(function (part) { return defaultKey == part.innerHTML; });
        if (foundPart) {
            foundPart.classList.add("selected");
        }
        return defaultKey;
    }
    return "Error";
}
//selected
function renderBySelected() {
    var pageContentElement = document.getElementById("pageContent");
    var selectedKey = checkSelected();
    var selectedPageContent = pages[selectedKey];
    if (selectedKey)
        pageContentElement.innerHTML = selectedPageContent;
    addPhoto();
    getUserCoursesHtml();
    showHidden();
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
    // const selectedPart = document.querySelector(".selected") as HTMLElement;
    if (target.id === "logOut") {
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('selectedPage');
        redirectIndex();
        return;
    }
    var selectedKey = checkSelected();
    if (target.id != selectedKey) {
        // selectedPart.classList.remove("selected");
        target.classList.add("selected");
        localStorage.setItem('selectedPage', JSON.stringify(target.innerHTML));
        renderBySelected();
    }
}
renderMain();
addEvents();
