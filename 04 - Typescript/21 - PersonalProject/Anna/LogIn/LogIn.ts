const logInOptions : string [] = ['Log in','Forget password'];

class User { 
    id  : string;
    name : string;
    lastname : string;
    email : string;
    phone : string;
    username : string;
    password : string;

    constructor (name : string,lastname : string,email : string,phone : string , username : string , password : string){
        this.id = `id-${crypto.randomUUID()}`;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }
}

function renderLogIn(loginoptions : string []){
    try {
        const main = document.querySelector('.logIn') as HTMLDivElement;
        if(!main) throw new Error("Main element not found");
        const backImg = document.createElement('div'); // create div element for the back icon
        backImg.classList.add('logIn__backImg');
        main.appendChild(backImg);
        const title = document.createElement('div'); // create div element for the Title
        title.innerHTML =`Log In`
        title.classList.add('logIn__title');
        main.appendChild(title);
        const form = document.createElement('form'); // create div element fot the form
        form.setAttribute('id','form');
        form.innerHTML = `
            <div class="input-group">
                <label for="username">User name:</label><br>
                <input type="text" id="username" name="username"><br>
                <span id="username_error"></span>
            </div>
            <div class="input-group">
                <label for="password">Password:</label><br>
                <input type="text" name="password" id="password">
                <span id="password_error"></span>
            </div>
        `;
        main.appendChild(form);
        const formButtons = document.createElement('div');
        form.appendChild(formButtons);
        formButtons.classList.add('options-button');
        loginoptions.forEach((option,index) => {
            const btn = document.createElement('button');
            btn.innerHTML=`${option}`;
            btn.setAttribute('id',`btn-${index.toString()}`);
            btn.setAttribute('type',`${option}`);
            formButtons.appendChild(btn);
        });
    } catch (error) {
        console.error(error);
    }
}


function handleLogIn(event : any){
    event.preventDefault();
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const usernameError = document.getElementById('username_error') as HTMLSpanElement;
    const passwordError = document.getElementById('password_error') as HTMLSpanElement;

    usernameError.innerHTML = '';
    passwordError.innerHTML = '';

    if(username.value === '' || username.value == null){
        usernameError.innerHTML=`User name is requierd`;
    }

    if(password.value === '' || password.value == null){
        passwordError.innerHTML=`Password is requierd`;
    }
    let isCorrect = false;

    const userList = JSON.parse(localStorage.getItem('users') || '[]');
    userList.forEach((user: User) => {
        if (user.username === username.value && user.password === password.value) {
            isCorrect = true;
            console.log(isCorrect);
        }
    });

    if(isCorrect){
        window.location.href = "../Dashboard/dashboard.html"
        localStorage.setItem('currentUser', username.value);
    }
    else {
        console.error('Invalid username or password');
        usernameError.innerHTML = 'Invalid username or password';
        passwordError.innerHTML = 'Invalid username or password';
}
}



function main(){
    renderLogIn(logInOptions);
    const logIn = document.getElementById('btn-0') as HTMLButtonElement;
    logIn.addEventListener('click',handleLogIn);
}

main();