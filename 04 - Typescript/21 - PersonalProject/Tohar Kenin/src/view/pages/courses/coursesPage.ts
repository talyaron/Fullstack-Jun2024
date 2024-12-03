import './courses.scss'
import { courses } from '../../../models/Course';
export function coursesPage():string {

        return courses.map(course => `
            <div class="course">
                <h2 class="course__name">${course.name}</h2>
                <p class="course__info">lorem ipsum dolor sit amet, consectetur adip</p>
                <button class="course__addButton" data-course-id="${course.id}" name="${course.name}" type="button">Add Course</button>
                <button class="course__infoButton" data-course-id="${course.id}" type="button">Read More</button>
            </div>
        `).join('');
};
