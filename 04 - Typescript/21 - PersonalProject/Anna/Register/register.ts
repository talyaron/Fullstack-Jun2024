// User classs
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

function renderRegister(){
try {
    const main = document.querySelector('.register') as HTMLDivElement;
    if(!main) throw new Error('Main element not found');
    const backImg = document.createElement('div') as HTMLDivElement; // create div that store back arrow image;
    backImg.classList.add('register__img');
    main.appendChild(backImg);
    const title = document.createElement('div') as HTMLDivElement; // create div title element 
    title.innerHTML = `Register`;
    title.classList.add('register__title');
    main.appendChild(title);
    const form = document.createElement('form');
    form.setAttribute('id','form');
    form.innerHTML =`
            <div class="input-group">
                <label for="name">Name:</label> <br>
                <input type="text" id="name" name="name"> <br>
                <span id="name_error"></span><br>
            </div>
            <div class="input-group">
                <label for="lastName">Last Name:</label><br>
                <input type="text" id="lastName" name="lastName"><br>
                <span id="lastName_error"></span><br>
            </div>
            <div class="input-group">
                <label for="email">Email:</label><br>
                <input type="text" id="email" name="email"><br>
                <span id="email_error"></span><br>
            </div>
            <div class="input-group">
                <label for="phone">Phone:</label><br>
                <input type="text" id="phone" name="phone"><br>
                <span id="phone_error"></span><br>
            </div>
            <div class="input-group">
                <label for="username">User Name:</label><br>
                <input type="text" id="username" name="username"><br>
                <span id="username_error"></span><br>
            </div>
            <div class="input-group">
                <label for="password">Password:</label><br>
                <input type="text" id="password" name="password"><br>
                <span id="password_error"></span><br>
            </div>
            <div class="input-group">
                <label for="RepeatPassword">Repeat Password:</label><br>
                <input type="text" id="repeatpassword" name="repeatpassword"><br>
                <span id="matchpassword_error"></span><br>
            </div>
        <button type="submit"> Sign up </button>
    `;
    main.appendChild(form);

} catch (error) {
    console.error(error);
}
}

function handleRegister (event : any){
    event.preventDefault();
    const name = document.getElementById('name') as HTMLInputElement;
    const lastname = document.getElementById('lastName') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const repeatpassword = document.getElementById('repeatpassword') as HTMLInputElement;
    const name_error = document.getElementById('name_error') as HTMLSpanElement;
    const lastName_error = document.getElementById('lastName_error') as HTMLSpanElement;
    const email_error = document.getElementById('email_error') as HTMLSpanElement;
    const phone_error = document.getElementById('phone_error') as HTMLSpanElement;
    const username_error = document.getElementById('username_error') as HTMLSpanElement;
    const password_error = document.getElementById('password_error') as HTMLSpanElement;
    const matchpassword_error = document.getElementById('matchpassword_error') as HTMLSpanElement;

    name_error.innerHTML = '';
    lastName_error.innerHTML = '';
    email_error.innerHTML = '';
    phone_error.innerHTML = '';
    username_error.innerHTML = '';
    password_error.innerHTML = '';
    matchpassword_error.innerHTML = '';

    let formValid = true;

    if(name.value === '' || name.value == null){
        name_error.innerHTML = `Name is required`;
        formValid = false;
    }

    if(lastname.value === '' || lastname.value == null){
        lastName_error.innerHTML = `Last name is required`;
        formValid = false;
    }

    if(email.value === '' || email.value == null){
        email_error.innerHTML = `Email is requierd`;
        formValid = false;
    }
    
    const emailMatch : string = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$";
    if(!email.value.match(emailMatch)){
        email_error.innerHTML = `Please enter a valid email`;
        formValid = false;
    }

    const phoneMatch : string = "^\\+([0-9\\-]?){9,11}[0-9]$";
    if(phone.value === '' || phone.value == null){
        phone_error.innerHTML=`Phone is required`;
        formValid = false;
    }


    if(username.value === '' || username.value == null){
        username_error.innerHTML=`User name is required`;
        formValid = false;
    }

    if(password.value === '' || password.value == null){
        password_error.innerHTML=`Password is required`;
        formValid = false;
    }

    if(password.value.length <5){
        password_error.innerHTML=`Please enter a valid password`;
        formValid = false;
    }

    if(repeatpassword.value != password.value){
        matchpassword_error.innerHTML=`Please enter matches password`;
        formValid = false;
    }

    if(isEmailExists(email.value)){
        email_error.innerHTML=`Email is exsisted`;
        formValid = false;
    }

    if(formValid){
        try {
            const user = new User(name.value, lastname.value, email.value, phone.value, username.value, password.value);
            const form = document.getElementById('form');
            if(!form) throw new Error('Main element not found');
            const userCreated = document.createElement('span');
            form.appendChild(userCreated);
            userCreated.innerHTML=`User created successfuly`;
            userCreated.setAttribute('id','success');

            saveUser(user);
            name_error.innerHTML = '';
            lastName_error.innerHTML = '';
            email_error.innerHTML = '';
            phone_error.innerHTML = '';
            username_error.innerHTML = '';
            password_error.innerHTML = '';
            matchpassword_error.innerHTML = '';
            
        } catch (error) {
            
        }
    }


}

function saveUser( user : User){
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function isEmailExists(emailToCheck: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some((user: User) => user.email === emailToCheck);
}

function handleBackButton(event:any){
    window.location.href = '../welcome/welcome.html';
}


const Users : User [] = [];

function main(){
    renderRegister();
    const form = document.getElementById('form') as HTMLFormElement;
    const backButton = document.querySelector('.register__img') as HTMLButtonElement;
    form.addEventListener('submit',handleRegister);
    backButton.addEventListener('click',handleBackButton);
}
main();