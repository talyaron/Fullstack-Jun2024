// ## Exercise 2: Simple Grade Calculator
// Make a program that asks for a test score from 0 to 100. Then, tell the user their letter grade based on this score. Use these rules:
// - A: 90 or above
// - B: 80 to 89
// - C: 70 to 79
// - D: 60 to 69
// - F: 59 or below
var score = Number(prompt('Enter your score'));
//Create a function that can determine the grade of the student
function scoreToAmericanGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
//Create a const that receives the answer
var grade = scoreToAmericanGrade(score);
//Write the answer in the document
document.write("Your grade is " + grade);
