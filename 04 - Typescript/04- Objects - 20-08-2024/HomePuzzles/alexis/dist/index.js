// // ### 1. Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.
function getData() {
    try {
        var name = prompt("What's your name?");
        var birthDateInput = prompt("When is your birthday? (YYYY-MM-DD)");
        if (!name || !birthDateInput) {
            throw new Error("Name or birthdate is missing.");
        }
        var birthDate = new Date(birthDateInput);
        var person_1 = {
            name: name,
            birthDate: birthDate
        };
        console.log(person_1);
        return person_1;
    }
    catch (error) {
        console.error("An error has occurred:", error.message);
        return {
            name: "",
            birthDate: new Date(0)
        };
    }
}
var person = getData();
function calculateAge(person) {
    try {
        var dateInput = prompt("Enter a date (YYYY-MM-DD)");
        if (!dateInput) {
            throw new Error("Date is missing.");
        }
        var date = new Date(dateInput);
        var birthDate = person.birthDate;
        var age = date.getFullYear() - birthDate.getFullYear();
        var monthDifference = date.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 ||
            (monthDifference === 0 && date.getDate() < birthDate.getDate())) {
            age--;
        }
        console.log("Hi, " + person.name + ". Your age today is " + age);
        document.write("Hi, " + person.name + ", your age today is " + age);
        return age;
    }
    catch (error) {
        console.error("An error has occurred during age calculation:", error.message);
        return 0;
    }
}
calculateAge(person);
