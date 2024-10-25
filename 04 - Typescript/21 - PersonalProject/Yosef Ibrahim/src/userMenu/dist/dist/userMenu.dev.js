"use strict";

// model
var new_user2 = {
  id: "",
  name: "",
  phone: "",
  email: "",
  password: ""
};

var Course =
/** @class */
function () {
  function Course(name) {
    this.id = crypto.randomUUID();
    this.name = name;
  }

  return Course;
}();

var Subject =
/** @class */
function () {
  function Subject(name) {
    this.subjectID = crypto.randomUUID();
    this.name = name;
  }

  return Subject;
}();

var userLoggedIn = localStorage.getItem('username_login_in');

if (userLoggedIn) {
  // move all the string with all the information to new location
  var jsonString = userLoggedIn; // convert from string to normal object

  var user = JSON.parse(jsonString); /// Extract the fields from the object

  new_user2.id = user.id;
  new_user2.name = user.name;
  new_user2.phone = user.phone;
  new_user2.email = user.email;
  new_user2.password = user.password;
} else throw console.error();

var username = "";

if (userLoggedIn) {
  var user_logged_information = JSON.parse(userLoggedIn);
  console.log("yosef: " + user_logged_information);
} else throw console.error(); // controller


function renderSelectedCourse(event) {
  try {
    event.preventDefault(); // למנוע את שליחת הטופס

    var selected_1 = [];
    var checkboxes = document.querySelectorAll('input[name="courses"]:checked');
    if (!checkboxes) throw new Error();
    checkboxes.forEach(function (checkbox) {
      selected_1.push(checkbox.value);
    });
    localStorage.setItem("user selected courses ", JSON.stringify(selected_1)); // saved the selected courses object in localStorage

    var resultDiv = document.getElementById('selectedCourses');
    if (!resultDiv) throw new Error();

    if (selected_1.length > 0) {
      resultDiv.innerHTML = "<h3>Your selected course is:<h3><ul>" + selected_1.map(function (course) {
        return "<li>" + course + "</li>";
      }).join('') + "</ul>";
    } else {
      resultDiv.innerHTML = "<h3>You dont selected courses my friend</h3>";
    }

    console.log(checkboxes);
  } catch (error) {
    console.error("Error:", error);
  }
} // view


function renderZoomPage(event) {
  try {
    event.preventDefault();
    var zoomPage = document.getElementById('dashbord');
    if (!zoomPage) throw new Error('Error: Cannot find the dashboard element.');
    zoomPage.innerHTML = "<!DOCTYPE html>\n        <html>\n        <head>\n        <title>Zoom Page</title>\n        <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>\n        </head>\n        <body>\n        <img src=\"../pictures/zoom.png\" alt=\"\">\n        <h3>Zoom link:</h3>\n        <p>For security reasons, you will receive the link to the lessons half an hour \n        <br>before the start of the course the link will appear here</P>\n        ";
  } catch (error) {
    console.error("Error:", error);
  }
} // view


function renderProfilePage(event) {
  try {
    event.preventDefault();
    var profilePage = document.getElementById('dashbord');
    if (!profilePage) throw new Error('Error: Cannot find the dashboard element.');
    profilePage.innerHTML = "<!DOCTYPE html>\n        <html>\n        <head>\n        <title>Profile Page</title>\n        <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>\n        </head>\n        <body>\n        <img src=\"../pictures/profile.png\" alt=\"\">\n        <h3>Your profile:</h3>\n        <p>name: " + new_user2.name + "</p>\n        <p>phone: " + new_user2.phone + "</p>\n        <p>email: " + new_user2.email + "</p>\n        <p>password: **********</p>";
  } catch (error) {
    console.error("Error:", error);
  }
} // view -- 


document.addEventListener('DOMContentLoaded', function (event) {
  renderWelcomeUser();
  renderProfilePage(event);
}); // view

function renderCoursesPage(event) {
  try {
    event.preventDefault();
    var courses = document.getElementById('dashbord');
    if (!courses) throw new Error('Error: Cannot find the dashboard element.');
    courses.innerHTML = "Hey " + new_user2.name + "<br>";
    courses.innerHTML += "  <h2>Select the courses you want to join:</h2>\n    <form id=\"coursesForm\" onsubmit=\"renderSelectedCourse(event)\">\n        <label>\n            <input type=\"checkbox\" name=\"courses\" value=\"javascript\">JavaScript\n        </label><br>\n        <label>\n            <input type=\"checkbox\" name=\"courses\" value=\"python\">Python\n        </label><br>\n        <label>\n            <input type=\"checkbox\" name=\"courses\" value=\"html-css\">HTML \u05D5-CSS\n        </label><br>\n        <label>\n            <input type=\"checkbox\" name=\"courses\" value=\"typescript\">TypeScript\n        </label><br>\n        <label>\n            <input type=\"checkbox\" name=\"courses\" value=\"react\">React\n        </label><br><br>\n        <button type=\"submit\"\">Register</button>\n    </form>\n\n    <div id=\"selectedCourses\"></div>";
  } catch (error) {
    console.error("Error rendering courses: ", error);
  }
} //render the user that logged in with wellcome text


function renderWelcomeUser() {
  try {
    var enterUser = localStorage.getItem('enterUser');

    if (!enterUser) {
      throw new Error("No user logged in");
    }

    var welcomeText = document.getElementById('welcome');
    var fixedName = enterUser.replace(/"/g, '');
    username = fixedName;

    if (welcomeText && enterUser) {
      welcomeText.innerHTML = "Welcome " + fixedName;
    } else {
      throw new Error("Error accessing elements");
    }
  } catch (e) {
    console.error("Error rendering welcome user:", e);
  }
} // view


function renderForumPage(event) {
  try {
    event.preventDefault();
    var forumPage = document.getElementById('dashbord');
    if (!forumPage) throw new Error('Error: Cannot find the dashboard element.');
    forumPage.innerHTML = "<!DOCTYPE html>\n        <html>\n        <head>\n        <title>Forum Page</title>\n        <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>\n        </head>\n        <body>\n        <img src=\"../pictures/forum.png\" alt=\"\">\n        <h3>Welcome to our forum:</h3>  \n        <p>You can ask any question, share your thoughts, or ask for help.</p>\n        <a href=\"https://www.google.com/search?q=javascript+forum\">Visit our JavaScript forum</a>\n        </body>\n        </html>";
  } catch (error) {
    console.error("Error:", error);
  }
} // view


function renderLessonsPage(event) {
  try {
    event.preventDefault();
    var lessonsPage = document.getElementById('dashbord');
    if (!lessonsPage) throw new Error('Error: Cannot find the dashboard element.');
    lessonsPage.innerHTML = "<!DOCTYPE html>\n        <html>\n        <head>\n        <title>Lessons Page</title>\n        <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>\n        </head>\n        <body>\n        <h3>Here are our lessons:</h3>\n        <ul>\n            <li><a href=\"https://www.youtube.com/watch?v=0Z480Y6d3g8\">JavaScript Basics</a></li>\n            <li><a href=\"https://www.youtube.com/watch?v=PkZNo7 \n            <li><a href=\"https://www.youtube.com/watch?v=vT1JmhGm1PU\">HTML and CSS Basics</a></li>\n            <li><a href=\"https://www.youtube.com/watch?v=tNkJ6kfmMAk\">TypeScript Basics</a></li>\n            <li><a href=\"https://www.youtube.com/watch?v=sBws8MS-vVA\">React Basics</a></li>\n        </ul>\n        </body>\n        </html>";
  } catch (error) {
    console.error("Error:", error);
  }
}