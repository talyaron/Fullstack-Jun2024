
const localStorageUser = localStorage.getItem("loggedUser");
const loggedUser: any = localStorageUser ? JSON.parse(localStorageUser) : "";
const mainElement = document.getElementById("content") as HTMLElement;

const localStorageDetail = localStorage.getItem("users");
const users:any[] = localStorageDetail ? JSON.parse(localStorageDetail) : [];

class Course{
  id:string;
  name:string;
  lastLesson:string;
  constructor(id:string,name:string)
  {
    this.id=id;
    this.name=name;
  }
}
interface StudentCourse {
  studentId: string;
  courseId: string;
}

const courses: Course[]=[]
const course1= new Course(`id-1`,"Linear Algebra");
const course2= new Course(`id-2`,"Type Script");
const course3= new Course(`id-3`,"English");

courses.push(course1,course2,course3);

const localStorageCourses = localStorage.getItem("studentCourses");
const studentCourses: StudentCourse[] = localStorageCourses ? JSON.parse(localStorageCourses) : [];


class FormValidator {
  name: string;
  email: string;
  phoneNum: string;
  password: string;
  rePassword: string;
  regN: RegExp;
  regE: RegExp;
  regPn: RegExp;
  regP: RegExp;

  constructor(
    name: string,
    email: string,
    phoneNum: string,
    password: string,
    rePassword: string
  ) {
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
  isNameValid() {
    if (this.regN.test(this.name) == false) return "invalid name";
    return null;
  }
  isEmailValid() {
    if (this.regE.test(this.email) == false)
      return "invalid email : email needs @ and a .com ending";

    const emailCheck = this.isEmailFree();
    if (emailCheck) {
      return emailCheck;
    }

    return null;
  }
  isPhoneNumValid() {
    if (this.regPn.test(this.phoneNum) == false)
      return "invalid phone number : use numbers only with the right length";
    return null;
  }
  isPasswordValid() {
    if (this.regP.test(this.password) == false)
      return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
    return null;
  }
  isRePasswordValid() {
    if (this.rePassword !== this.password)
      return "invalid repeat password: required to be the same as password";
    return null;
  }
  isEmailFree() {
    const matchingMail = users.find((user) => this.email === user.email);
    if (matchingMail) {
      return `This email is already registered.`;
    }
    return null;
  }
}



function addClass(course:Course)
{
  const alreadyIn=studentCourses.find(c=>c.courseId==course.id)

  if(alreadyIn)
   {  console.log(alreadyIn.courseId);
     return;}
  const userCourse: StudentCourse = {
    studentId: loggedUser.id, // Use loggedUser.id for studentId
    courseId: course.id, // Use course.id for courseId
  };
  
  studentCourses.push(userCourse);
  localStorage.setItem("studentCourses",JSON.stringify(studentCourses));
  console.log(studentCourses);
  window.location.reload();
 
}

function removeClass(course:Course)
{
  const foundClass=studentCourses.findIndex(c=>c.courseId==course.id)

  if(foundClass===-1)
   {  
    console.log("no class was found")
     return;
    }
 
  
  studentCourses.splice(foundClass,1);
  localStorage.setItem("studentCourses",JSON.stringify(studentCourses));
  console.log(studentCourses);
  window.location.reload();
 
}

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
        <button class="navBtn " id="Profile">Profile</button >
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
        <h2 class ="hideAble">23/10</h2>
      </div>
      <div class="box">
        <h1>Grade<h1>
        <h2 class ="hideAble">A*</h2>
      </div>
      <div class="box">
         <h1>Attendance<h1>   
          <h2 class ="hideAble">23/23</h2>   
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
<div> <input type="file" id="imageInput" accept="image/*" ></div>
</div><div id ="profileRight">

<div id="userForm" on >
<h1>name: ${loggedUser.name}<h1/>
<h1>email:  ${loggedUser.email}<h1/>
<h1> phone number:${loggedUser.phone}<h1/>
<h1>password: ${hiddenPassword()}<h1/>
<button class="btn" id="editButton" onclick ="editUser()"><h1>edit</h1></button>
</div>
</div></div>`;

function checkForm(event: Event) {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phoneNum = formData.get("phoneNum") as string;
  const password = formData.get("password") as string;
  const RePassword = formData.get("RePassword") as string;
  

  const formValidator = new FormValidator(
    name,
    email,
    phoneNum,
    password,
    RePassword
  );
  const resultN = formValidator.isNameValid();
  const resultE = formValidator.isEmailValid();
  const resultPN = formValidator.isPhoneNumValid();
  const resultP = formValidator.isPasswordValid();
  const resultRP = formValidator.isRePasswordValid();



    // Update loggedUser properties if they have values
    console.log("aaaaa "+ resultN + name)
    if (resultN ===null && name!=loggedUser.name) {
      loggedUser.name = name;
      console.log("new name "+ name + loggedUser.name)
    }
    if (resultE ===null && email!=loggedUser.email) {
      loggedUser.email = email;
    }
    if (resultPN ===null&& phoneNum!=loggedUser.phone) {
      loggedUser.phone = phoneNum;
    }
    if (resultP ===null&& resultRP===null&& password!=loggedUser.password) {
      loggedUser.password = password; 
    }

    localStorage.setItem('loggedUser', JSON.stringify(loggedUser)); 

    console.log("User updated successfully:", loggedUser);
 upDateUsers(loggedUser);
 reRenderUser();
}


function reRenderUser()
{
  const formElement = document.getElementById("userForm") as HTMLElement;
   formElement.innerHTML=` <h1>name: ${loggedUser.name}<h1/>
  <h1>email:  ${loggedUser.email}<h1/>
  <h1> phone number:${loggedUser.phone}<h1/>
  <h1>password: ${hiddenPassword()}<h1/>
  <button class="btn" id="editButton" onclick ="editUser()"><h1>edit</h1></button>`
}

function editUser()
{
  const formElement = document.getElementById("userForm") as HTMLElement;

  formElement.innerHTML=` <Form id="form" onsubmit="checkForm(event)">
  <input type="text" name="name" id="name" placeholder="${loggedUser.name}">
      <p id="nameDesc"></p>

