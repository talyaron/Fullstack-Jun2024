const grade: number = Number(prompt("Please enter your grade: (The grade must to be between 0 - 100)"));

if(grade >= 90){
    document.write("An 'A' is the highest grade, given for excellent work.");
}
else if( grade >= 80){
    document.write("A 'B' is a good grade, showing above-average performance.");
}
else if(grade >= 70){
    document.write("A 'C' is an average grade.");
}
else if(grade >= 60){
    document.write("A 'D' is a below-average grade, but still passing.");
}
else{
    document.write("An 'F' means failing the test.");
}