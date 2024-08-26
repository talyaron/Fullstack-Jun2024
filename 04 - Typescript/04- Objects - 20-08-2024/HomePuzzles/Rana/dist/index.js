// exercise 1- Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.
// interface Book{
// title:string;
// author:string;
// publicationYear:number;
// }
// function bookInfo(): Book{
//     try{
//     const title = prompt("enter a book title");
//     const author = prompt("enter the author");
//     const publicationYear: number = Number(prompt("enter a year the book was published"));
//     const book : Book ={
//         title:title,
//         author:author,
//         publicationYear:publicationYear,
//     }
// console.log(book);
// return book;
// }
// catch (error){
// console.error("An error occurred", error);
// return{
//     title:"",
//     author:"",
//     publicationYear:0,
// }
// }
// }
// const book:Book = bookInfo();
// function bookP(book){
//     document.write(`The book ${book.title}, was written by ${book.author} and published in ${book.publicationYear}`);
// }
//exercise 2 -Circle Area:
/*
interface Circle {
    radius: number;
}

function calculateArea(circle: Circle): number {
    try {
        if (circle.radius < 0) {
            throw new Error("הרדיוס לא יכול להיות שלילי.");
        }

        const area = Math.PI * Math.pow(circle.radius, 2);
        return area;
    } catch (error) {
        console.error("שגיאה בחישוב השטח:", error.message);
        return document.write(`The circle area cannot be negative`);
    }
}

const radiusInput = prompt("הזן את הרדיוס של העיגול:");
const radius = Number(radiusInput);

if (isNaN(radius)) {
    console.error("הרדיוס שהוזן אינו מספר תקין.");
} else {
    const myCircle: Circle = { radius: radius };
    const area = calculateArea(myCircle);
    document.write(`The circle area is: ${area}`)
    console.log("The circle area is:", area);
}
*/
//exercise 3- Temperature Converter
/*
interface Temperature {
  value: number;
  unit: string;
}

function convertTemperature(temp: Temperature): Temperature {
  if (temp.unit === "C") {
    const convertedValue = (temp.value * 9) / 5 + 32;
    return { value: convertedValue, unit: "F" };
  } else if (temp.unit === "F") {
    const convertedValue = ((temp.value - 32) * 5) / 9;
    return { value: convertedValue, unit: "C" };
  } else {
    throw new Error("Unit must be either 'C' or 'F'");
  }
}

const valueInput = prompt("Enter the temperature value:")!;
const unitInput = prompt("Enter the temperature unit (C or F):")!;

const temp: Temperature = { value: parseFloat(valueInput), unit: unitInput };

try {
  const convertedTemp = convertTemperature(temp);
  document.write(
    `Converted temperature: ${convertedTemp.value}°${convertedTemp.unit}`
  );
} catch (error) {
  document.write("An error occurred: " + (error as Error).message);
}

*/
//exercise 4-Person Age Calculator
/*
interface Person {
  name: string;
  birthDate: Date;
}

function calculateAge(person: Person, referenceDate: Date): number | null {
  try {
    const birthDate = new Date(person.birthDate);
    const refDate = new Date(referenceDate);

    // בדיקה אם תאריך הייחוס קטן מתאריך הלידה
    if (refDate < birthDate) {
      throw new Error("תאריך הייחוס לא יכול להיות מוקדם מתאריך הלידה");
    }

    let age = refDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = refDate.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && refDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    document.write(`גיל ${person.name} בתאריך הייחוס הוא ${age} שנים.<br>`);
    console.log(`גיל ${person.name} בתאריך הייחוס הוא ${age} שנים.`);

    return age;
  } catch (error) {
    document.write(`שגיאה: ${(error as Error).message}<br>`);
    console.error(`שגיאה: ${(error as Error).message}`);
    return null;
  }
}

function getPersonAndDateFromPrompt(): void {
  const name = prompt("הכנס את שמו של האדם:");
  const birthDateStr = prompt(
    "הכנס את תאריך הלידה של האדם (פורמט YYYY-MM-DD):"
  );
  const referenceDateStr = prompt("הכנס את תאריך הייחוס (פורמט YYYY-MM-DD):");

  if (name && birthDateStr && referenceDateStr) {
    const birthDate = new Date(birthDateStr);
    const referenceDate = new Date(referenceDateStr);

    const person: Person = { name, birthDate };
    calculateAge(person, referenceDate);
  } else {
    document.write("אנא מלא את כל השדות.<br>");
  }
}
getPersonAndDateFromPrompt();
*/
