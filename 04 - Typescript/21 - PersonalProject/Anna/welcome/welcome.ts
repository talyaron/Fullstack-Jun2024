const welcomeOptions : string [] = ['Log in','Register'];


function renderWelcomeOptions(options : string []){
    try {
    const main = document.querySelector('.welcome') as HTMLDivElement;
    const logo = document.createElement('div');
    logo.classList.add('welcome__logo');
    main.appendChild(logo);
    const titleElement = document.createElement('div');
    titleElement.classList.add('welcome__title');
    main.appendChild(titleElement);
    titleElement.innerHTML = `Welcome to <br> Pedago`;
    const logInOptions = document.createElement('div');
    logInOptions.classList.add('welcome__options');
    main.appendChild(logInOptions);
    options.forEach((option,index) =>{
        const btnElement = document.createElement('button');
        btnElement.innerHTML = `${option}`;
        btnElement.setAttribute('id',`btn-${index}`);
        logInOptions.appendChild(btnElement);
    })
    } catch (error) {
        console.error(error);
    }
}

function handleChoice(){
    try {
        const main = document.querySelector('.welcome') as HTMLDivElement;
        if(!main) throw new Error("Main Element not found");
        const linkPage = document.createElement('a');
        const logIn = document.getElementById('btn-0') as HTMLButtonElement;
        let choice : string = "";
        logIn.addEventListener('click',(event)=>{
            console.log('start');
            window.location.href = "../LogIn/LogIn.html";
        });
        const register = document.getElementById('btn-1') as HTMLButtonElement;
        register.addEventListener('click',(event) =>{
            window.location.href = "../Register/register.html";
        });
    } catch (error) {
        console.error(error);
    }
}

function main(){
    renderWelcomeOptions(welcomeOptions);
    handleChoice();
}

main();