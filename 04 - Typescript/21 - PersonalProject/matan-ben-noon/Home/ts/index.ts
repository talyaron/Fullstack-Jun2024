// === model ===
interface User {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  password: string;
  courses: number[];
}

const localUser = localStorage.getItem('loggedInUser');
const currentUser: User = localUser ? JSON.parse(localUser) : {
  firstName: 'User',
  lastName: '',
  email: '',
  dateOfBirth: '',
  password: '',
  courses: []
};

const courses = [
  { id: 1, name: 'Mathematics' },
  { id: 2, name: 'Physics' },
  { id: 3, name: 'Chemistry' },
  { id: 4, name: 'Biology' },
  { id: 5, name: 'Computer Science' },
  { id: 6, name: 'History' },
  { id: 7, name: 'Geography' },
  { id: 8, name: 'Art' },
  
  
];

// === view ===
function createDashboard(): void {
  const dashboardDiv = document.createElement('div');
  dashboardDiv.classList.add('dashboard');

  // header
  const header = document.createElement('header');
  header.classList.add('header');

  const searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.placeholder = 'Search';
  searchBox.classList.add('header__search');

  const rightSection = document.createElement('div');
  rightSection.classList.add('header__right');

  const welcomeMessage = document.createElement('div');
  welcomeMessage.classList.add('header__welcome');
  welcomeMessage.innerText = `Hello, ${currentUser.firstName}!`;

  const userImage = document.createElement('img');
  userImage.src = '../Home/assets/user.png'; 
  userImage.alt = 'User Profile Image';
  userImage.classList.add('header__profile');

  rightSection.appendChild(userImage); 
  rightSection.appendChild(welcomeMessage); 

  header.appendChild(searchBox); 
  header.appendChild(rightSection); 

  dashboardDiv.appendChild(header);

  // nav
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const logo = document.createElement('img');
  logo.src = '../Main/assets/logo.png'; 
  logo.alt = 'Logo';
  logo.classList.add('nav__logo'); 
  nav.appendChild(logo);

  const navList = document.createElement('ul');
  const navItems = ['Dashboard', 'Profile', 'Courses', 'Zoom', 'Forum', 'Lessons'];

  navItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('nav__item');
    li.innerText = item;
    navList.appendChild(li);
  });

  nav.appendChild(navList);
  dashboardDiv.appendChild(nav);

  // user
  const userDetailsContent = document.createElement('div');
  userDetailsContent.classList.add('user');

  const userInfoDiv = document.createElement('div');
  userInfoDiv.classList.add('user__info');
  userInfoDiv.innerHTML = 
    `<h3>User Info</h3>
      <img class="user__logo" src="../Home/assets/user.png" alt="user logo">
    <p>User Name: ${currentUser.firstName} ${currentUser.lastName}</p>
    <p>Email: ${currentUser.email}</p>
    <p>Student at Open University</p>
    `;
  userDetailsContent.appendChild(userInfoDiv);

  const progressDiv = document.createElement('div');
  progressDiv.classList.add('user__progress');
  progressDiv.innerHTML = `
    <h3>Progress</h3>
    <img class="user__progress-image" src="../Home/assets/progress.png" alt="progress">
  `;
  userDetailsContent.appendChild(progressDiv);

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('user__messages');
  messageDiv.innerHTML =`
    <h3>Updates</h3>
    <p>Update 1: New assignment posted for the Mathematics course. Due by Friday</p>
    <p>Update 2: The mid-term exam schedule has been updated. Check your calendar for details.</p>
    <p>Update 3: Guest lecture on 'Artificial Intelligence' will be held this Wednesday at 10 AM</p>
    <p>Update 4: Project submission deadline extended to next Monday due to technical issues</p>
  `;
  userDetailsContent.appendChild(messageDiv);

  dashboardDiv.appendChild(userDetailsContent);

  // dashboard 
  const dashboardContent = document.createElement('div');
  dashboardContent.classList.add('dashboard__content');

  // courses 
  const coursesDiv = document.createElement('div');
  coursesDiv.classList.add('dashboard__courses');
  const registeredCourses = getCoursesForStudent();

  coursesDiv.innerHTML = `<h3>Your Courses</h3><ul>${registeredCourses.map(course => `<li>${course.name}</li>`).join('')}</ul>`;
  dashboardContent.appendChild(coursesDiv);

  // student names 
  const studentListDiv = document.createElement('div');
  studentListDiv.classList.add('dashboard__students');
  studentListDiv.innerHTML = 
   `<h3>Student List</h3>
    <ul class="dashboard__students-list dashboard__scrollable">
      <li class="dashboard__students-item">John Doe</li>
      <li class="dashboard__students-item">Jane Doe</li>
      <li class="dashboard__students-item">Shira Cohen</li>
      <li class="dashboard__students-item">David Levi</li>
      <li class="dashboard__students-item">Avi Noy</li>
      <li class="dashboard__students-item">Michael Green</li>
      <li class="dashboard__students-item">Lior Katz</li>
      <li class="dashboard__students-item">Yossi Biton</li>
    </ul>`;
  dashboardContent.appendChild(studentListDiv);

  // calendar 
  const calendarDiv = document.createElement('div');
  calendarDiv.classList.add('dashboard__calendar');
  calendarDiv.innerHTML = `
    <h3>Academic Calendar</h3>
    <ul>
      <li>Mid-Term Exams: 5th - 10th November</li>
      <li>Project Submission Deadline: 20th November</li>
      <li>Final Exams: 10th - 20th December</li>
      <li>Winter Break: 24th December - 2nd January</li>
    </ul>
  `;
  dashboardContent.appendChild(calendarDiv);

  dashboardDiv.appendChild(dashboardContent);

  document.body.appendChild(dashboardDiv);
}

function getCoursesForStudent(): any[] {
  return courses.filter(course => currentUser.courses.includes(course.id));
}

// === controller ===
function renderDashboard(): void {
  createDashboard();
}

renderDashboard();
