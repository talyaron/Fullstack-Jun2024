const menuOptions : string [] =['my courses','courses','zoom','forum','lessons'];

const courses : string [] = ['Math','Sport','Art','Java','TypeScript'];

function renderDashboard(){
    renderNav(menuOptions);
    renderHeader();
    renderInfo();
    rendermyCourses(courses);
}

function renderNav(options : string []){
    try {
        const main = document.querySelector('.dashboard') as HTMLDivElement;
        if(!main) throw new Error('Main element not found');
        // render the side menu
        const nav = document.createElement('div') as HTMLDivElement;
        nav.classList.add('dashboard__nav');
        main.appendChild(nav);
        const logo = document.createElement('div');
        nav.appendChild(logo);
        logo.setAttribute('id','logo');
        options.forEach((option) =>{
            const menuOption = document.createElement('div') as HTMLDivElement;
            menuOption.innerHTML = `${option}`;
            nav.appendChild(menuOption);
        });
    } catch (error) {
        console.error(error);
    }
}

function renderHeader(){
    try {
        const main = document.querySelector('.dashboard') as HTMLDivElement;
        if(!main) throw new Error('Main element not found');

        const pannel = document.createElement('div') as HTMLDivElement;
        pannel.classList.add('dashboard__pannel');
        main.appendChild(pannel);
        const header = document.createElement('header');
        pannel.appendChild(header);
        const currentUsername = localStorage.getItem('currentUser');
        header.innerHTML=`<input type="text" id="search" name="search" placeholder="  Search a course">
        <p id="username"> Wellcome back <br> ${currentUsername} !!!</p>`;
        
    } catch (error) {
        console.error(error);
    }
}

function renderInfo(){
    try {
        const main = document.querySelector('.dashboard__pannel');
        if(!main) throw new Error('Main element not found');

        const myInfo = document.createElement('div');
        main.appendChild(myInfo);
        myInfo.classList.add('myInfo');
        //const mycourse = document.createElement('')
    }
    catch (error) {
        console.error(error);
    }
}

function rendermyCourses(courses : string []){
    try {
        const main = document.querySelector('.myInfo');
        if(!main) throw new Error('Main element not found');

        const myCourse = document.createElement('div');
        main.appendChild(myCourse);
        myCourse.classList.add('myInfo__myCourses');
        courses.forEach((course) =>{
            const courses = document.createElement('div') as HTMLDivElement;
            myCourse.appendChild(courses);
            myCourse.innerHTML=`${course}`;

        })
    }
    catch (error) {
        console.error(error);
    }
}

renderDashboard();