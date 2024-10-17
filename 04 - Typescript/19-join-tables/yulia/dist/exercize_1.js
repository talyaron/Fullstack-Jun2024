// Exercise 1: Students and Courses
// TODO: Implement a function getCoursesOfStudent that returns all courses a student is enrolled in
// Function signature: getCoursesOfStudent(studentId: number, courses: Course[], studentCourses: StudentCourse[]): Course[]
// Bonus Exercise:
// Implement a function that returns all entities from one side of a many-to-many relationship
// that are not associated with any entity from the other side.
// For example, findStudentsNotEnrolledInAnyCourse or findBooksWithoutAuthors
// Students
var students = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Davis" },
    { id: 4, name: "David Green" },
    { id: 5, name: "Eva White" },
    { id: 6, name: "Frank Brown" },
    { id: 7, name: "Grace Miller" },
    { id: 8, name: "Helen Moore" },
    { id: 9, name: "Ivan Wilson" },
    { id: 10, name: "Jack Taylor" },
    { id: 11, name: "Kate Anderson" },
    { id: 12, name: "Leo Thomas" },
    { id: 13, name: "Mia Jackson" },
    { id: 14, name: "Nick Harris" },
    { id: 15, name: "Olivia Martin" },
    { id: 16, name: "Paul Lee" },
];
// Courses
var defaultCourses = [
    { id: 1, title: "Math" },
    { id: 2, title: "Physics" },
    { id: 3, title: "Chemistry" },
    { id: 4, title: "Biology" },
    { id: 5, title: "History" },
    { id: 6, title: "English" },
    { id: 7, title: "Computer Science" },
    { id: 8, title: "Art" },
    { id: 9, title: "Music" },
    { id: 10, title: "Physical Education" },
    { id: 11, title: "Philosophy" },
    { id: 12, title: "Geography" },
    { id: 13, title: "Economics" },
    { id: 14, title: "Law" },
    { id: 15, title: "Sociology" },
    { id: 16, title: "Psychology" },
    { id: 17, title: "Astronomy" },
    { id: 18, title: "Political Science" },
    { id: 19, title: "Statistics" },
    { id: 20, title: "Engineering" },
    { id: 21, title: "Medicine" },
    { id: 22, title: "Dentistry" },
    { id: 23, title: "Pharmacy" },
];
// Student courses
var defaultStudentCourses = [
    { studentId: 1, courseId: 1 },
    { studentId: 1, courseId: 3 },
    { studentId: 1, courseId: 7 },
    { studentId: 2, courseId: 2 },
    { studentId: 2, courseId: 4 },
    { studentId: 2, courseId: 6 },
    { studentId: 3, courseId: 5 },
    { studentId: 3, courseId: 8 },
    { studentId: 3, courseId: 12 },
    { studentId: 4, courseId: 1 },
    { studentId: 4, courseId: 7 },
    { studentId: 4, courseId: 11 },
    { studentId: 5, courseId: 10 },
    { studentId: 5, courseId: 13 },
    { studentId: 6, courseId: 9 },
    { studentId: 6, courseId: 14 },
    { studentId: 7, courseId: 15 },
    { studentId: 7, courseId: 16 },
    { studentId: 7, courseId: 19 },
    { studentId: 8, courseId: 17 },
    { studentId: 8, courseId: 18 },
    { studentId: 9, courseId: 3 },
    { studentId: 9, courseId: 6 },
    { studentId: 9, courseId: 20 },
    { studentId: 10, courseId: 4 },
    { studentId: 10, courseId: 8 },
    { studentId: 10, courseId: 11 },
];
function getCoursesOfStudent(studentId, courses, studentCourses) {
    if (courses === void 0) { courses = defaultCourses; }
    if (studentCourses === void 0) { studentCourses = defaultStudentCourses; }
    var enrolledCoursesIds = studentCourses
        .filter(function (sc) { return sc.studentId === studentId; })
        .map(function (sc) { return sc.courseId; });
    var coursesOfStudent = courses.filter(function (course) {
        return enrolledCoursesIds.includes(course.id);
    });
    return coursesOfStudent;
}
// Test cases
console.log(getCoursesOfStudent(1));
console.log(getCoursesOfStudent(2));
console.log(getCoursesOfStudent(3));
console.log(getCoursesOfStudent(4));
// Function for print courses of student
function printStudentCourses(studentId) {
    try {
        var student = students.find(function (student) { return student.id === studentId; });
        if (!student) {
            throw new Error("Student with ID " + studentId + " not found.");
        }
        var coursesOfStudent = getCoursesOfStudent(studentId);
        if (coursesOfStudent.length === 0) {
            throw new Error("Student with ID " + studentId + " is not enrolled in any courses.");
        }
        console.log(student.name + " (student ID: " + studentId + ") is enrolled in the following courses:");
        coursesOfStudent.forEach(function (course) {
            console.log("- " + course.title + " (ID: " + course.id + ")");
        });
    }
    catch (error) {
        console.error(error.message);
    }
}
// Test cases
printStudentCourses(1);
printStudentCourses(2);
printStudentCourses(11);
printStudentCourses(55);
// function to find courses without students
function findCoursesWithoutStudents(courses, studentCourses) {
    return courses.filter(function (course) {
        return !studentCourses.some(function (sc) { return sc.courseId === course.id; });
    });
}
// Test case
var coursesWithoutStudents = findCoursesWithoutStudents(defaultCourses, defaultStudentCourses);
// Print courses without students
console.log("Courses Without Students:");
coursesWithoutStudents.forEach(function (course) {
    console.log("- " + course.title + " (ID: " + course.id + ")");
});
// function to find students not enrolled in any course
function findStudentsNotEnrolledInAnyCourse(students, studentCourses) {
    return students.filter(function (student) {
        return !studentCourses.some(function (sc) { return sc.studentId === student.id; });
    });
}
// Test case
var studentsNotEnrolledInAnyCourse = findStudentsNotEnrolledInAnyCourse(students, defaultStudentCourses);
// Print students not enrolled in any course
console.log("Students Not Enrolled In Any Course:");
studentsNotEnrolledInAnyCourse.forEach(function (student) {
    console.log("- " + student.name + " (ID: " + student.id + ")");
});
