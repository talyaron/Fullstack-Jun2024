function init()
{
    renderLogin();
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

function checkUser(username: string, password: string): string | null
{
    const users = getUsers();
    for(const user of users)
    {
        if(user.name === username && user.password === password) return user.id;
    }
    return null;
}

// view

function renderLogin()
{
    try
    {
        const loginElement = document.querySelector<HTMLDivElement>('#app');
        if(!loginElement) throw new Error('Login element not found');
        loginElement.innerHTML = `
            <form id="login">
                <h1>Login</h1>
                <input type="text" id="username" placeholder="Username">
                <input type="password" id="password" placeholder="Password">
                <input type="checkbox" id="rememberMe">
                <input type="submit" value="login">
            </form>
        `;
        document.querySelector<HTMLFormElement>('#login')?.addEventListener('submit', login);
    }
    catch(error)
    {
        console.log(error);
    }
}

// controller

function login(event)
{
    event.preventDefault();
    const userId: string | null = checkUser(event.target.username.value, event.target.password.value);
    if(!userId)
    {
        alert('Invalid credentials');
    }
    else
    {
        localStorage.setItem('userId', userId);
        window.location.href = '../home/home.html';
    }
}

