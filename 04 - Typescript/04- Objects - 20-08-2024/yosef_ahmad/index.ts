const user = {
    name : "";
    city: "";
}

user.name= prompt("please enter your name");
user.city= prompt("please enter your city");

console.log(user);

function get(detils: user): user{
    return detils;
}

console.log(get(user));

const return_get = get(user);

document.write('hey ${return_get.name} ')




// function get(name: string, city: string) :string{

//     return `Name: ${name}, City: ${city}`;
// }

// console.log(get(name,city);

// //make it a function that get the user details
// user.name = prompt("pls enter your name");
// user.city = prompt("pls enter your city");

// // get the function output and render to the DOM (document.write)

// return `Name: ${name}, City: ${city}`;

document.write(`שלום ${returnedPerson.name}, מה שלומך? אני רואה שאתה בן ${returnedPerson.age}.`);