      <input type="text" name="email" id="email" placeholder="${loggedUser.email}">
      <p id="emailDesc"></p>

      <input type="text" name="phoneNum" id="phoneNum" placeholder="${loggedUser.phone}">
      <p id="phoneNumDesc"></p>

      <input type="password" name="password" id="password" placeholder="${hiddenPassword()}">
      <p id="passwordDesc"></p>
      
      <input type="password" name="RePassword" id="RePassword" placeholder="repeat password">
      <p id="RePasswordDesc"></p>

     <br>

      <input type="submit" value="Edit" class="btn">
</Form>`;
  console.log("eldeennene");
}
function getCourses ()
{
  const userCourseIds = studentCourses
    .filter(course => course.studentId === loggedUser.id) // Filter courses for the logged user
    .map(course => course.courseId);
    return  courses
    .filter(course => userCourseIds.includes(course.id)) // Filter courses by IDs
    .map(course => course.name) // Get course names
    .join(', ');
    
  }

const pageCourses = `<div id="userDetails">
  <div id="textFull">

    <h1> ${loggedUser.name} Courses:</h1>
    <h2></h2>
    <h3>${getCourses ()}</h3>
  </div>

</div>

<div id="bottomContainer">

<div id="longBoxContainer">
     </div>
</div>`;

const pageZoom = `dffaaaaaaaaaaaaaaaaaad`;
const pageForum = `dfdaaaaaaaaaaaaaaaaaf`;
const pageLessons = `dfdaaaaaaaaaaaaaaf`;

function getUserCoursesHtml()
{
  const courseHolderElement = document.getElementById("longBoxContainer")as HTMLElement;
  if (!courseHolderElement) return;

  const userCourseIds = studentCourses
  .filter(course => course.studentId === loggedUser.id) 
  .map(course => course.courseId);
  const userCourse  =courses
  .filter(course => userCourseIds.includes(course.id)) 
  courseHolderElement.innerHTML="";
  courses.forEach(c => {
    // Check if the current course `c` is in `userCourse`
    const isUserCourse = userCourse.some(course => course.id === c.id);
  
    if (isUserCourse) {
      const div = document.createElement('div');
      div.id = "longBox";
      div.classList.add("colored");
      div.innerHTML = `<h1>${c.name}</h1>`;
      div.addEventListener('click', () => removeClass(c)); // Passing the course object directly
      courseHolderElement.appendChild(div);
      
    }else{
      const div = document.createElement('div');
      div.id = "longBox";
      div.innerHTML = `<h1>${c.name}</h1>`;
      div.addEventListener('click', () => addClass(c)); // Passing the course object directly
      courseHolderElement.appendChild(div);
      }}
  )
 // console.log(userCourse);
  
}

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
      // Update the user's properties in memory
      users[userIndex] = { ...users[userIndex], ...loggedUser };
  
      // Optionally, save the updated users array to local storage
      localStorage.setItem('users', JSON.stringify(users));
  
      // Log the update
      console.log(`User with id ${loggedUser.id} updated successfully.`);
  } else {
      console.log(`User with id ${loggedUser.id} not found.`);
  }
}
function showHidden()
{ const hiddenElement = document.querySelectorAll(".hideAble") as NodeListOf<HTMLElement>;
  if(!hiddenElement)return;
  if(studentCourses.length>0)
  {
    hiddenElement.forEach(element=>{
      element.classList.remove("hideAble");
    })
  }
}
function hiddenPassword():string
{
    if(!loggedUser.password) return"";
    const asterisks = '*'.repeat(loggedUser.password.length); 
    return asterisks;
}

function checkSelected(): string {
  const localStorageSelected = localStorage.getItem("selectedPage");
  const pageSelected:any = localStorageSelected ? JSON.parse(localStorageSelected) : "";
  const selectedParts = document.querySelectorAll(".navBtn") as NodeListOf<HTMLElement>;

  if(pageSelected)
  {
  const foundPart = Array.from(selectedParts).find(part => pageSelected == part.innerHTML);
  if(foundPart)
  {
    selectedParts.forEach(part => {
      part.classList.remove("selected");
    });
    foundPart.classList.add(`selected`)
  }

    return pageSelected;

  }
  //const selectedPart = document.querySelector(".selected") as HTMLElement;

 
  const keyDef = "Dashboard";
  const defaultKey = Object.keys(pages).find(key => key === keyDef);console.log(pages[keyDef] );
 
  if(defaultKey)
    {
      localStorage.setItem('selectedPage', JSON.stringify(defaultKey)); 
      const foundPart = Array.from(selectedParts).find(part => defaultKey == part.innerHTML);
  if(foundPart)
  {
    foundPart.classList.add(`selected`)

  }
      return defaultKey;
      
    }
  return "Error";
}
//selected
function renderBySelected() {
  
  const pageContentElement = document.getElementById(
    "pageContent"
  ) as HTMLElement;
  const selectedKey = checkSelected();
  const selectedPageContent = pages[selectedKey];
  if (selectedKey) pageContentElement.innerHTML = selectedPageContent;
  addPhoto();
 getUserCoursesHtml();
 showHidden();
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
 // const selectedPart = document.querySelector(".selected") as HTMLElement;

  if(target.id===`logOut`)
  {
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('selectedPage');
    redirectIndex();
    return;
  }

  const selectedKey = checkSelected();

 
  if (target.id != selectedKey) {
   // selectedPart.classList.remove("selected");

    target.classList.add("selected");
    localStorage.setItem('selectedPage', JSON.stringify(target.innerHTML)); 

    renderBySelected();
    
  }
}

renderMain();
addEvents();
