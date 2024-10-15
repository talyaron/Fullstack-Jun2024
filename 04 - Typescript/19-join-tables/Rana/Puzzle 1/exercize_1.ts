// Exercise 1: Students and Courses

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

  // Students
const students: Student[] = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Davis" },
  { id: 4, name: "David Green" },
  { id: 5, name: "Eva White" },
  { id: 6, name: "Mia Jackson" },
];
// Courses
const defaultCourses: Course[] = [
  { id: 1, title: "Math" },
  { id: 2, title: "Physics" },
  { id: 3, title: "Chemistry" },
  { id: 4, title: "Biology" },
  { id: 5, title: "History" },
  { id: 6, title: "English" },

];
// Student courses
const defaultStudentCourses: StudentCourse[] = [
  { studentId: 1, courseId: 1 },
  { studentId: 2, courseId: 3 },
  { studentId: 3, courseId: 5 },
  { studentId: 4, courseId: 2 },
  { studentId: 5, courseId: 4 },
  { studentId: 6, courseId: 6 },
  { studentId: 3, courseId: 6 },
  { studentId: 4, courseId: 3 },
  { studentId: 2, courseId: 4},
];



function getCoursesOfStudent(studentId: number, courses: Course[], studentCourses: StudentCourse[]): Course[] {
  const enrolledCoursesIds = studentCourses
    .filter(studentCourse => studentCourse.studentId === studentId)
    .map(studentCourse => studentCourse.courseId);

  return courses.filter(course => enrolledCoursesIds.includes(course.id));
}


students.forEach(student => {
  const enrolledCourses = getCoursesOfStudent(student.id, defaultCourses, defaultStudentCourses);
  console.log(`Courses for ${student.name}:`, enrolledCourses.map(course => course.title).join(", "));
});
