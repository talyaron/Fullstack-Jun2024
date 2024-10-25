// model

interface User2{
    id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
}

const new_user2: User2 = {
    id: "",
    name: "",
    phone: "",
    email: "",
    password: "",
}

class Course {
    id: string;
    name: string;

    constructor(name: string) {
        this.id = crypto.randomUUID();
        this.name = name;
    }
}

class Subject {
    subjectID: string;
    name: string;
    
    constructor( name: string) {
        this.subjectID = crypto.randomUUID();
        this.name = name;
    }
}
const userLoggedIn = localStorage.getItem('username_login_in');
if (userLoggedIn)  
    {
        // move all the string with all the information to new location
        const jsonString = userLoggedIn;
        // convert from string to normal object
        const user = JSON.parse(jsonString);

        /// Extract the fields from the object
        new_user2.id = user.id;
        new_user2.name = user.name;
        new_user2.phone = user.phone;
        new_user2.email = user.email;
        new_user2.password = user.password

   } 
   else
   throw console.error();

let username = "";

if (userLoggedIn)  
    {
const user_logged_information = JSON.parse(userLoggedIn);
console.log("yosef: " + user_logged_information);
   } 
   else
   throw console.error();
   

// controller
function renderSelectedCourse(event: Event)
{
    try{
        event.preventDefault(); // למנוע את שליחת הטופס
        const selected: string[]=[];
        const checkboxes = document.querySelectorAll('input[name="courses"]:checked') as NodeListOf<HTMLInputElement>;
        if (!checkboxes) throw new Error
        
        checkboxes.forEach((checkbox) => {
            selected.push(checkbox.value)});
        
        localStorage.setItem(`user selected courses `, JSON.stringify(selected));  // saved the selected courses object in localStorage
        const resultDiv = document.getElementById('selectedCourses');
        if (!resultDiv) throw new Error

        if (selected.length > 0) {
            resultDiv.innerHTML = `<h3>Your selected course is:<h3><ul>${selected.map(course => `<li>${course}</li>`).join('')}</ul>`;
        } else {
            resultDiv.innerHTML = "<h3>You dont selected courses my friend</h3>";
        }
        console.log(checkboxes);
    }
    catch(error){
        console.error("Error:", error);
    }
}
 // view
function renderZoomPage(event: Event){
    try{
        event.preventDefault();
        const zoomPage = document.getElementById('dashbord') as HTMLElement;
        if (!zoomPage) throw new Error('Error: Cannot find the dashboard element.')


        zoomPage.innerHTML = `<!DOCTYPE html>
        <html>
        <head>
        <title>Zoom Page</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </head>
        <body>
        <img src="../pictures/zoom.png" alt="">
        <h3>Zoom link:</h3>
        <p>For security reasons, you will receive the link to the lessons half an hour 
        <br>before the start of the course the link will appear here</P>
        `
}
    catch(error){
        console.error("Error:", error);
    }
}
 // view
function renderProfilePage(event){
    try{
        event.preventDefault();
        const profilePage = document.getElementById('dashbord') as HTMLElement;
        if (!profilePage) throw new Error('Error: Cannot find the dashboard element.')
        profilePage.innerHTML = `<!DOCTYPE html>
        <html>
        <head>
        <title>Profile Page</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </head>
        <body>
        <img src="../pictures/profile.png" alt="">
        <h3>Your profile:</h3>
        <p>name: ${new_user2.name}</p>
        <p>phone: ${new_user2.phone}</p>
        <p>email: ${new_user2.email}</p>
        <p>password: **********</p>`
    }
    catch (error) {
        console.error("Error:", error);
    }
}

// view -- 
document.addEventListener('DOMContentLoaded', (event) => {   // הפונקציה עולה עם הקובץ ביחד
    renderWelcomeUser();
    renderProfilePage(event);
});

// view
function renderCoursesPage(event: Event) {  // render courses
    try{
        
    event.preventDefault();
    const courses = document.getElementById('dashbord')
    if (!courses) throw new Error('Error: Cannot find the dashboard element.')
        
    courses.innerHTML = `Hey ${new_user2.name}<br>`;
    courses.innerHTML += `  <h2>Select the courses you want to join:</h2>
    <form id="coursesForm" onsubmit="renderSelectedCourse(event)">
        <label>
            <input type="checkbox" name="courses" value="javascript">JavaScript
        </label><br>
        <label>
            <input type="checkbox" name="courses" value="python">Python
        </label><br>
        <label>
            <input type="checkbox" name="courses" value="html-css">HTML ו-CSS
        </label><br>
        <label>
            <input type="checkbox" name="courses" value="typescript">TypeScript
        </label><br>
        <label>
            <input type="checkbox" name="courses" value="react">React
        </label><br><br>
        <button type="submit"">Register</button>
    </form>

    <div id="selectedCourses"></div>`;
}catch
    (error){
        console.error("Error rendering courses: ", error);
    }

}

//render the user that logged in with wellcome text
function renderWelcomeUser(){
    try{
             const enterUser = localStorage.getItem('enterUser');
             if(!enterUser){
                 throw new Error("No user logged in");
             }
             const welcomeText = document.getElementById('welcome');
             const fixedName = enterUser.replace(/"/g, '');
             username = fixedName;
             if(welcomeText && enterUser){
                 welcomeText.innerHTML = `Welcome ${fixedName}`;
             }
             else{
                              throw new Error("Error accessing elements");
                          }
             }
             

        catch(e){
            console.error("Error rendering welcome user:", e);
        }
    }
// view
    function renderForumPage(event){
        try{
        event.preventDefault();
        const forumPage = document.getElementById('dashbord') as HTMLElement;
        if (!forumPage) throw new Error('Error: Cannot find the dashboard element.')
             forumPage.innerHTML = `<!DOCTYPE html>
        <html>
        <head>
        <title>Forum Page</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </head>
        <body>
        <img src="../pictures/forum.png" alt="">
        <h3>Welcome to our forum:</h3>  
        <p>You can ask any question, share your thoughts, or ask for help.</p>
        <a href="https://www.google.com/search?q=javascript+forum">Visit our JavaScript forum</a>
        </body>
        </html>`;
}
        catch(error){
        console.error("Error:", error);
        }
    }
 // view
    function renderLessonsPage(event: Event){
        try{
        event.preventDefault();
        const lessonsPage = document.getElementById('dashbord') as HTMLElement;
        if (!lessonsPage) throw new Error('Error: Cannot find the dashboard element.')
             lessonsPage.innerHTML = `<!DOCTYPE html>
        <html>
        <head>
        <title>Lessons Page</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </head>
        <body>
        <h3>Here are our lessons:</h3>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=0Z480Y6d3g8">JavaScript Basics</a></li>
            <li><a href="https://www.youtube.com/watch?v=PkZNo7 
            <li><a href="https://www.youtube.com/watch?v=vT1JmhGm1PU">HTML and CSS Basics</a></li>
            <li><a href="https://www.youtube.com/watch?v=tNkJ6kfmMAk">TypeScript Basics</a></li>
            <li><a href="https://www.youtube.com/watch?v=sBws8MS-vVA">React Basics</a></li>
        </ul>
        </body>
        </html>`;
}
        catch(error){
        console.error("Error:", error);
        }
    }
