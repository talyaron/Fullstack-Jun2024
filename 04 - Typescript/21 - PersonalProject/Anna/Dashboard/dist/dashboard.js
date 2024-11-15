var menuOptions = ['my courses', 'courses', 'zoom', 'forum', 'lessons'];
var courses = ['Math', 'Sport', 'Art', 'Java', 'TypeScript'];
function renderDashboard() {
    renderNav(menuOptions);
    renderHeader();
    renderInfo();
    rendermyCourses(courses);
}
function renderNav(options) {
    try {
        var main = document.querySelector('.dashboard');
        if (!main)
            throw new Error('Main element not found');
        // render the side menu
        var nav_1 = document.createElement('div');
        nav_1.classList.add('dashboard__nav');
        main.appendChild(nav_1);
        var logo = document.createElement('div');
        nav_1.appendChild(logo);
        logo.setAttribute('id', 'logo');
        options.forEach(function (option) {
            var menuOption = document.createElement('div');
            menuOption.innerHTML = "" + option;
            nav_1.appendChild(menuOption);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderHeader() {
    try {
        var main = document.querySelector('.dashboard');
        if (!main)
            throw new Error('Main element not found');
        var pannel = document.createElement('div');
        pannel.classList.add('dashboard__pannel');
        main.appendChild(pannel);
        var header = document.createElement('header');
        pannel.appendChild(header);
        var currentUsername = localStorage.getItem('currentUser');
        header.innerHTML = "<input type=\"text\" id=\"search\" name=\"search\" placeholder=\"  Search a course\">\n        <p id=\"username\"> Wellcome back <br> " + currentUsername + " !!!</p>";
    }
    catch (error) {
        console.error(error);
    }
}
function renderInfo() {
    try {
        var main = document.querySelector('.dashboard__pannel');
        if (!main)
            throw new Error('Main element not found');
        var myInfo = document.createElement('div');
        main.appendChild(myInfo);
        myInfo.classList.add('myInfo');
        //const mycourse = document.createElement('')
    }
    catch (error) {
        console.error(error);
    }
}
function rendermyCourses(courses) {
    try {
        var main = document.querySelector('.myInfo');
        if (!main)
            throw new Error('Main element not found');
        var myCourse_1 = document.createElement('div');
        main.appendChild(myCourse_1);
        myCourse_1.classList.add('myInfo__myCourses');
        courses.forEach(function (course) {
            var courses = document.createElement('div');
            myCourse_1.appendChild(courses);
            myCourse_1.innerHTML = "" + course;
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderDashboard();
