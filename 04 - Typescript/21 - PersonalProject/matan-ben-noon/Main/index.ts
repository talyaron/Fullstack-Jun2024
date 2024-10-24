//==view== 


function createMainPage(): void {
  const container = document.createElement('div');
  container.classList.add('main');

  const logo = document.createElement('img');
  logo.classList.add('main__logo');
  logo.src = '../Main/assets/logo.png'; 
  logo.alt = 'Logo'; 
  container.appendChild(logo);


  const title = document.createElement('h1');
  title.classList.add('main__title');
  title.innerText = 'Welcome to the Dashboard';
  container.appendChild(title);

  const loginButton = document.createElement('button');
  loginButton.innerText = 'Login';
  loginButton.classList.add('main__btn', 'main__btn--login');
  container.appendChild(loginButton);

  const registerButton = document.createElement('button');
  registerButton.innerText = 'Register';
  registerButton.classList.add('main__btn', 'main__btn--register');
  container.appendChild(registerButton);

  document.body.appendChild(container);
}

//==controller== 



function main(): void {
  const loginButton = document.querySelector('.main__btn--login') as HTMLButtonElement;
  const registerButton = document.querySelector('.main__btn--register') as HTMLButtonElement;

  if (loginButton) {
      loginButton.addEventListener('click', () => {
          window.location.href = '../Login'; 
      });
  }

  if (registerButton) {
      registerButton.addEventListener('click', () => {
          window.location.href = '../register';
      });
  }
}

createMainPage();
main();
