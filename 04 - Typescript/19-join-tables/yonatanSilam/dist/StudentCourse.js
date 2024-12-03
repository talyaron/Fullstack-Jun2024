var students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" },
];
var courses = [
    { id: 1, title: "Mathematics" },
    { id: 2, title: "Physics" },
    { id: 3, title: "Chemistry" },
    { id: 4, title: "Biology" },
    { id: 5, title: "History" },
    { id: 6, title: "Geography" },
    { id: 7, title: "English Literature" },
    { id: 8, title: "Computer Science" },
    { id: 9, title: "Economics" },
    { id: 10, title: "Philosophy" },
];
var studentCourses = [];
function signToCourse(student, course) {
    var newSign = { studentId: student.id, courseId: course.id };
    studentCourses.push(newSign);
}
// Manually assigning each student to specific courses
// Alice to Mathematics, Physics, Chemistry
signToCourse(students[0], courses[0]); // Alice -> Mathematics
signToCourse(students[0], courses[1]); // Alice -> Physics
signToCourse(students[0], courses[2]); // Alice -> Chemistry
// Bob to Biology, History
signToCourse(students[1], courses[3]); // Bob -> Biology
signToCourse(students[1], courses[4]); // Bob -> History
// Charlie to Geography, English Literature, Computer Science, Economics
signToCourse(students[2], courses[5]); // Charlie -> Geography
signToCourse(students[2], courses[6]); // Charlie -> English Literature
signToCourse(students[2], courses[7]); // Charlie -> Computer Science
signToCourse(students[2], courses[8]); // Charlie -> Economics
// David to Philosophy, History, Physics
signToCourse(students[3], courses[9]); // David -> Philosophy
signToCourse(students[3], courses[4]); // David -> History
signToCourse(students[3], courses[1]); // David -> Physics
// Eva to Chemistry, Biology, Mathematics, Economics, Geography
signToCourse(students[4], courses[2]); // Eva -> Chemistry
signToCourse(students[4], courses[3]); // Eva -> Biology
signToCourse(students[4], courses[0]); // Eva -> Mathematics
signToCourse(students[4], courses[8]); // Eva -> Economics
signToCourse(students[4], courses[5]); // Eva -> Geography
function getCoursesOfStudent(studentId, courses, studentCourses) {
    var allStudentC = studentCourses.filter(function (s) { return s.studentId == studentId; });
    var allcId = allStudentC.map(function (sc) { return sc.courseId; });
    var allC = allcId.map(function (n) { return courseIsSign(n, courses); });
    console.log(allC);
    return allC;
}
function courseIsSign(courseId, courses) {
    var course = courses.find(function (c) { return c.id === courseId; });
    if (course == undefined)
        throw new Error('not find courses');
    return course;
}
getCoursesOfStudent(2, courses, studentCourses);
function studentIsSign(studentId, students) {
    var course = students.find(function (c) { return c.id === studentId; });
    if (course == undefined)
        throw new Error('not find s');
    return course;
}
function getStudentOfCourses(courseId, students, studentCourses) {
    var allStudentC = studentCourses.filter(function (s) { return s.courseId == courseId; });
    var allcId = allStudentC.map(function (sc) { return sc.studentId; });
    var allC = allcId.map(function (n) { return studentIsSign(n, students); });
    console.log(allC);
    return allC;
}
getStudentOfCourses(1, students, studentCourses);
