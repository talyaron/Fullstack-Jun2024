//Model
class User {
    id: string;
    name: string;
    phone: string;
    email: string;
    password: string;
     constructor(name: string, phone: string, email: string, password: string) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
 }
 }

// initialization
const userlocalStorage = localStorage.getItem("users");
let users: User[];
try {
    users = userlocalStorage ? JSON.parse(userlocalStorage) : [];
} catch (error) {
    console.error("Error parsing users from localStorage:", error);
    users = [];
}


const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const send_text = document.getElementById("masseges_to_the_user") as HTMLInputElement;
if (!email || !password || !send_text) throw new Error


// Controller
async function check_login(event: Event){
    try{
        event.preventDefault();
        // check if the user is logged in
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value, password: password.value }),
        });
            if(response.ok)        
                window.location.href = "http://localhost:3000/mainPage";
            else
            send_text.textContent = "Invalid email or password!";
        }
             /* בדיקת כניסה דרך אחסון מקומי ולא מסד נתונים חציוני */
        // for(let i=0; i<users.length; i++)  
        //     if(users[i].email === email.value && users[i].password === password.value){
        //         send_text.textContent = "You are logged in!";
        //         // const nextPage = "../userMenu/userMenu.html";
        //         window.location.href = "http://localhost:3000/mainPage";
        //         let enterUser = users[i].name;

        //         let userIn= users[i];

        //         localStorage.setItem("username_login_in", JSON.stringify(userIn));
        //         localStorage.setItem('User name', JSON.stringify(enterUser));
        //         console.log(`the user `+ enterUser +  `is logged in`);
        //         break;
        //     }

    catch(error){
        console.error("Error while accessing local storage: ", error);
    }
}

function register(){
    window.location.href = "http://localhost:3000/register";
}

// View