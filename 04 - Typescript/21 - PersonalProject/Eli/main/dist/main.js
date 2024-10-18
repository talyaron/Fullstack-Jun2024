var localStorageUser = localStorage.getItem("loggedUser");
var loggedUser = localStorageUser ? JSON.parse(localStorageUser) : "";
var mainElement = document.getElementById("content");
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
        mainElement.innerHTML = "\n        <div id=\"pageHolder\">\n        <nav id=\"navContainer\">\n        <div id=\"logo\">Pedago</div>\n        <button class=\"navBtn selected\" id=\"Dashboard\">Dashboard</button >\n        <button class=\"navBtn \" id=\"Profile\">Profile</button >\n        <button class=\"navBtn \" id=\"Courses\">Courses</button >\n        <button class=\"navBtn \" id=\"Zoom\">Zoom</button >\n        <button class=\"navBtn\" id=\"Forum\">Forum</button >\n        <button class=\"navBtn \" id=\"Lessons\">Lessons</button >\n        </nav>\n         <div id=\"contentHolder\">\n         <div id =\"topBar\">\n         <input type=\"text\" id=\"search\" placeholder=\"search...\">\n         <div id=\"downArrow\">\u25BC</div> \n         <div id=\"pfp\"><img src=\"../assets/human.svg\"></div>\n         </div>  \n\n        <div class=\"container\" id=\"pageContent\">\n        </div> \n       </div></div> ";
        renderBySelected();
    }
}
var pageDashboard = "<div id=\"userDetails\">\n  <!-- Text Section -->\n  <div id=\"text\">\n    <h1>Welcome " + loggedUser.name + "</h1>\n    <h2>" + loggedUser.name + " hi</h2>\n    <h3>" + loggedUser.email + "</h3>\n  </div>\n\n  <!-- Chart Section -->\n  <div id=\"chart\">\n    <div class=\"circle\">\n      <div class=\"innerCircle\">\n        <h1>Progress</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Bottom Container -->\n<div id=\"bottomContainer\">\n  <!-- Bottom Left Page -->\n  <div id=\"bottomLeftPage\">\n    <div id=\"boxContainer\">\n      <div class=\"box\">\n        <h1>Last lesson<h1>\n      </div>\n      <div class=\"box\">\n        <h1>Grade<h1>\n      </div>\n      <div class=\"box\">\n         <h1>Attendance<h1>      \n      </div>\n    </div>\n     <div id=\"longBox\">\n     <h1>where is my money<h1>\n     </div>\n  </div>\n\n  <!-- Bottom Right Page -->\n  <div id=\"bottomRightPage\">\n    <div id =\"calender\">\n      <h1>Calender</h1>\n    </div>\n  </div>\n</div>\n";
var pageProfile = "dfddddddddddddf";
var pageCourses = "dfdfsssssssssssssssssssdf";
var pageZoom = "dffaaaaaaaaaaaaaaaaaad";
var pageForum = "dfdaaaaaaaaaaaaaaaaaf";
var pageLessons = "dfdaaaaaaaaaaaaaaf";
var pages = {
    Dashboard: pageDashboard,
    Profile: pageProfile,
    Courses: pageCourses,
    Zoom: pageZoom,
    Forum: pageForum,
    Lessons: pageLessons
};
function checkSelected() {
    var selectedPart = document.querySelector(".selected");
    var translate = selectedPart.innerText.trim();
    console.log(translate);
    return translate;
}
function renderBySelected() {
    var pageContentElement = document.getElementById("pageContent");
    var selectedKey = checkSelected();
    var selectedPageContent = pages[selectedKey];
    if (selectedKey)
        pageContentElement.innerHTML = selectedPageContent;
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
    console.log(target, target.id);
    var selectedKey = checkSelected();
    if (target.id != selectedKey) {
        selectedPart.classList.remove("selected");
        target.classList.add("selected");
        console.log("GG");
        renderBySelected();
    }
}
renderMain();
addEvents();
