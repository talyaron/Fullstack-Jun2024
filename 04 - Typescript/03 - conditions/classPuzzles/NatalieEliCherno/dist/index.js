/*## Exercise 2: Simple Grade Calculator

Make a program that asks for a test score from 0 to 100. Then, tell the user their letter grade based on this score. Use these rules:

- A: 90 or above
- B: 80 to 89
- C: 70 to 79
- D: 60 to 69
- F: 59 or below*/
// we ask the user for a number
var numberGrade = Number(prompt("What is your grade?"));
//function - (giveGrades) recieve the number and return letter of grade
function giveGrades(grade) {
    if (grade >= 90) {
        return "A";
    }
    else if (grade >= 80) {
        return "B";
    }
    else if (grade >= 70) {
        return "C";
    }
    else if (grade >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
//print the answer to the user 
var letterGrade = giveGrades(numberGrade);
document.write("Your grade is " + letterGrade);
