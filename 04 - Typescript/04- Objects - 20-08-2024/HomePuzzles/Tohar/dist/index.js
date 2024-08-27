//exercise 2
var user = {
    name: String(prompt('please enter your name')),
    dateOfBirth: Number(prompt('Please enter your date of birth (DDMMYYYY)'))
};
function getPersonsAge(user) {
    try {
        var dateOfBirth = user.dateOfBirth;
        var currentDate = new Date();
        var userDate = {
            day: Math.floor(dateOfBirth / 1000000),
            month: Math.floor(dateOfBirth / 10000 % 100),
            year: dateOfBirth % 10000
        };
        if (userDate.day > 31 || userDate.month > 12
            || userDate.year < 1900 || userDate.day <= 0 || userDate.month <= 0
            || userDate.year >= currentDate.getFullYear()) {
            document.write("The date of birth is invalid");
            return 0;
        }
        return (currentDate.getFullYear() - userDate.year);
    }
    catch (e) {
        e.message = "The date of birth is invalid";
        return 0;
    }
}
var age = getPersonsAge(user);
age > 0 ? document.write("Hi " + user.name + ", your age is " + age) : null;
