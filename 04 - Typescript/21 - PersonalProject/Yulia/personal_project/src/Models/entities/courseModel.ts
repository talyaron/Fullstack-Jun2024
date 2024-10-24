// Course interface
export interface ICourse {
  id: string;
  name: string;
}

// Course class implementing the interface
export class Course implements ICourse {
  id: string;
  name: string;

  constructor(name: string) {
    this.id = crypto.randomUUID(); // Generating unique ID
    this.name = name;
  }

  // Save course to Local Storage
  saveToLocalStorage() {
    const courses = Course.getCoursesFromLocalStorage();
    courses.push(this);
    localStorage.setItem("courses", JSON.stringify(courses));
  }

  // Get all courses from Local Storage
  static getCoursesFromLocalStorage(): ICourse[] {
    return JSON.parse(localStorage.getItem("courses") || "[]");
  }

  // Initialize example courses and save them to Local Storage
  static initializeExampleCourses() {
    const exampleCourses = [
      new Course("Fullstack Developer"),
      new Course("Python Developer"),
      new Course("DevOps Specialist"),
    ];

    exampleCourses.forEach((course) => course.saveToLocalStorage());
  }
}

// Call this function once to add example courses
Course.initializeExampleCourses();
