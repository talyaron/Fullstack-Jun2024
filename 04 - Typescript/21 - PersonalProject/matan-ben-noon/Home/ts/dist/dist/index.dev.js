"use strict";

var localUser = localStorage.getItem('loggedInUser');
var currentUser = localUser ? JSON.parse(localUser) : {
  firstName: 'User',
  lastName: '',
  email: '',
  dateOfBirth: '',
  password: '',
  courses: []
};
var courses = [{
  id: 1,
  name: 'Mathematics'
}, {
  id: 2,
  name: 'English'
}, {
  id: 3,
  name: 'Hebrew'
}, {
  id: 4,
  name: 'Physics'
}, {
  id: 5,
  name: 'Computer Science'
}]; // === view ===

function createDashboard() {
  var dashboardDiv = document.createElement('div');
  dashboardDiv.classList.add('dashboard'); // header

  var header = document.createElement('header');
  header.classList.add('header');
  var searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.placeholder = 'Search';
  searchBox.classList.add('header__search');
  var rightSection = document.createElement('div');
  rightSection.classList.add('header__right');
  var welcomeMessage = document.createElement('div');
  welcomeMessage.classList.add('header__welcome');
  welcomeMessage.innerText = "Hello, " + currentUser.firstName + "!";
  var userImage = document.createElement('img');
  userImage.src = '/Home/user.png';
  userImage.alt = 'User Profile Image';
  userImage.classList.add('header__profile');
  rightSection.appendChild(userImage);
  rightSection.appendChild(welcomeMessage);
  header.appendChild(searchBox);
  header.appendChild(rightSection);
  dashboardDiv.appendChild(header); // nav

  var nav = document.createElement('nav');
  nav.classList.add('nav');
  var logo = document.createElement('img');
  logo.src = '/Main/logo.png';
  logo.alt = 'Logo';
  logo.classList.add('nav__logo');
  nav.appendChild(logo);
  var navList = document.createElement('ul');
  var navItems = ['Dashboard', 'Profile', 'Courses', 'Zoom', 'Forum', 'Lessons'];
  navItems.forEach(function (item) {
    var li = document.createElement('li');
    li.classList.add('nav__item');
    li.innerText = item;
    navList.appendChild(li);
  });
  nav.appendChild(navList);
  dashboardDiv.appendChild(nav); // user

  var userDetailsContent = document.createElement('div');
  userDetailsContent.classList.add('user');
  var userInfoDiv = document.createElement('div');
  userInfoDiv.classList.add('user__info');
  userInfoDiv.innerHTML = "<h3>User Info</h3>\n      <img class=\"user__logo\" src=\"/Home/user.png\" alt=\"user logo\">\n    <p>User Name: " + currentUser.firstName + " " + currentUser.lastName + "</p>\n    <p>Email: " + currentUser.email + "</p>\n    <p>Student at Open University</p>\n    ";
  userDetailsContent.appendChild(userInfoDiv);
  var progressDiv = document.createElement('div');
  progressDiv.classList.add('user__progress');
  progressDiv.innerHTML = "\n    <h3>Progress</h3>\n    <img class=\"user__progress-image\" src=\"/Home/progress.png\" alt=\"progress\">\n  ";
  userDetailsContent.appendChild(progressDiv);
  var messageDiv = document.createElement('div');
  messageDiv.classList.add('user__messages');
  messageDiv.innerHTML = "\n    <h3>Updates</h3>\n    <p>Update 1: New assignment posted for the Mathematics course. Due by Friday</p>\n    <p>Update 2: The mid-term exam schedule has been updated. Check your calendar for details.</p>\n    <p>Update 3: Guest lecture on 'Artificial Intelligence' will be held this Wednesday at 10 AM</p>\n    <p>Update 4: Project submission deadline extended to next Monday due to technical issues</p>\n  ";
  userDetailsContent.appendChild(messageDiv);
  dashboardDiv.appendChild(userDetailsContent); // dashboard content

  var dashboardContent = document.createElement('div');
  dashboardContent.classList.add('dashboard__content'); // courses section

  var coursesDiv = document.createElement('div');
  coursesDiv.classList.add('dashboard__courses');
  var registeredCourses = getCoursesForStudent();
  coursesDiv.innerHTML = "<h3>Your Courses</h3><ul>" + registeredCourses.map(function (course) {
    return "<li>" + course.name + "</li>";
  }).join('') + "</ul>";
  dashboardContent.appendChild(coursesDiv); // student list section

  var studentListDiv = document.createElement('div');
  studentListDiv.classList.add('dashboard__students');
  studentListDiv.innerHTML = "<h3>Student List</h3>\n    <ul class=\"dashboard__students-list dashboard__scrollable\">\n      <li class=\"dashboard__students-item\">John Doe</li>\n      <li class=\"dashboard__students-item\">Jane Doe</li>\n      <li class=\"dashboard__students-item\">Shira Cohen</li>\n      <li class=\"dashboard__students-item\">David Levi</li>\n      <li class=\"dashboard__students-item\">Avi Noy</li>\n      <li class=\"dashboard__students-item\">Michael Green</li>\n      <li class=\"dashboard__students-item\">Lior Katz</li>\n      <li class=\"dashboard__students-item\">Yossi Biton</li>\n    </ul>";
  dashboardContent.appendChild(studentListDiv); // calendar section

  var calendarDiv = document.createElement('div');
  calendarDiv.classList.add('dashboard__calendar');
  calendarDiv.innerHTML = "\n    <h3>Academic Calendar</h3>\n    <ul>\n      <li>Mid-Term Exams: 5th - 10th November</li>\n      <li>Project Submission Deadline: 20th November</li>\n      <li>Final Exams: 10th - 20th December</li>\n      <li>Winter Break: 24th December - 2nd January</li>\n    </ul>\n  ";
  dashboardContent.appendChild(calendarDiv);
  dashboardDiv.appendChild(dashboardContent);
  document.body.appendChild(dashboardDiv);
} // helper function to get courses for current student


function getCoursesForStudent() {
  return courses.filter(function (course) {
    return currentUser.courses.includes(course.id);
  });
} // === controller ===


function renderDashboard() {
  createDashboard();
}

renderDashboard();