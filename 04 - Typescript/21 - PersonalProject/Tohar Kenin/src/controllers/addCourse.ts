import { User } from '../models/users';
export function handleAddCourse(): void {
    const addButtons = document.querySelectorAll('.course__addButton');

    addButtons.forEach(button => {
        button.addEventListener('click', (event: Event) => {
            const target = event.currentTarget as HTMLButtonElement;
            const courseId = target.getAttribute('data-course-id');
            console.log(`Add course button clicked for course ID: ${courseId}`);
            // Add logic to handle adding the course
        });
    });
}