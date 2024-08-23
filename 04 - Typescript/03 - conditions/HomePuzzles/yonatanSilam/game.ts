// return Math.floor(Math.random() * (max - min + 1)) + min;
const userChoice: string | null = prompt("pls enter rock, paper, or scissors");
var compChoiceP:string="";
//rock=1
//paper=2
//scissors=3
 debugger;
function rendonChoice(): string {
  const rendomNumber = Math.floor(Math.random() * 3) + 1;
  switch (rendomNumber) {
    case 1:
        compChoiceP= "rock";
      return "rock";
    case 2:
        compChoiceP= "paper";
      return "paper";
    case 3:
        compChoiceP= "scissors";
      return "scissors";
    default:
      return "null";
  }
}
//true is user win, false comp.
function game(userChoice:string|null,compChoice:string):string{
    
    if(userChoice==null)
        return "error"
    if(userChoice=== compChoice)
        return "its a tie!!"
    if(userChoice=== "rock"){
        if(compChoice ==="paper"){
            return "u lose!!"
        }else return "u win!!"
    }
    if(userChoice=== "paper"){
        if(compChoice ==="scissors"){
            return "u lose!!"
    }else return "u win!!"
    }
    if(userChoice=== "scissors"){
        if(compChoice ==="rock"){
            return "u lose!!"
        }else return "u win!!"
    }
    return "error"

}
// document.write(game(userChoice,rendonChoice()));
const score:string=game(userChoice,rendonChoice());
document.write(`u pick ${userChoice} vs ${compChoiceP} and ${score}`) 
