// render objects to DOM

// const user = {
//     name:"",
//     city:"",
// }

//make it a function that get the user details

//interface is the properties of the object
interface User {
    name: string;
    city: string;
}


function getUserDetails(): User {
    try {

        // get the user name from the user
        const name = prompt("pls enter your name");

        // get the user city from the user
        const city = prompt("pls enter your city");

        if (!name || !city) throw new Error("Invalid input");

        // return the user object
        const user:User = {
            name: name,
            city: city,
        }

        return user;
    } catch (error) {
        console.error(error);
        return {
            name: "",
            city: "",
        }
    }
}

const user:User = getUserDetails();

function renderDetails(user: User) {
    document.write(`Hi ${user.name}, you are from ${user.city}`);
}

renderDetails(user);