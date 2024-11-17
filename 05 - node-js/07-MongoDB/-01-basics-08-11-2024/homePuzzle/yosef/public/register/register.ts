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

// let new_user = 0;
var counterUser = Number(localStorage.getItem('counterUser'));
let new_user = Number(localStorage.getItem('new_user')) || 0;

const userlocalStorage = localStorage.getItem("users");
const users: User[] = userlocalStorage? JSON.parse(userlocalStorage) : [];



const countineBtn = document.getElementById('countinueBtn');
if (!countineBtn) throw new Error

countineBtn.style.display = "none";

//Controller

function checkData(event: Event){
   try{
   const countineBtn = document.getElementById('countinueBtn'); // countine buuton Checks if the button exists
   if (!countineBtn) throw new Error

   const registerBtn = document.getElementById('registerBtn');
   if (!registerBtn) throw new Error

   event.preventDefault();
      var goodData = true;   // על ההתחלה אני מניח שכל הנתונים שהכנסו תקינים
     const name = document.getElementById("name") as HTMLInputElement;
     if(!name) return "error";
     const check_name = document.getElementById("check_name");
     if(!check_name) return "error";
     if(!/^[a-zA-Z\s]+$/.test(name.value))
     {
        check_name.innerHTML = "";
        check_name.innerHTML = "Invalid name. Only letters and spaces are allowed.";
        goodData = false;

     }

     // check phone number
     const phone = document.getElementById("phone") as HTMLInputElement;
     if(!phone) return "error";
     const check_phone = document.getElementById("check_phone");
     if(!check_phone) return "error";
     if(!/^\d{10}$/.test(phone.value))
     {
        check_phone.innerHTML = "Invalid phone number. It should be 10 digits long.";
        goodData = false;
     }

     // check email address
     const email = document.getElementById("email") as HTMLInputElement;
     if(!email) return "error";
     const check_email = document.getElementById("check_email");
     if(!check_email) return "error";
     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
     {
        check_email.innerHTML = "Invalid email address.";
        goodData = false;
     }

   // check password
     const password = document.getElementById("password") as HTMLInputElement;
     if(!password) return "error";
     const confirmPassword = document.getElementById("confirm-password") as HTMLInputElement;
     if(!confirmPassword) return "error";
     const send_text = document.getElementById("check_confirm_password");
     if(!send_text) return "error";
     if(password.value=="" || confirmPassword.value =="")
     {
       goodData = false;
       send_text.innerHTML = "Password fields cannot be empty";
      }
      if(password.value.length<8)   /* check if password is at least 8 characters long */
     {
       goodData = false;
       send_text.innerHTML = "Password should be at least 8 characters long";
      }
   

     if(password.value!== confirmPassword.value)   /* check if password is correct */
     {
       goodData = false;
       send_text.innerHTML = "Passwords do not match";
      }

      if (goodData)
         {
         send_text.style.fontSize = "30px";
         send_text.style.color = "green";
         send_text.innerHTML = "The registration was successful"

         check_name.innerHTML = "success";
         check_phone.innerHTML = "success";
         check_email.innerHTML = "success";

         check_name.style.color = "green";
         check_phone.style.color = "green";
         check_email.style.color = "green";
         send_text.style.color = "green";
         countineBtn.style.display = "flex";
         registerBtn.style.display = "none";
         

         registerUser(name.value, phone.value, email.value, password.value)
         alert("You have successfully registered")
         continueBtn();
         }
}
catch (error)
   {
    console.error(error);
   }
}

//Controller

function registerUser(name: string, phone: string, email: string, password: string){
   try{

    const user = new User(name, phone, email, password)
       users.push(user)     /* פה זה מערך בתוך הקובץ ולא המערך של השרת */ 
    counterUser++;      /* זה שומר באחסון המקומי כמה אנשים נרשמו */
    console.log(`now user number : ${new_user}`);
   new_user++;
   localStorage.setItem('new_user', String(new_user));
   localStorage.setItem(`users`, JSON.stringify(users));

    /* send to the server */
   const response = fetch('http://localhost:3000/api/users/register', {
     method: 'POST',
    headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({name,password,email,phone}),
    });
   } 

   catch(error){
    console.error(error);
   }
}
// controller
async function continueBtn(){
   try{
      window.location.href = "http://localhost:3000";
   }
   catch(error){
    console.error(error);
   }
}

