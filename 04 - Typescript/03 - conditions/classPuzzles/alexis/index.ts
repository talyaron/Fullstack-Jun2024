// //exercise 2
// let grade:number = Number(prompt('What is your grade?'));
// console.log(grade);


// function americanGrade(grade:number) :string {
//    if (grade>100){
//     return "error";
//    } else
//     if (grade>90)
//     {    return "A 'A' is the highest grade, given for excellent work.";
//     }else if (grade>80){
//         return "A 'B' is a good grade, showing above-average performance.";
//     }else if (grade>70){
//         return "A 'C' is an average grade.";
//     } else if (grade>60){
//         return "A 'D' is a below-average grade, but still passing.";
//     } else if (grade>0){
//         return "An 'F' means failing the test.";
//     } else{
//         return "error";
//     }
// }
// const yourGrade = americanGrade(grade);
// document.write(`Your grade is ${yourGrade}`);


let number:number = Number(prompt('Enter a number'));
console.log(number);


function evenNumber(number:number) :string {
   if (number%2==0)
    {
    return "Your number is even";

    }else{
        return "Your number is odd";
     }
}


const result = evenNumber(number);
document.write(result);