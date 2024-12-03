const User1stNum = Number(prompt("give me a number"));
const User2ndNum = Number(prompt("give me a second number"));
const op = String(prompt("give me an oparator(+ - * /)"));

function cacl(firstNum: number, secondNum: number, oparat: string): string {
  if (oparat === "+") {
    return (firstNum + secondNum).toString();
  } else if (oparat === "-") {
    return (firstNum - secondNum).toString();
  } else if (oparat === "*") {
    return (firstNum * secondNum).toString();
  } else if (oparat === "/") {
    if (firstNum != 0 && secondNum != 0) {
      return (firstNum / secondNum).toString();
    }else return "cant divide by 0 :/"
  }else return "illegal oparator try again"
  return "something went horribly wrong"
}
const resalut = cacl(User1stNum,User2ndNum,op);

document.write(`${User1stNum} ${op} ${User2ndNum} = ${resalut}`)