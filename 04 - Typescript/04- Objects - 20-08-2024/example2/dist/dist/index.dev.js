"use strict";

// render objects to DOM
// const user = {
//     name:"",
//     city:"",
// }
//make it a function that get the user details
function getUserDetails() {
  try {
    //exception handling
    throw new Error("This is an error"); // get the user name from the user

    var name = prompt("pls enter your name"); // get the user city from the user

    var city = prompt("pls enter your city"); // return the user object

    var user = {
      name: name,
      city: city
    };
    return user;
  } catch (error) {
    console.error(error);
  }
}

getUserDetails(); // user.name = prompt("pls enter your name");
// user.city = prompt("pls enter your city");
// get the function output and render to the DOM (document.write)