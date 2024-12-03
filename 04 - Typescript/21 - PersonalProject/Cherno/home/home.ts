function init()
{
    addCourses();
    renderHome("profile");
}
init();


// model

interface User
{
    email: string;
    id: string;
    name: string;
    phone: string;
    password: string;
}

interface Course
{
    id: string;
    name: string;
}

interface userCourse
{
    userId: string;
    courseId: string;
}

function getUsers(): User[]
{
    const usersString = localStorage.getItem('users');
    if(!usersString) return [];
    return JSON.parse(usersString);
}

function getCourses(): Course[]
{
    const coursesString = localStorage.getItem('courses');
    if(!coursesString) return [];
    return JSON.parse(coursesString);
}

function getUsersCourses(): userCourse[]
{
    const userCoursesString = localStorage.getItem('userCourses');
    if(!userCoursesString) return [];
    return JSON.parse(userCoursesString);
}

function getCoursesByUser(userId: string): Course[]
{
    const userCourses = getUsersCourses();
    return userCourses.filter(uc => uc.userId === userId).map(uc => getCourses().find(c => c.id === uc.courseId)!);
}

function getUsersByCourse(courseId: string): User[]
{
    const userCourses = getUsersCourses();
    return userCourses.filter(uc => uc.courseId === courseId).map(uc => getUsers().find(u => u.id === uc.userId)!);
}

function getCurrUser(): User
{
    try
    {
        const userString = localStorage.getItem('userId');
        if(!userString) throw new Error('Current user not found');
        const user = getUsers().find(user => user.id === userString);
        if (!user) throw new Error('Current user not found in the database');
        return user;
    }
    catch (error)
    {
        console.log(error);
        return getUsers()[0];
    }
}


// view

function renderHome(currView: string)
{
    try
    {
        const homeElement = document.querySelector<HTMLDivElement>('#app');
        if(!homeElement) throw new Error('Home element not found');
        homeElement.innerHTML = `
            ${renderNav()}
            ${renderContent(currView)}
        `;
    }
    catch (error)
    {
        console.log(error);
    }
}

function renderNav(): string
{
    return `
        <nav>
            <ul>
                <li><a href="#" onclick="renderHome('profile')">Profile</a></li>
                <li><a href="#" onclick="renderHome('courses')">Courses</a></li>
                <li><a href="#" onclick="renderHome('contacts')">Contacts</a></li>
            </ul>
        </nav>
    `;
}

function renderContent(view: string): string
{
    try
    {
        switch(view)
        {
            case 'profile':
                return renderProfile();
            case 'courses':
                return renderCourses();
            case 'contacts':
                return renderContacts();
            default:
                throw new Error('Invalid view');
        }
    }
    catch (error)
    {
        console.log(error);
        return 'Error rendering content';
    }
}

function renderProfile(): string
{
    try
    {
        const user = getCurrUser();
        if(!user) throw new Error('Current user not found');

        return `
            <h1>Profile</h1>
            <p>Email: ${user.email}</p>
            <p>Name: ${user.name}</p>
            <p>Phone: ${user.phone}</p>
        `;
    }
    catch (error)
    { 
        console.log(error);
        return 'Error rendering profile';
    }
}

function renderContacts(): string
{
    const user = getCurrUser();
    return `
        ${getCoursesByUser(user.id).map(course => `
            <div id="${course.id}" onclick="renderExpandCourse('${course.id}')">
                ${course.name}
            </div>`).join('')}
    `;
    
}

function renderExpandCourse(courseId: string)
{
    try
    {
        const course = getCourses().find(c => c.id === courseId)!;
        const courseElement = document.getElementById(courseId);

        if(!courseElement) throw new Error('Course element not found');

        if (courseElement.classList.contains('selected'))
        {
            courseElement.classList.remove('selected');
            courseElement.innerHTML = course.name;
        }
        else
        {
            courseElement.classList.add('selected');
            courseElement.innerHTML = `
                    ${course.name}
                    <table class="students">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        ${getUsersByCourse(course.id).map(user => `
                            <tr>
                                <td>${user.name}<td>
                                <td>${user.email}<td>
                                <td>${user.phone}<td>
                            </tr>
                        `).join('')}
                    </table>
                `;
        }
    }
    catch (error)
    {
        console.log(error);
    }

}

function renderCourses(): string
{
    return `
        ${getCourses().map(course => `
            <div id="${course.id}" class="${ifUserCourse(course.id) ? "selected" : ""} course">
                ${course.name}
                <input type="checkbox" ${ifUserCourse(course.id)? "checked" : ""} onchange="toggleUserCourse('${course.id}')">
            </div>`).join('')}
    `;
}

// controller

function addCourses()
{
    const courses: Course[] = [];
    const coursesString = localStorage.getItem('courses');
    if(!coursesString)
    {
        courses.push({id: crypto.randomUUID(), name: 'Math'});
        courses.push({id: crypto.randomUUID(), name: 'Science'});
        courses.push({id: crypto.randomUUID(), name: 'English'});
    }
    else
    {
        JSON.parse(coursesString).forEach(course => courses.push(course));
    }
    localStorage.setItem('courses', JSON.stringify(courses));
}

function ifUserCourse(courseId: string): boolean
{
    const user = getCurrUser();
    if(!user) return false;
    const usersCourses = getUsersCourses();
    return usersCourses.some(uc => uc.courseId === courseId && uc.userId === user.id);
}

function toggleUserCourse(courseId: string)
{
    try
    {
        console.log('Toggled course', courseId);
        const user = getCurrUser();
        const userCourses = getUsersCourses();

        if(!user) throw new Error('Current user not found');
        if(!userCourses) throw new Error('User courses not found');

        if(ifUserCourse(courseId))
        {
            userCourses.splice(userCourses.findIndex(uc => uc.courseId === courseId && uc.userId === user.id), 1);
        }
        else
        {
            userCourses.push({userId: user.id, courseId: courseId});
        }

        localStorage.setItem('userCourses', JSON.stringify(userCourses));
        renderHome('courses');
    }
    catch (error)
    {
        console.log(error);
    }
}