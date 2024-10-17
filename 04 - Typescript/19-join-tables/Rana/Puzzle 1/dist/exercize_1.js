// Exercise 1: Students and Courses
// TODO: Implement a function getCoursesOfStudent that returns all courses a student is enrolled in
// Function signature: getCoursesOfStudent(studentId: number, courses: Course[], studentCourses: StudentCourse[]): Course[]
// Students
var students = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Davis" },
    { id: 4, name: "David Green" },
    { id: 5, name: "Eva White" },
    { id: 6, name: "Mia Jackson" },
];
// Courses
var defaultCourses = [
    { id: 1, title: "Math" },
    { id: 2, title: "Physics" },
    { id: 3, title: "Chemistry" },
    { id: 4, title: "Biology" },
    { id: 5, title: "History" },
    { id: 6, title: "English" },
];
// Student courses
var defaultStudentCourses = [
    { studentId: 1, courseId: 1 },
    { studentId: 2, courseId: 3 },
    { studentId: 3, courseId: 5 },
    { studentId: 4, courseId: 2 },
    { studentId: 5, courseId: 4 },
    { studentId: 6, courseId: 6 },
    { studentId: 3, courseId: 6 },
    { studentId: 4, courseId: 3 },
    { studentId: 2, courseId: 4 },
];
function getCoursesOfStudent(studentId, courses, studentCourses) {
    var enrolledCoursesIds = studentCourses
        .filter(function (studentCourse) { return studentCourse.studentId === studentId; })
        .map(function (studentCourse) { return studentCourse.courseId; });
    return courses.filter(function (course) { return enrolledCoursesIds.includes(course.id); });
}
students.forEach(function (student) {
    var enrolledCourses = getCoursesOfStudent(student.id, defaultCourses, defaultStudentCourses);
    console.log("Courses for " + student.name + ":", enrolledCourses.map(function (course) { return course.title; }).join(", "));
});
