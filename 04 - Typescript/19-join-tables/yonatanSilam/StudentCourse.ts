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
const students: Student[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eva" },
];
const courses: Course[] = [
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
const studentCourses: StudentCourse[] = [];

function signToCourse(student: Student, course: Course) {
    const newSign: StudentCourse = {studentId:student.id,courseId:course.id};
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

function getCoursesOfStudent(studentId: number, courses: Course[], studentCourses:StudentCourse[]): Course[]{
    const allStudentC =studentCourses.filter(s => s.studentId == studentId);
    const allcId =allStudentC.map(sc => sc.courseId);
    const allC=allcId.map(n=>courseIsSign(n,courses))
    console.log(allC);
    return allC;

}
function courseIsSign(courseId:number,courses: Course[]):Course{
        const course=courses.find(c => c.id===courseId)
        if(course == undefined)
            throw new Error ('not find courses')
        return course;
    
}
getCoursesOfStudent(2,courses,studentCourses);

function studentIsSign(studentId:number,students: Student[]):Student{
    const course=students.find(c => c.id===studentId)
    if(course == undefined)
        throw new Error ('not find s')
    return course;

}
function getStudentOfCourses(courseId: number, students: Student[], studentCourses:StudentCourse[]): Student[]{
    const allStudentC =studentCourses.filter(s => s.courseId == courseId);
    const allcId =allStudentC.map(sc => sc.studentId);
    const allC=allcId.map(n=>studentIsSign(n,students))
    console.log(allC);
    return allC;

}
getStudentOfCourses(1,students,studentCourses);