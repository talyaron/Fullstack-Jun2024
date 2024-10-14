// Exercise 1: Students and Courses
var students = [{ id: 1, name: "yosef" }, { id: 2, name: "mohmd" }, { id: 3, name: "mosa" }];
console.log(students);
var courses = [{ id: 1, title: "Math" }, { id: 2, title: "Science" }, { id: 3, title: "English" }, { id: 4, title: "pascal" }, { id: 6, title: "hebrow" }];
console.log(courses);
var studentCourses = [
    { studentId: 1, courseId: 1 },
    { studentId: 1, courseId: 2 },
    { studentId: 2, courseId: 3 },
    { studentId: 3, courseId: 4 },
    { studentId: 4, courseId: 5 },
    { studentId: 1, courseId: 6 },
];
console.log(studentCourses);
function getCoursesOfStudent(studentId, courses, studentCourses) {
    try {
        var studentCoursesOfStudent = studentCourses.filter(function (sc) { return sc.studentId === studentId; });
        console.log(studentCoursesOfStudent);
        var studentCoursesTitles = studentCoursesOfStudent.map(function (sc) { var _a; return (_a = courses.find(function (c) { return c.id === sc.courseId; })) === null || _a === void 0 ? void 0 : _a.title; });
        console.log(studentCoursesTitles);
        return studentCoursesTitles;
    }
    catch (_a) {
        console.error("Error: Invalid student id");
        return [];
    }
}
getCoursesOfStudent(1, courses, studentCourses);
// TODO: Implement a function getProductsByCategory that returns all products in a specific category
// Function signature: getProductsByCategory(categoryId: number, products: Product[], productCategories: ProductCategory[]): Product[]
// Bonus Exercise:
// Implement a function that returns all entities from one side of a many-to-many relationship
// that are not associated with any entity from the other side.
// For example, findStudentsNotEnrolledInAnyCourse or findBooksWithoutAuthors
