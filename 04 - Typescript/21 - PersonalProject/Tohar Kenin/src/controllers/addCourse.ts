import { User } from '../models/users';
export function handleAddCourse(): void {
    const addButtons = document.querySelectorAll('.course__addButton');

    const storedUser:any = localStorage.getItem('User');
    const userObject = JSON.parse(storedUser);
    const currentUser = new User(userObject.userName, userObject.email, 
        userObject.password, userObject.phoneNumber, userObject.id, userObject.courses);
    

    //Join table - adds course to a student
    addButtons.forEach(button => {
        button.addEventListener('click', (event: Event) => {
            const target = event.currentTarget as HTMLButtonElement;
            const courseId = target.getAttribute('data-course-id');
            const courseName:any = target.getAttribute('name');
            
            alert(`Course ${courseName} successfully added`);
            //adds the course to the user
            currentUser.courses.push(courseName);
            //adds the course to the user in localStorage
            localStorage.setItem('User', JSON.stringify(currentUser));
        });
    });
};
