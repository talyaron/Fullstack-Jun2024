const localStorageUser = localStorage.getItem("loggedUser");
const loggedUser: any = localStorageUser ? JSON.parse(localStorageUser) : "";
const mainElement = document.getElementById("content") as HTMLElement;

const localStorageDetail = localStorage.getItem("users");
const users:any[] = localStorageDetail ? JSON.parse(localStorageDetail) : [];

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
        <button class="navBtn " id="Dashboard">Dashboard</button >
        <button class="navBtn selected" id="Profile">Profile</button >
        <button class="navBtn " id="Courses">Courses</button >
        <button class="navBtn " id="Zoom">Zoom</button >
        <button class="navBtn" id="Forum">Forum</button >
        <button class="navBtn " id="Lessons">Lessons</button >
        <button class="navBtn " id="logOut">Log Out</button >
        </nav>
         <div id="contentHolder">
         <div id ="topBar">
         <input type="text" id="search" placeholder="search...">
         <div id="downArrow">▼</div> 
         <div id="pfp"><img id="pfpImg"src="${checkUserImage()}" alt="profile Picture"></div>
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

const pageProfile = `<div id="leftRight" >
<div id ="profileLeft">
<div class="circle"><img id="imagePreview"  src="${checkUserImage()}" alt ="profile picture"></div>
<div><h1> <input type="file" id="imageInput" accept="image/*" ></h1></div>
</div><div id ="profileRight">

<div id="form">
<h1>name: ${loggedUser.name}<h1/>
<h1>email:  ${loggedUser.email}<h1/>
<h1> phone number:${loggedUser.phone}<h1/>
<h1>password: ${hiddenPassword()}<h1/>
<button class="btn" id="editButton"><h1>edit</h1></button>
</div>
</div></div>`;


const pageCourses = `dfdfsssssssssssssssssssdf`;
const pageZoom = `dffaaaaaaaaaaaaaaaaaad`;
const pageForum = `dfdaaaaaaaaaaaaaaaaaf`;
const pageLessons = `dfdaaaaaaaaaaaaaaf`;
function checkUserImage():string
{
    const loggedUsere: any = localStorageUser ? JSON.parse(localStorageUser) : "";
    if(loggedUsere.img){
        return loggedUsere.img
    }

    return "../assets/human.svg";
}
const pages: { [key: string]: string } = {
  Dashboard: pageDashboard,
  Profile: pageProfile,
  Courses: pageCourses,
  Zoom: pageZoom,
  Forum: pageForum,
  Lessons: pageLessons,
};
function addPhoto()
{
    const imageInput = document.getElementById('imageInput') as HTMLInputElement;
    if(!imageInput)return;
    const imagePreview = document.getElementById('imagePreview') as HTMLImageElement;
    const imgPfp =document.getElementById("pfpImg")as HTMLImageElement;
    if (!imageInput) {
        console.error("Image input not found!");
        return;
    }
    if(loggedUser.img){
    imagePreview.src = loggedUser.img;}
    else{ imagePreview.src =`../assets/human.svg`;}

    imageInput.addEventListener('change', function(event) {
        const target = event.target as HTMLInputElement; 
        if (!target.files || target.files.length === 0) return;

        const file = target.files[0]; 
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                if (e.target && e.target.result) {
                    const imageUrl = e.target.result as string;  
                    imagePreview.src = imageUrl;  
                    imagePreview.style.display = 'block'; 
                    imgPfp.src = imageUrl;
                    
                    loggedUser.img=imageUrl;
                    localStorage.setItem(`loggedUser`,JSON.stringify(loggedUser));
                    console.log("Image updated for loggedUser:", loggedUser);
                    upDateUsers(loggedUser);
                }
            };

            reader.readAsDataURL(file);  
        }
    });
}

function upDateUsers(loggedUser:any)
{
    const userIndex = users.findIndex(user => loggedUser.id === user.id);

    if (userIndex !== -1) {
        // Update the user's properties
        users[userIndex] = { ...users[userIndex], ...loggedUser };

        // Log the update
        console.log(`User with id ${loggedUser.id} updated successfully.`);
        
        // Optionally, save the updated users array to local storage
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        console.log(`User with id ${loggedUser.id} not found.`);
    }

}
function hiddenPassword():string
{
    if(!loggedUser.password) return"";
    const asterisks = '*'.repeat(loggedUser.password.length); 
    return asterisks;
}

function checkSelected(): string {
  const selectedPart = document.querySelector(".selected") as HTMLElement;
  const translate = selectedPart.innerText.trim();
  return translate;
}
function renderBySelected() {
  const pageContentElement = document.getElementById(
    "pageContent"
  ) as HTMLElement;
  const selectedKey = checkSelected();
  const selectedPageContent = pages[selectedKey];
  if (selectedKey) pageContentElement.innerHTML = selectedPageContent;
  addPhoto();
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

  if(target.id===`logOut`)
  {
    localStorage.removeItem('loggedUser');
    redirectIndex();
    return;
  }

  const selectedKey = checkSelected();

 
  if (target.id != selectedKey) {
    selectedPart.classList.remove("selected");

    target.classList.add("selected");
    renderBySelected();
    
  }
}

renderMain();
addEvents();
