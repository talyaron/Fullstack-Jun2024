import "./ProfileSection.scss";
import { IUser } from "../../../Models/entities/userModel";
import { UserCourse } from "../../../Models/joinTables/usersCoursesModel";

export class ProfileSection {
  createProfile(user: IUser): HTMLElement {
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("profile-section");

    const greeting = document.createElement("h1");
    greeting.classList.add("profile-section__greeting");
    greeting.textContent = `Welcome, ${user.name}!`;

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("profile-section__content");

    const profileImage = document.createElement("img");
    profileImage.classList.add("profile-section__image");
    profileImage.src = "https://via.placeholder.com/150";

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("profile-section__info");

    const userName = document.createElement("p");
    userName.textContent = `User name: ${user.name}`;
    userName.classList.add("profile-section__info-item");

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;
    email.classList.add("profile-section__info-item");

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${user.phone || "N/A"}`;
    phone.classList.add("profile-section__info-item");

    // get courses by user id
    const userCourses = UserCourse.getCoursesByUserId(user.id);
    const courseList = document.createElement("ul");
    courseList.classList.add("profile-section__courses");

    userCourses.forEach((course) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Course: ${course.name}`;
      courseList.appendChild(listItem);
    });

    infoContainer.appendChild(userName);
    infoContainer.appendChild(email);
    infoContainer.appendChild(phone);
    contentContainer.appendChild(profileImage);
    contentContainer.appendChild(infoContainer);
    contentContainer.appendChild(courseList);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit Profile";
    editButton.classList.add("profile-section__edit-button");

    profileContainer.appendChild(greeting);
    profileContainer.appendChild(contentContainer);
    profileContainer.appendChild(editButton);

    return profileContainer;
  }
}
