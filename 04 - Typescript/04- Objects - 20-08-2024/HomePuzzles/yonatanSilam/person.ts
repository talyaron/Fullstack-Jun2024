interface Person {
    name: string,
    birthDate: Date;
}
function getAge(person: Person): number {
    const today = new Date();
    var age: number = today.getFullYear() - person.birthDate.getFullYear();
    // בודק אם היה לו יומהולדת השנה ואם לו אז מוריד לו אחד מהגיל

    const monthsOlder = today.getMonth() > person.birthDate.getMonth()
    const daysOlder = today.getMonth() == person.birthDate.getMonth() && today.getDate() > person.birthDate.getDate()

    if (monthsOlder || daysOlder) age--;
    return age;
}


const person: Person = {
    name: "yonatan",
    birthDate: new Date('2001-08-23')
}

function newPerson(): Person {
    try {

        //get from user the name and birthrate

        const name1: string | null = (prompt("pls enter you name"));
        const day: number = Number(prompt("enter your day of birth (dd)"));
        const month: number = Number(prompt("enter your month of birth (mm)"));
        const year: number = Number(prompt("enter your year of birth (yyyy)"));

        //assertions for data validation
        if (day < 1 || day > 31) {
            throw new Error("invalid day");
           
        }

        if (name1 != null) {
            const person: Person = {
                name: name1,
                birthDate: new Date(`${year}- ${month}-${day}`)
            }
        }
        else {
            const person: Person = {
                name: "johndou",
                birthDate: new Date(`${year}- ${month}-${day}`)
            }
        }

        return person;
    } catch (error) {
        alert(error.message);
        return newPerson();
    }
}
const age = getAge(newPerson());
document.write(`you are ${age} yers old`)