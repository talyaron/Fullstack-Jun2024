// render objects to DOM
// const user = {
//     name:"",
//     city:"",
// }
//make it a function that get the user details
function getUserDetails() {
    try {
        // get the user name from the user
        var name = prompt("pls enter your name");
        // get the user city from the user
        var city = prompt("pls enter your city");
        if (!name || !city)
            throw new Error("Invalid input");
        // return the user object
        var user_1 = {
            name: name,
            city: city
        };
        return user_1;
    }
    catch (error) {
        console.error(error);
        return {
            name: "",
            city: ""
        };
    }
}
var user = getUserDetails();
document.write("Hi " + user.name + ", you are from " + user.city);
