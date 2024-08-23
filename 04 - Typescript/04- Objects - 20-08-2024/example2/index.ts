// render objects to DOM

// const user = {
//     name:"",
//     city:"",
// }

//make it a function that get the user details

function getUserDetails():{name:string, city:string} {
    try {
        
        // get the user name from the user
        const name = prompt("pls enter your name");

        // get the user city from the user
        const city = prompt("pls enter your city");

        if(!name || !city) throw new Error("Invalid input");

        // return the user object
        const user = {
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

const user = getUserDetails();

document.write(`Hi ${user.name}, you are from ${user.city}`);