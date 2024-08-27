function getAge(person) {
    var today = new Date();
    var age = today.getFullYear() - person.birthDate.getFullYear();
    // בודק אם היה לו יומהולדת השנה ואם לו אז מוריד לו אחד מהגיל
    var monthsOlder = today.getMonth() > person.birthDate.getMonth();
    var daysOlder = today.getMonth() == person.birthDate.getMonth() && today.getDate() > person.birthDate.getDate();
    if (monthsOlder || daysOlder)
        age--;
    return age;
}
var person = {
    name: "yonatan",
    birthDate: new Date('2001-08-23')
};
function newPerson() {
    try {
        //get from user the name and birthrate
        var name1 = (prompt("pls enter you name"));
        var day = Number(prompt("enter your day of birth (dd)"));
        var month = Number(prompt("enter your month of birth (mm)"));
        var year = Number(prompt("enter your year of birth (yyyy)"));
        //assertions for data validation
        if (day < 1 || day > 31) {
            throw new Error("invalid day");
        }
        if (name1 != null) {
            var person_1 = {
                name: name1,
                birthDate: new Date(year + "- " + month + "-" + day)
            };
        }
        else {
            var person_2 = {
                name: "johndou",
                birthDate: new Date(year + "- " + month + "-" + day)
            };
        }
        return person;
    }
    catch (error) {
        alert(error.message);
        return newPerson();
    }
}
var age = getAge(newPerson());
document.write("you are " + age + " yers old");
