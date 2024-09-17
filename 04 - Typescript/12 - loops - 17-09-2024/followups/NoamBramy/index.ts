
// const fruits = ["apple", "banana", "orange", "Juice", "Noam"];

// for(let i = 0; i < fruits.length; i++){
// console.log(fruits[i])
// }

// console.log("works well good")

// for(let test of fruits){
//   console.log(test)
// }

// console.log("works well good")

// for(let save in fruits){
//   console.log(fruits[save])
// }

// console.log("works well good")

// const obj = {

//   user: "Noam",
//   age: "16",
//   Country: "Israel",
// }

// for(let key in obj){
//   console.log(key, obj)
// }

// console.log("works well good")

function calc(a: number, b: number): number {
  let result = 0;
  for (let i = 0; i < a + b; i++) {
    console.log(result++)
  }
  return result;
}
const number: number = Number(prompt("Please Enter your Number"));
const number2: number = Number(prompt("Please Enter your Second Number"));

console.log(`The result of this math ${number} + ${number2}  is: ` + calc(number, number2));


