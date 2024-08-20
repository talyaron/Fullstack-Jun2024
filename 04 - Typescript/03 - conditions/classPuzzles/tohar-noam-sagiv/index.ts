

// ## Exercise 2: Simple Grade Calculator

const trustScore: number = Number(prompt("Enter your trust"));

function score(trustScore: number) :string {

  if(trustScore <= 59){
    return "F";
  }else if (trustScore >= 60 && trustScore <= 69){
    return "D"
  }else if (trustScore >= 70 && trustScore <= 79){
    return "C"
   } else if (trustScore >= 80 && trustScore <= 89){
    return "B"
   } else if (trustScore >= 90){
    return "A"
   } else{
    return "Below"
  }
}

const out = score(trustScore)
console.log(out)











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