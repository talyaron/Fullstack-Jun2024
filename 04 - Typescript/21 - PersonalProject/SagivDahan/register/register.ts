// model
interface User {
    name: string;
    phone: string;
    email: string;
    password: string;
}

// view
const registertxt = document.createElement("h1");
registertxt.innerHTML = "Create Your Account";
document.body.appendChild(registertxt);
registertxt.classList.add("register__inputs__p");
const registerpage = document.getElementById("register");

// Helper function to create input fields
function createInput(type: string, placeholder: string, className: string): HTMLInputElement {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.className = className;
    document.body.appendChild(input);
    return input;
}

// Create input fields using the helper function
const nameInput = createInput("text", "Enter Your Name", "register__inputs register__inputs__name");
const phoneInput = createInput("number", "Enter Your Phone Number", "register__inputs register__inputs__phone");
const regemailInput = createInput("text", "Enter Your Email", "register__inputs register__inputs__email");
const regpass = createInput("password", "Enter Your Password", "register__inputs register__inputs__password");
const regpass2 = createInput("password", "Repeat Password", "register__inputs register__inputs__password2");

// Checkbox
const regcheckbox = document.createElement("input");
regcheckbox.type = "checkbox";
regcheckbox.classList.add("register__checkbox");
document.body.appendChild(regcheckbox);
//checkbox text
const regcheckboxtxt = document.createElement("p");
regcheckboxtxt.innerHTML = "Accept The Terms";
regcheckboxtxt.classList.add("register__accept");
document.body.appendChild(regcheckboxtxt);

// Register button
const registerBtn = document.createElement("button");
registerBtn.innerHTML = "Register";
registerBtn.classList.add("login__btn");
registerBtn.setAttribute('id', 'register-btn');
document.body.appendChild(registerBtn);

// Controller
registerBtn.addEventListener('click', () => {
    // Collect data
    const user: User = {
        name: nameInput.value,
        phone: phoneInput.value,
        email: regemailInput.value,
        password: regpass.value,
    };

    // Validate input
    if (user.name && user.phone && user.email && user.password && (regpass.value === regpass2.value)) {
        // Save to local storage
        localStorage.setItem('user', JSON.stringify(user));
        alert("Registration successful!");
        // Optionally redirect to login page
         window.location.href = '../login/login.html';
    } else {
        alert("Please fill all fields correctly.");
    }
});