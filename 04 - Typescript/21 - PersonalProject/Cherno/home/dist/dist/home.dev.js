"use strict";

function init() {
  addCourses();
  renderHome("profile");
}

init();

function getUsers() {
  var usersString = localStorage.getItem('users');
  if (!usersString) return [];
  return JSON.parse(usersString);
}

function getCourses() {
  var coursesString = localStorage.getItem('courses');
  if (!coursesString) return [];
  return JSON.parse(coursesString);
}

function getUsersCourses() {
  var userCoursesString = localStorage.getItem('userCourses');
  if (!userCoursesString) return [];
  return JSON.parse(userCoursesString);
}

function getCoursesByUser(userId) {
  var userCourses = getUsersCourses();
  return userCourses.filter(function (uc) {
    return uc.userId === userId;
  }).map(function (uc) {
    return getCourses().find(function (c) {
      return c.id === uc.courseId;
    });
  });
}

function getUsersByCourse(courseId) {
  var userCourses = getUsersCourses();
  return userCourses.filter(function (uc) {
    return uc.courseId === courseId;
  }).map(function (uc) {
    return getUsers().find(function (u) {
      return u.id === uc.userId;
    });
  });
}

function getCurrUser() {
  try {
    var userString_1 = localStorage.getItem('userId');
    if (!userString_1) throw new Error('Current user not found');
    var user = getUsers().find(function (user) {
      return user.id === userString_1;
    });
    if (!user) throw new Error('Current user not found in the database');
    return user;
  } catch (error) {
    console.log(error);
    return getUsers()[0];
  }
} // view


function renderHome(currView) {
  try {
    var homeElement = document.querySelector('#app');
    if (!homeElement) throw new Error('Home element not found');
    homeElement.innerHTML = "\n            " + renderNav() + "\n            " + renderContent(currView) + "\n        ";
  } catch (error) {
    console.log(error);
  }
}

function renderNav() {
  return "\n        <nav>\n            <ul>\n                <li><a href=\"#\" onclick=\"renderHome('profile')\">Profile</a></li>\n                <li><a href=\"#\" onclick=\"renderHome('courses')\">Courses</a></li>\n                <li><a href=\"#\" onclick=\"renderHome('contacts')\">Contacts</a></li>\n            </ul>\n        </nav>\n    ";
}

function renderContent(view) {
  try {
    switch (view) {
      case 'profile':
        return renderProfile();

      case 'courses':
        return renderCourses();

      case 'contacts':
        return renderContacts();

      default:
        throw new Error('Invalid view');
    }
  } catch (error) {
    console.log(error);
    return 'Error rendering content';
  }
}

function renderProfile() {
  try {
    var user = getCurrUser();
    if (!user) throw new Error('Current user not found');
    return "\n            <h1>Profile</h1>\n            <p>Email: " + user.email + "</p>\n            <p>Name: " + user.name + "</p>\n            <p>Phone: " + user.phone + "</p>\n        ";
  } catch (error) {
    console.log(error);
    return 'Error rendering profile';
  }
}

function renderContacts() {
  var user = getCurrUser();
  return "\n        " + getCoursesByUser(user.id).map(function (course) {
    return "\n            <div id=\"" + course.id + "\" onclick=\"renderExpandCourse('" + course.id + "')\">\n                " + course.name + "\n            </div>";
  }).join('') + "\n    ";
}

function renderExpandCourse(courseId) {
  try {
    var course = getCourses().find(function (c) {
      return c.id === courseId;
    });
    var courseElement = document.getElementById(courseId);
    if (!courseElement) throw new Error('Course element not found');

    if (courseElement.classList.contains('selected')) {
      courseElement.classList.remove('selected');
      courseElement.innerHTML = course.name;
    } else {
      courseElement.classList.add('selected');
      courseElement.innerHTML = "\n                    " + course.name + "\n                    <table class=\"students\">\n                        <tr>\n                            <th>Name</th>\n                            <th>Email</th>\n                            <th>Phone</th>\n                        </tr>\n                        " + getUsersByCourse(course.id).map(function (user) {
        return "\n                            <tr>\n                                <td>" + user.name + "<td>\n                                <td>" + user.email + "<td>\n                                <td>" + user.phone + "<td>\n                            </tr>\n                        ";
      }).join('') + "\n                    </table>\n                ";
    }
  } catch (error) {
    console.log(error);
  }
}

function renderCourses() {
  return "\n        " + getCourses().map(function (course) {
    return "\n            <div id=\"" + course.id + "\" class=\"" + (ifUserCourse(course.id) ? "selected" : "") + " course\">\n                " + course.name + "\n                <input type=\"checkbox\" " + (ifUserCourse(course.id) ? "checked" : "") + " onchange=\"toggleUserCourse('" + course.id + "')\">\n            </div>";
  }).join('') + "\n    ";
} // controller


function addCourses() {
  var courses = [];
  var coursesString = localStorage.getItem('courses');

  if (!coursesString) {
    courses.push({
      id: crypto.randomUUID(),
      name: 'Math'
    });
    courses.push({
      id: crypto.randomUUID(),
      name: 'Science'
    });
    courses.push({
      id: crypto.randomUUID(),
      name: 'English'
    });
  } else {
    JSON.parse(coursesString).forEach(function (course) {
      return courses.push(course);
    });
  }

  localStorage.setItem('courses', JSON.stringify(courses));
}

function ifUserCourse(courseId) {
  var user = getCurrUser();
  if (!user) return false;
  var usersCourses = getUsersCourses();
  return usersCourses.some(function (uc) {
    return uc.courseId === courseId && uc.userId === user.id;
  });
}

function toggleUserCourse(courseId) {
  try {
    console.log('Toggled course', courseId);
    var user_1 = getCurrUser();
    var userCourses = getUsersCourses();
    if (!user_1) throw new Error('Current user not found');
    if (!userCourses) throw new Error('User courses not found');

    if (ifUserCourse(courseId)) {
      userCourses.splice(userCourses.findIndex(function (uc) {
        return uc.courseId === courseId && uc.userId === user_1.id;
      }), 1);
    } else {
      userCourses.push({
        userId: user_1.id,
        courseId: courseId
      });
    }

    localStorage.setItem('userCourses', JSON.stringify(userCourses));
    renderHome('courses');
  } catch (error) {
    console.log(error);
  }
}