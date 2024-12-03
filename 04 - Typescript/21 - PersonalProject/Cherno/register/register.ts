function init()
{
    renderRegister();
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

function getUsers(): User[]
{
    const usersString = localStorage.getItem('users');
    if(!usersString) return [];
    return JSON.parse(usersString);
}

function addUser(user: User)
{
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function checkMailAvailability(email: string): boolean 
{
    const users = getUsers();

    for (const user of users) 
    {
        if (user.email === email) return false;
    }
    return true;
}


// view

function renderRegister()
{
    try
    {
        const registerElement = document.querySelector<HTMLDivElement>('#app');
        if(!registerElement) throw new Error('Register element not found');
        registerElement.innerHTML = `
            <form id="register"">
                <h1>Register</h1>
                <input type="text" id="username" placeholder="Username">
                <input type="email" id="email" placeholder="Email">
                <input type="phone" id="phone" placeholder="Phone number">
                <input type="password" id="password" placeholder="Password">
                <input type="password" id="validate_password" placeholder="validate Password">
                <input type="submit" value="register">
            </form>
        `;
        document.querySelector<HTMLFormElement>('#register')?.addEventListener('submit', register);
    }
    catch (error)
    {
        console.log(error);
    }
}

// controller
function register(event)
{
    event.preventDefault();
    if (!checkMailAvailability(event.target.email.value))
    {
        return alert('Email already in use');
    }
    if (event.target.password.value !== event.target.validate_password.value)
    {
        return alert('Passwords do not match');
    }
    else
    {
        addUser(
            {
                email: event.target.email.value,
                id: crypto.randomUUID(), 
                name: event.target.username.value, 
                phone: event.target.phone.value,
                password: event.target.password.value  
            });
        
        alert('Registration successful');

        window.location.href = '../login/login.html';
    }
}

    