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

const courses: Course[] = [];
const students: Student[] = [];

const StudentCourses: StudentCourse[] = [];

////////////////////////////courses\\\\\\\\\\\\\\\\\\\
const courseMath: Course = {
  id: 1,
  title: "Math",
};
const courseEnglish: Course = {
  id: 2,
  title: "English",
};
const courseHistory: Course = {
  id: 3,
  title: "History",
};
const courseGeography: Course = {
  id: 4,
  title: "Geography",
};
courses.push(courseMath, courseEnglish, courseHistory, courseGeography);

//////////////////////////////////Students\\\\\\\\\\\\\\\\
const eli: Student = {
  id: 1,
  name: `Eli`,
};
const moshe: Student = {
  id: 2,
  name: `Moshe`,
};

const morgot: Student = {
  id: 3,
  name: `Morgot`,
};

const tal: Student = {
  id: 4,
  name: `Tal`,
};
students.push(eli, moshe, morgot, tal);

////////////////////////////////////////////enlist in courses\\\\\\\\\\\\\\\\\\\\\
StudentCourses.push(
  {
    studentId: 1,
    courseId: 1,
  },
  {
    studentId: 1,
    courseId: 3,
  },
  {
    studentId: 1,
    courseId: 4,
  },
  {
    studentId: 2,
    courseId: 1,
  },
  {
    studentId: 2,
    courseId: 3,
  },
  {
    studentId: 3,
    courseId: 3,
  },
  {
    studentId: 4,
    courseId: 3,
  },
  {
    studentId: 4,
    courseId: 4,
  }
);
///////////////////////////////////functions\\\\\\
checkStudentInCourses();


function checkStudentInCourses() {
    const nerds: string[] = [];
    
    students.forEach((student) => {
        const enrolledCourses = getCoursesOfStudent(student.id, StudentCourses, courses);
        
        const namesOfCourses: string[] = enrolledCourses.map(course => course.title);
        
        nerds.push(`${student.name} is enrolled in these courses: ${namesOfCourses.join(', ')}`);
    });

    renderToScreen(nerds);
}


function getCoursesOfStudent(
  studentId: number,
  StudentCourses: StudentCourse[],
  courses: Course[]
): Course[] {
  const studentCourses = StudentCourses.filter(
    (sc) => sc.studentId === studentId
  );

  const result = studentCourses.map((sc) =>
    courses.find((c) => c.id === sc.courseId)
  );

  return result.filter((course) => course !== undefined) as Course[];
}

function renderToScreen(nerds: string[]) {
    const containerElement = document.getElementById("containerElement") as HTMLElement;
    
    containerElement.innerHTML = '';

    nerds.forEach((nerdText) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = nerdText; 
        containerElement.appendChild(newElement);
    });
}
// TODO: Implement a function getCoursesOfStudent that returns all courses a student is enrolled in
// Function signature: getCoursesOfStudent(studentId: number, courses: Course[], studentCourses: StudentCourse[]): Course[]
