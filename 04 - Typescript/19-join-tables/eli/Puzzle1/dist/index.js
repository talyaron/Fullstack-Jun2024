// Exercise 1: Students and Courses
var courses = [];
var students = [];
var StudentCourses = [];
////////////////////////////courses\\\\\\\\\\\\\\\\\\\
var courseMath = {
    id: 1,
    title: "Math"
};
var courseEnglish = {
    id: 2,
    title: "English"
};
var courseHistory = {
    id: 3,
    title: "History"
};
var courseGeography = {
    id: 4,
    title: "Geography"
};
courses.push(courseMath, courseEnglish, courseHistory, courseGeography);
//////////////////////////////////Students\\\\\\\\\\\\\\\\
var eli = {
    id: 1,
    name: "Eli"
};
var moshe = {
    id: 2,
    name: "Moshe"
};
var morgot = {
    id: 3,
    name: "Morgot"
};
var tal = {
    id: 4,
    name: "Tal"
};
students.push(eli, moshe, morgot, tal);
////////////////////////////////////////////enlist in courses\\\\\\\\\\\\\\\\\\\\\
StudentCourses.push({
    studentId: 1,
    courseId: 1
}, {
    studentId: 1,
    courseId: 3
}, {
    studentId: 1,
    courseId: 4
}, {
    studentId: 2,
    courseId: 1
}, {
    studentId: 2,
    courseId: 3
}, {
    studentId: 3,
    courseId: 3
}, {
    studentId: 4,
    courseId: 3
}, {
    studentId: 4,
    courseId: 4
});
///////////////////////////////////functions\\\\\\
checkStudentInCourses();
function checkStudentInCourses() {
    var nerds = [];
    students.forEach(function (student) {
        var enrolledCourses = getCoursesOfStudent(student.id, StudentCourses, courses);
        var namesOfCourses = enrolledCourses.map(function (course) { return course.title; });
        nerds.push(student.name + " is enrolled in these courses: " + namesOfCourses.join(', '));
    });
    renderToScreen(nerds);
}
function getCoursesOfStudent(studentId, StudentCourses, courses) {
    var studentCourses = StudentCourses.filter(function (sc) { return sc.studentId === studentId; });
    var result = studentCourses.map(function (sc) {
        return courses.find(function (c) { return c.id === sc.courseId; });
    });
    return result.filter(function (course) { return course !== undefined; });
}
function renderToScreen(nerds) {
    var containerElement = document.getElementById("containerElement");
    containerElement.innerHTML = '';
    nerds.forEach(function (nerdText) {
        var newElement = document.createElement("div");
        newElement.innerHTML = nerdText;
        containerElement.appendChild(newElement);
    });
}
// TODO: Implement a function getCoursesOfStudent that returns all courses a student is enrolled in
// Function signature: getCoursesOfStudent(studentId: number, courses: Course[], studentCourses: StudentCourse[]): Course[]
