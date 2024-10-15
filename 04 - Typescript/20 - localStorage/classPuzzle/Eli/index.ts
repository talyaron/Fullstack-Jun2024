/*
1) create a button that every time you click it, increase a counter.
 save the counter in the local storage. after reloading the page, the counter should be the same as before.

2) create user details form, with image, and render to the screen. 
save the user details in the local storage. after reloading the page, the user details should be the same as before,
 and should be rendered to the screen.
*/
//p1
const containerElement = document.getElementById("container") as HTMLElement;
const localStorageCount = localStorage.getItem("count");
let count: number = localStorageCount ? JSON.parse(localStorageCount) : 0;

function countUp() {
  containerElement.innerHTML = `<button id ="btn">${count}</button>
    `;

  const btn = document.getElementById(`btn`);
  if (btn) btn.addEventListener(`click`, handleClick);
}

function handleClick() {
  {
    count++;
    localStorage.setItem(`count`, JSON.stringify(count));
    countUp();
  }
}

countUp();

//p2
interface UserDetails{
    name:string;
    mail:string;
    img:string;
}

const localStorageDetail = localStorage.getItem("userDetail");
let userDetail: UserDetails[] = localStorageDetail ? JSON.parse(localStorageDetail) : [];
const container2Element = document.getElementById("container3") as HTMLElement;



function getUserDetails(event)
{ 
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const nameInput = formData.get("name") as string;
    const emailInput = formData.get("email") as string;
    const imgInput = formData.get("img") as string;

   const _name= nameInput;
   const _mail =emailInput;
   const _img =imgInput;
   if(_name&&_mail&&_img)
   {
    const user = {
        name: _name,
        mail: _mail,
        img: _img
    }
    userDetail.push(user);
    localStorage.setItem(`userDetail`,JSON.stringify(userDetail));
    renderUsers();
   }
}

function renderUsers(){
    const usersHTML = userDetail.map(element => {
        return `${element.name}<br>${element.mail}<br><br><img src="${element.img}"><br>`;
    }).join('-');
    container2Element.innerHTML   = usersHTML; 
}
renderUsers();