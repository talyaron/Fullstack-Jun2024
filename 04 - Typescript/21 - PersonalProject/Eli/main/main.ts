const localStorageUser = localStorage.getItem("loggedUser");
const loggedUser: any = localStorageUser ? JSON.parse(localStorageUser) : "";
const mainElement = document.getElementById("content") as HTMLElement;

function redirectIndex() {
  mainElement.innerHTML = `<div class="container">
    <h1>Log in to view main</h1>
    <h3>you are redirected to the welcome screen</h3>
</div>`;
  setTimeout(function () {
    window.location.href = "../index/index.html";
  }, 3000);
}

function renderMain() {
  if (!loggedUser) {
    redirectIndex();
  } else {
    mainElement.innerHTML = `
        <div id="pageHolder">
        <nav id="navContainer">
        <div id="logo">Pedago</div>
        <button class="navBtn selected" id="Dashboard">Dashboard</button >
        <button class="navBtn " id="Profile">Profile</button >
        <button class="navBtn " id="Courses">Courses</button >
        <button class="navBtn " id="Zoom">Zoom</button >
        <button class="navBtn" id="Forum">Forum</button >
        <button class="navBtn " id="Lessons">Lessons</button >
        </nav>
         <div id="contentHolder">
         <div id ="topBar">
         <input type="text" id="search" placeholder="search...">
         <div id="downArrow">▼</div> 
         <div id="pfp"><img src="../assets/human.svg"></div>
         </div>  

        <div class="container" id="pageContent">
        </div> 
       </div></div> `;
    renderBySelected();
  }
}

const pageDashboard = `<div id="userDetails">
  <!-- Text Section -->
  <div id="text">
    <h1>Welcome ${loggedUser.name}</h1>
    <h2>${loggedUser.name} hi</h2>
    <h3>${loggedUser.email}</h3>
  </div>

  <!-- Chart Section -->
  <div id="chart">
    <div class="circle">
      <div class="innerCircle">
        <h1>Progress</h1>
      </div>
    </div>
  </div>
</div>

<!-- Bottom Container -->
<div id="bottomContainer">
  <!-- Bottom Left Page -->
  <div id="bottomLeftPage">
    <div id="boxContainer">
      <div class="box">
        <h1>Last lesson<h1>
      </div>
      <div class="box">
        <h1>Grade<h1>
      </div>
      <div class="box">
         <h1>Attendance<h1>      
      </div>
    </div>
     <div id="longBox">
     <h1>where is my money<h1>
     </div>
  </div>

  <!-- Bottom Right Page -->
  <div id="bottomRightPage">
    <div id ="calender">
      <h1>Calender</h1>
    </div>
  </div>
</div>
`;

const pageProfile = `dfddddddddddddf`;
const pageCourses = `dfdfsssssssssssssssssssdf`;
const pageZoom = `dffaaaaaaaaaaaaaaaaaad`;
const pageForum = `dfdaaaaaaaaaaaaaaaaaf`;
const pageLessons = `dfdaaaaaaaaaaaaaaf`;

const pages: { [key: string]: string } = {
  Dashboard: pageDashboard,
  Profile: pageProfile,
  Courses: pageCourses,
  Zoom: pageZoom,
  Forum: pageForum,
  Lessons: pageLessons,
};

function checkSelected(): string {
  const selectedPart = document.querySelector(".selected") as HTMLElement;
  const translate = selectedPart.innerText.trim();
  console.log(translate);
  return translate;
}
function renderBySelected() {
  const pageContentElement = document.getElementById(
    "pageContent"
  ) as HTMLElement;
  const selectedKey = checkSelected();
  const selectedPageContent = pages[selectedKey];
  if (selectedKey) pageContentElement.innerHTML = selectedPageContent;
}
function addEvents() {
  const navButtons = document.querySelectorAll(
    ".navBtn"
  ) as NodeListOf<HTMLElement>;
  if (!navButtons.length) {
    console.log("where are the buttons!");
  }
  navButtons.forEach((btn) => {
    btn.addEventListener(`click`, handleClick);
  });
}

function handleClick(event) {
  const target = event.target as HTMLElement; 
  const selectedPart = document.querySelector(".selected") as HTMLElement;

  console.log(target, target.id);
  const selectedKey = checkSelected();

  if (target.id != selectedKey) {
    selectedPart.classList.remove("selected");

    target.classList.add("selected");
    console.log("GG");
    renderBySelected();
  }
}

renderMain();
addEvents();
