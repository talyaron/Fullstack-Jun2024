import { User } from "../entities/userModel"; 
import { Course, ICourse } from "../entities/courseModel"; 

// UserCourse interface
export interface IUserCourse {
  id: string;
  userId: string;
  courseId: string;
}

export class UserCourse implements IUserCourse {
  id: string;
  userId: string;
  courseId: string;

  constructor(userId: string, courseId: string) {
    this.id = crypto.randomUUID();
    this.userId = userId;
    this.courseId = courseId;
  }

  saveToLocalStorage() {
    const userCourses = UserCourse.getUserCoursesFromLocalStorage();
    userCourses.push(this);
    localStorage.setItem("userCourses", JSON.stringify(userCourses));
  }

  static getUserCoursesFromLocalStorage(): IUserCourse[] {
    return JSON.parse(localStorage.getItem("userCourses") || "[]");
  }

  // get courses by user id
  static getCoursesByUserId(userId: string): ICourse[] {
    const userCourses = UserCourse.getUserCoursesFromLocalStorage();
    const courseIds = userCourses
      .filter((userCourse) => userCourse.userId === userId)
      .map((userCourse) => userCourse.courseId);

    // return courses by course id
    return Course.getCoursesFromLocalStorage().filter((course) =>
      courseIds.includes(course.id)
    );
  }

  static initializeExampleUserCourses() {
    const users = User.getUsersFromLocalStorage();
    const courses = Course.getCoursesFromLocalStorage();

    const exampleUserCourses = [
      new UserCourse(users[0].id, courses[0].id), // Alice -> Fullstack Developer
      new UserCourse(users[1].id, courses[1].id), // Bob -> Python Developer
      new UserCourse(users[2].id, courses[0].id), // Charlie -> Fullstack Developer
      new UserCourse(users[3].id, courses[2].id), // David -> DevOps Specialist
      new UserCourse(users[4].id, courses[1].id), // Eve -> Python Developer
    ];

    exampleUserCourses.forEach((userCourse) => userCourse.saveToLocalStorage());
  }
}

UserCourse.initializeExampleUserCourses();
