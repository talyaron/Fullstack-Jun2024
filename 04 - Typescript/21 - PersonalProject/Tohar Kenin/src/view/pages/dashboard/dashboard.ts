import './dashboard.scss'
import {userDtails } from '../../components/userDetails/userDtailes';
export function dashboard(): string {
    return `
        <div class="page">
                <div class="row">
                    <div class="profile topic">
                        <h1 class="title">Profile</h1>
                        <div class="container">
                            <div class="user">
                               ${userDtails()}
                            </div>
                        </div>
                    </div>
                    <div class="progress topic">
                        <h1 class="title">Progress</h1>
                        <div class="container blance">
                           <i class="fa-solid fa-circle-notch"></i>
                        </div>
                    </div>
                </div>
                <div class="row2">
                            <div class="topic">
                            <h1 class="title">Courses</h1>
                                <div class="container">
                                    ${usersCoursesRender()}
                                </div>
                            </div>
                </div>
         </div> `
}


//render the user's courses
function usersCoursesRender(): string {

    const storedUser:any = localStorage.getItem('User');
    const userObject = JSON.parse(storedUser);
    const userCourses = userObject.courses;
    
    if (userCourses.length > 0) {
        return `
            <h3 class="userCourses">${userCourses}</h3>
        `
    }

    return `
        <h3 class="userCourses">No courses yet</h3>
    `
};
