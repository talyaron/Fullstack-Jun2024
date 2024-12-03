// Exercise 1: Students and Courses
const students:Student[] = [{id: 1,name: "yosef"}, {id: 2,name: "mohmd"}, {id: 3,name: "mosa"}];
console.log(students);

const courses: Course[] = [{id: 1,title: "Math"}, {id: 2,title: "Science"}, {id: 3,title: "English"}, {id: 4,title: "pascal"}, {id: 6,title:"hebrow"}];
console.log(courses);

const studentCourses: StudentCourse[] = [
  {studentId: 1, courseId: 1},
  {studentId: 1, courseId: 2},
  {studentId: 2, courseId: 3},
  {studentId: 3, courseId: 4},
  {studentId: 4, courseId: 5},
  {studentId: 1, courseId: 6},
];

console.log(studentCourses);

function getCoursesOfStudent(studentId: number,courses: Course[],studentCourses: StudentCourse[]):Course[]
{
  try{
    const studentCoursesOfStudent = studentCourses.filter(sc => sc.studentId === studentId);
    console.log(studentCoursesOfStudent);
  
    const studentCoursesTitles = studentCoursesOfStudent.map(sc => courses.find(c => c.id === sc.courseId)?.title)
    console.log(studentCoursesTitles);
    return studentCoursesTitles;
    }
  catch{
    console.error("Error: Invalid student id");
    return [];
  }
}

getCoursesOfStudent(1,courses,studentCourses);


interface Student {
  id: number;
  name: string;
}

interface Course {
  id: number;
  title: string;
}

interface StudentCourse {
  studentId: number;
  courseId: number;
}

// TODO: Implement a function getCoursesOfStudent that returns all courses a student is enrolled in
// Function signature: getCoursesOfStudent(studentId: number, courses: Course[], studentCourses: StudentCourse[]): Course[]

// Exercise 2: Books and Authors

interface Book {
  id: number;
  title: string;
  publishYear: number;
}

interface Author {
  id: number;
  name: string;
  birthYear: number;
}

interface BookAuthor {
  bookId: number;
  authorId: number;
}

// TODO: Implement a function getBooksOfAuthor that returns all books written by a specific author
// Function signature: getBooksOfAuthor(authorId: number, books: Book[], bookAuthors: BookAuthor[]): Book[]

// Exercise 3: Movies and Actors

interface Movie {
  id: number;
  title: string;
  releaseYear: number;
}

interface Actor {
  id: number;
  name: string;
  nationality: string;
}

interface MovieActor {
  movieId: number;
  actorId: number;
  character: string;
}

// TODO: Implement the following functions:
// 1. getMoviesOfActor(actorId: number, movies: Movie[], movieActors: MovieActor[]): Movie[]
// 2. getActorsInMovie(movieId: number, actors: Actor[], movieActors: MovieActor[]): Actor[]
// 3. getMoviesByYear(year: number, movies: Movie[]): Movie[]

// Exercise 4: Employees and Projects

interface Employee {
  id: number;
  name: string;
  department: string;
}

interface Project {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
}

interface EmployeeProject {
  employeeId: number;
  projectId: number;
  role: string;
}

// TODO: Implement a function getEmployeesOnProject that returns all employees working on a specific project
// Function signature: getEmployeesOnProject(projectId: number, employees: Employee[], employeeProjects: EmployeeProject[]): Employee[]

// Exercise 5: Products and Categories

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Category {
  id: number;
  name: string;
}

interface ProductCategory {
  productId: number;
  categoryId: number;
}

// TODO: Implement a function getProductsByCategory that returns all products in a specific category
// Function signature: getProductsByCategory(categoryId: number, products: Product[], productCategories: ProductCategory[]): Product[]

// Bonus Exercise:
// Implement a function that returns all entities from one side of a many-to-many relationship
// that are not associated with any entity from the other side.
// For example, findStudentsNotEnrolledInAnyCourse or findBooksWithoutAuthors
