function init()
{
    renderMain();
}
init();

// model



// view

function renderMain() 
{
    try
    {
    const mainElement = document.querySelector<HTMLDivElement>('#app');
    if(!mainElement) throw new Error('Main element not found');
    mainElement.innerHTML = `
        <div id="welcome">
            <h1>Welcome to pedago!</h1>
            <div id="welcome__buttons">
                <a href="../login/login.html" class="button">Login</a>
                <a href="../register/register.html" class="button">Register</a>
            </div>
        </div>
    `;
    }
    catch(error)
    {
        console.log(error);
    }
}

// controller


