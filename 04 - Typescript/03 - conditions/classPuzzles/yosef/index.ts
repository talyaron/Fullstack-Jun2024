const num =Number( prompt('what is your score?'));
let result: string | null = "no score";
console.log(num);

function getScore(score: number): string {
    if (score >= 90) 
        return "A";
    else
    if (score >= 80) 
     return"B";
    
    else
    if (score >= 70) 
        return "C";
    
    else
    if (score >= 60)
    
        return "D";
    
        else
    if (score <= 59) 
        return  "F";
    

}
document.write('your score is     ' + getScore(num));
