// Positive, Negative, or Zero Checker

const usernumber:number =  (prompt('Enter a number'));
function wichisit(usernumber:number): string {
    if(usernumber>0){
        return 'positive';}
        else if(usernumber<0){
            return 'negative';} 
            else{
                return 'zero';}
}
document.write(`The number is ${wichisit(usernumber)}`);

// Simple Grade Calculator

const testscore:number =  (prompt("Enter your test score (mast be betwin 0 to 100"));
function lettergrade(testscore:number):string{

if(testscore>=90){
    return 'A';}
    else if(testscore>=80){
        return 'B';}
        else if(testscore>=70){
            return 'C';}
            else if(testscore>=60){
                return 'D';}
                else{
                    return 'F';}    

}
document.write( `The letter grade is ${lettergrade(testscore)}`);
// Explanation of Grades:

const grade:number = prompt('Enter your test score');
function explanation (grade:number):string{
    if(grade >= 90){
        return " An 'A' is the highest grade, given for excellent work.";}
        else if(grade>=80){
            return " A 'B' is a good grade, showing above-average performance.";}
            else if(grade>=70){
                return  " A 'C' is an average grade.";}
                else if(grade>=60){
                    return " A 'D' is a below-average grade, but still passing.";}
     else{
     return " An 'F' means failing the test.";}
}
document.write(explanation(grade));

// Even or Odd Number Checker

const isEven = prompt('Enter a number');
function evenorodd(isEven:number):string{
    if(isEven%2==0){
        return 'even';}
        else{
            return 'odd';}
}
document.write(   `The number is ${evenorodd(isEven)}`);
