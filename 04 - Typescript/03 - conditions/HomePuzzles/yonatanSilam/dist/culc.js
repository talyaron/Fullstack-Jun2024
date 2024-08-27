var num1 = Number(prompt("enter a first number"));
var num2 = Number(prompt("enter a second number"));
var sign = (prompt("enter the operation you want ( * / + -)"));
function culc(num1, num2, sign) {
    if (sign == null)
        return "error- u need to enter one of the four operation ";
    var answer = 0;
    if (sign == "+") {
        answer = (num1 + num2);
        return "the answer is " + answer;
    }
    if (sign == "-") {
        answer = (num1 - num2);
        return "the answer is " + answer;
    }
    if (sign == "*") {
        answer = (num1 * num2);
        return "the answer is " + answer;
    }
    if (sign == "/") {
        if (num2 != 0) {
            answer = (num1 / num2);
            return "the answer is " + answer;
        }
        else
            return "u cant divaid a number at 0 :)";
    }
    return "error- u need to enter one of the four operation(1)";
}
document.write(culc(num1, num2, sign));
