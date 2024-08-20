const score: number= Number(prompt("pls enter a score."));
// debugger;
var endScore:string= "";
checkScore(score);
function checkScore(number : number):void{
    if(number >=0 && number<=100){
        endScore=giveScore(number);
        document.write(endScore);
    }else{
        const score: number= Number(prompt("pls enter a score between 0-100."));
        checkScore(score);

}
}

function giveScore(number:number):string{
        if(number<= 59)
            return "F"
        else if(number<= 69)
            return "d"
        else if(number<= 79)
            return "c"
        else if(number<= 89)
            return "b"
         else if(number<= 100)
            return "A"
        else
        return "";
}
