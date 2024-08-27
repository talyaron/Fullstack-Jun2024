// //  ### 1. Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear. Write a function that takes a Book object and returns a formatted string with the book's information.

// interface Book {
//   title: string;
//   author: string;
//   publicationYear: number;
// }

// function getBookInfo(): Book {
//   try {
//     const title = prompt("Enter book title") || "";
//     const author = prompt("Enter author") || "";
//     const publicationYear = Number(prompt("Enter publication year"));

//     if (isNaN(publicationYear)) {
//       throw new Error("Invalid input: publication year must be a number.");
//     }

//     const book: Book = {
//       title: title,
//       author: author,
//       publicationYear: publicationYear,
//     };

//     return book;
//   } catch (error) {
//     console.error(error);

//     return {
//       title: "",
//       author: "",
//       publicationYear: 0,
//     };
//   }
// }

// const book = getBookInfo();
// console.log(book);
// document.write(
//   `The title of the book is "${book.title}", the author is ${book.author}, and it was published in ${book.publicationYear}.`
// );



// // ### 2. Circle Area
// // Define an interface for a Circle with a radius property. Implement a function that calculates and returns the area of the circle based on the given Circle object.

// interface Circle {
//   radius: number;
// }

// function getCircle(): Circle {
//   try {
//     const radiusInput = Number(prompt("Enter radius"));

//     if (isNaN(radiusInput) || radiusInput <= 0) {
//       throw new Error("Invalid input: radius must be a positive number.");
//     }

//     const circle: Circle = {
//       radius: radiusInput,
//     };

//     return circle;
//   } catch (error) {
//     console.error(error);

//     return {
//       radius: 0,
//     };
//   }
// }

// function calculateArea(circle: Circle): number {
//   try {
//     return Math.PI * Math.pow(circle.radius, 2);
//   } catch (error) {
//     console.error(error);
//     return 0;
//   }
// }

// const circle = getCircle();
// const area = calculateArea(circle);
// document.write(`The area of the circle is ${area.toFixed(2)}`);


// ### 3. Temperature Converter
// Create an interface for Temperature with properties: value and unit (either 'C' or 'F'). Write a function that takes a Temperature object and converts it to the opposite unit, returning a new Temperature object.

interface Temperature {
  value: number;
  unit: string;
}

function getTemperature(): Temperature {
  try {
    const value = Number(prompt("Enter temperature"));
    let unit = prompt("Enter unit (C or F)");

    if (!unit) {
      throw new Error("Invalid input: unit cannot be empty.");
    }

    unit = unit.toUpperCase();

    if (unit !== "C" && unit !== "F") {
      throw new Error("Invalid input: unit must be 'C' or 'F'.");
    }

    if (isNaN(value)) {
      throw new Error("Invalid input: temperature must be a number.");
    }

    return { value, unit };
  } catch (error) {
    console.error(error);

    return {
      value: 0,
      unit: "C",
    };
  }
}

function convertTemperature(temperature: Temperature): Temperature {
  try {
    let convertedValue: number;
    let convertedUnit: string;

    if (temperature.unit === "C") {
      convertedValue = (temperature.value * 9) / 5 + 32;
      convertedUnit = "F";
    } else if (temperature.unit === "F") {
      convertedValue = ((temperature.value - 32) * 5) / 9;
      convertedUnit = "C";
    } else {
      throw new Error("Invalid unit: must be 'C' or 'F'.");
    }

    return {
      value: convertedValue,
      unit: convertedUnit,
    };
  } catch (error) {
    console.error(error);

    return {
      value: 0,
      unit: temperature.unit,
    };
  }
}

const temperature = getTemperature();
const convertedTemperature = convertTemperature(temperature);
document.write(
  `The temperature in ${
    convertedTemperature.unit
  } is ${convertedTemperature.value.toFixed(2)}`
);