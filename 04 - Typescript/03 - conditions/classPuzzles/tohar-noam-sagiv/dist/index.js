// x == 10 = is 10 or not 10
// x <= 10 - is equal to 10 or less than 10 or greather
// x >= 10 = x is equal to 10 or greaher than 10
// x != 10 = x is not 10
// Make a program that asks for a test score from 0 to 100. Then, tell the user their letter grade based on this score. Use these rules:
// - A: 90 or above
// - B: 80 to 89
// - C: 70 to 79
// - D: 60 to 69
// - F: 59 or below
var trustScore = Number(prompt("Enter your trust"));
function score(trustScore) {
    if (trustScore <= 59) {
        return "F";
    }
    else if (trustScore >= 60 && trustScore <= 69) {
        return "D";
    }
    else if (trustScore >= 70 && trustScore <= 79) {
        return "C";
    }
    else if (trustScore >= 80 && trustScore <= 89) {
        return "B";
    }
    else if (trustScore >= 90) {
        return "A";
    }
    else {
        return "f";
    }
}
var out = score(trustScore);
console.log(out);
// ## Exercise 3: Even or Odd Number Checker
// const number: number = Number(prompt("Enter your number "));
// function evenOrOdd(number: number) :string {
//   if(number % 2 === 0 ) {
//     return "is even"
//   } else{
//     return "is odd"
//   }
// }
// const answer = evenOrOdd(number)
// console.log(answer)
