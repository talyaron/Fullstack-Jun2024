//exercise 2

// import { number } from "prop-types";

// import { number } from "prop-types";

// interface Rectangle {
//     height: number;
//     width: number;
// }

// function getRectangleArea():number {
//     try {
//         const height:number = Number(prompt('Please enter a height'));
//         const width:number = Number(prompt('Please enter a width'));

//         const rectangle:Rectangle = {
//             height:height,
//             width: width,
//         }

//         return rectangle.height * rectangle.width;

//     } catch (error) {
//         console.error(error);
//         return 0;
//     }
// }

// const rectangle = getRectangleArea();

// document.write(`The rectangle area is ${rectangle}`);



//exercise 4


// interface Person {
//     name: string;
//     dateOfBirth: number;
// }

// const user:Person = {
//     name: String(prompt('please enter your name')),
//     dateOfBirth: Number(prompt('Please enter your date of birth (DDMMYYYY)')),
// }
// function getPersonsAge(user:Person):number {
//     try {
//        const dateOfBirth:number = user.dateOfBirth; 
//        const currentDate:Date = new Date();

//        const userDate = {
//             day: Math.floor(dateOfBirth / 1000000),
//             month: Math.floor(dateOfBirth / 10000 % 100),
//             year: dateOfBirth % 10000
//        }
        
//         if (userDate.day > 31 || userDate.month > 12 
//                 || userDate.year < 1900 || userDate.day <= 0 || userDate.month <= 0
//             || userDate.year >= currentDate.getFullYear()) {

//             document.write(`The date of birth is invalid`);
//             return 0;
//             }
        
//         return (currentDate.getFullYear() - userDate.year)
//     } catch (e) {
//         e.message = "The date of birth is invalid";
//         return 0;
//     }
// }

// const age = getPersonsAge(user);
// age > 0 ? document.write(`Hi ${user.name}, your age is ${age}`) : null;

