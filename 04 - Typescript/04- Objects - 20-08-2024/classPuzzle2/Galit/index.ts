
const user = {
    name:"",
    city:"",
}

function GetUserInfo (){
    try {
const name = prompt("pls enter your name");
const city = prompt("pls enter your city");

const user = {
    name: name,
    city: city,
}
return (user);

    } catch (error)
{ console.error (error);
}

}

const results = GetUserInfo();
console.log (results)
document.write (`your name is ${results?.name}, you live in ${results?.city}`)

